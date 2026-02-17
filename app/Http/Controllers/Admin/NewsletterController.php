<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SendTestNewsletterRequest;
use App\Http\Requests\Admin\StoreNewsletterRequest;
use App\Http\Requests\Admin\UpdateNewsletterRequest;
use App\Jobs\SendNewsletterToAllUsers;
use App\Mail\NewsletterTestMail;
use App\Models\Newsletter;
use App\Models\User;
use App\Services\BrevoCampaignService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class NewsletterController extends Controller
{
    public function __construct(
        private BrevoCampaignService $brevoCampaign
    ) {}

    public function index(): Response
    {
        $newsletters = Newsletter::with('user:id,name')
            ->latest()
            ->paginate(10);

        return Inertia::render('Admin/Newsletters/Index', [
            'newsletters' => $newsletters,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Newsletters/Create');
    }

    public function store(StoreNewsletterRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $bodyHtml = $this->normalizeBody($validated['body_html']);

        Newsletter::create([
            'subject' => $validated['subject'],
            'body_html' => $bodyHtml,
            'user_id' => $request->user()->id,
        ]);

        return redirect()->route('admin.newsletters.index')
            ->with('success', 'Newsletter créée.');
    }

    public function edit(Newsletter $newsletter): Response
    {
        $admins = User::where('is_admin', true)
            ->orderBy('name')
            ->get(['id', 'name', 'email']);

        $listId = config('services.brevo.list_id');

        return Inertia::render('Admin/Newsletters/Edit', [
            'newsletter' => $newsletter,
            'admins' => $admins,
            'brevo_list_configured' => ! empty($listId) && is_numeric($listId),
        ]);
    }

    public function update(UpdateNewsletterRequest $request, Newsletter $newsletter): RedirectResponse
    {
        if ($newsletter->isSent()) {
            return back()->withErrors(['newsletter' => 'Une newsletter déjà envoyée ne peut pas être modifiée.']);
        }

        $validated = $request->validated();
        $bodyHtml = $this->normalizeBody($validated['body_html']);

        $newsletter->update([
            'subject' => $validated['subject'],
            'body_html' => $bodyHtml,
        ]);

        return redirect()->route('admin.newsletters.index')
            ->with('success', 'Newsletter mise à jour.');
    }

    public function destroy(Newsletter $newsletter): RedirectResponse
    {
        if ($newsletter->isSent()) {
            return back()->withErrors(['newsletter' => 'Une newsletter déjà envoyée ne peut pas être supprimée.']);
        }

        $newsletter->delete();

        return redirect()->route('admin.newsletters.index')
            ->with('success', 'Newsletter supprimée.');
    }

    public function preview(Newsletter $newsletter): View
    {
        return view('emails.newsletter-preview', [
            'subject' => $newsletter->subject,
            'bodyHtml' => $newsletter->body_html,
        ]);
    }

    public function sendTest(SendTestNewsletterRequest $request, Newsletter $newsletter): RedirectResponse
    {
        $admin = User::findOrFail($request->validated('admin_id'));
        if (! $admin->is_admin) {
            return back()->withErrors(['admin_id' => 'L\'utilisateur sélectionné n\'est pas administrateur.']);
        }

        $mail = new NewsletterTestMail($newsletter->subject, $newsletter->body_html);
        $mail->to($admin->email);

        \Illuminate\Support\Facades\Mail::send($mail);

        return back()->with('success', 'Mail de test envoyé à '.$admin->email);
    }

    public function send(Request $request, Newsletter $newsletter): RedirectResponse
    {
        if ($newsletter->isSent()) {
            return back()->withErrors(['newsletter' => 'Cette newsletter a déjà été envoyée.']);
        }

        $listId = config('services.brevo.list_id');
        if (empty($listId) || ! is_numeric($listId)) {
            return back()->withErrors(['brevo' => 'La liste Brevo (BREVO_LIST_ID) n\'est pas configurée.']);
        }

        try {
            $campaign = $this->brevoCampaign->createCampaign(
                name: 'Newsletter: '.Str::limit($newsletter->subject, 50),
                subject: $newsletter->subject,
                htmlContent: $newsletter->body_html,
                listIds: [(int) $listId],
            );

            $campaignId = $campaign['id'] ?? null;
            if (! $campaignId) {
                return back()->withErrors(['brevo' => 'Création de la campagne Brevo impossible.']);
            }

            $this->brevoCampaign->sendCampaignNow($campaignId);

            $newsletter->update([
                'sent_at' => now(),
                'brevo_campaign_id' => $campaignId,
            ]);

            return back()->with('success', 'Newsletter envoyée à la liste.');
        } catch (\Throwable $e) {
            return back()->withErrors(['brevo' => 'Erreur Brevo: '.$e->getMessage()]);
        }
    }

    public function sendToAllUsers(Request $request, Newsletter $newsletter): RedirectResponse
    {
        if ($newsletter->isSent()) {
            return back()->withErrors(['newsletter' => 'Cette newsletter a déjà été envoyée.']);
        }

        $recipientsCount = User::query()
            ->whereNotNull('email')
            ->where('email', '!=', '')
            ->count();

        if ($recipientsCount === 0) {
            return back()->withErrors(['newsletter' => 'Aucun utilisateur avec adresse email à jour.']);
        }

        SendNewsletterToAllUsers::dispatch($newsletter);

        return back()->with(
            'success',
            "Envoi en cours à {$recipientsCount} utilisateur(s). L'envoi est traité en arrière-plan."
        );
    }

    /**
     * @return \Illuminate\Http\JsonResponse|RedirectResponse
     */
    public function stats(Newsletter $newsletter)
    {
        if (! $newsletter->brevo_campaign_id) {
            if (request()->wantsJson() || request()->ajax()) {
                return response()->json(['stats' => null, 'message' => 'Aucune campagne Brevo pour cette newsletter.']);
            }

            return back()->withErrors(['newsletter' => 'Aucune campagne Brevo pour cette newsletter.']);
        }

        try {
            $data = $this->brevoCampaign->getCampaignStats($newsletter->brevo_campaign_id);
            $stats = $data['statistics']['globalStats'] ?? $data;

            if (request()->wantsJson() || request()->ajax()) {
                return response()->json(['stats' => $stats]);
            }

            return back()->with('stats', $stats);
        } catch (\Throwable $e) {
            if (request()->wantsJson() || request()->ajax()) {
                return response()->json(['stats' => null, 'error' => $e->getMessage()], 422);
            }

            return back()->withErrors(['brevo' => 'Erreur lors de la récupération des statistiques: '.$e->getMessage()]);
        }
    }

    private function normalizeBody(string $body): string
    {
        $trimmed = trim($body);
        if ($trimmed === '') {
            return $trimmed;
        }
        if (Str::contains($trimmed, ['<html', '<body', '<p>', '<div'])) {
            return $trimmed;
        }

        return (string) Str::markdown($trimmed);
    }
}
