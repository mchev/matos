<?php

namespace App\Jobs;

use App\Mail\NewsletterTestMail;
use App\Models\Newsletter;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendNewsletterToAllUsers implements ShouldQueue
{
    use Queueable;

    public int $timeout = 900;

    public function __construct(
        public Newsletter $newsletter
    ) {}

    public function handle(): void
    {
        $query = User::query()
            ->whereNotNull('email')
            ->where('email', '!=', '');

        $count = 0;
        $mail = new NewsletterTestMail($this->newsletter->subject, $this->newsletter->body_html);

        $query->chunk(100, function ($users) use ($mail, &$count) {
            foreach ($users as $user) {
                Mail::to($user->email)->send(clone $mail);
                $count++;
            }
        });

        $this->newsletter->update([
            'sent_at' => now(),
            'recipients_count' => $count,
        ]);
    }
}
