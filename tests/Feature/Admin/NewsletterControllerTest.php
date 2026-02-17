<?php

use App\Jobs\SendNewsletterToAllUsers;
use App\Mail\NewsletterTestMail;
use App\Models\Newsletter;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;

beforeEach(function () {
    $this->admin = User::factory()->create(['is_admin' => true]);
});

test('admin can see newsletters index', function () {
    $response = $this->actingAs($this->admin)->get(route('admin.newsletters.index'));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Newsletters/Index')
        ->has('newsletters')
    );
});

test('guest cannot see newsletters index', function () {
    $response = $this->get(route('admin.newsletters.index'));

    $response->assertRedirect();
});

test('non-admin user cannot see newsletters index', function () {
    $user = User::factory()->create(['is_admin' => false]);
    $response = $this->actingAs($user)->get(route('admin.newsletters.index'));

    $response->assertForbidden();
});

test('admin can create newsletter', function () {
    $response = $this->actingAs($this->admin)->post(route('admin.newsletters.store'), [
        'subject' => 'Sujet test',
        'body_html' => '<p>Contenu HTML</p>',
    ]);

    $response->assertRedirect(route('admin.newsletters.index'));
    $this->assertDatabaseHas('newsletters', [
        'subject' => 'Sujet test',
        'body_html' => '<p>Contenu HTML</p>',
        'user_id' => $this->admin->id,
    ]);
});

test('admin can create newsletter with markdown body', function () {
    $response = $this->actingAs($this->admin)->post(route('admin.newsletters.store'), [
        'subject' => 'Markdown test',
        'body_html' => "## Titre\n\nParagraphe **gras**.",
    ]);

    $response->assertRedirect(route('admin.newsletters.index'));
    $newsletter = Newsletter::where('subject', 'Markdown test')->first();
    expect($newsletter)->not->toBeNull();
    expect($newsletter->body_html)->toContain('<h2>');
});

test('admin can send test email to another admin', function () {
    Mail::fake();
    $otherAdmin = User::factory()->create(['is_admin' => true]);
    $newsletter = Newsletter::create([
        'subject' => 'Test',
        'body_html' => '<p>Body</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->post(route('admin.newsletters.send-test', $newsletter), [
        'admin_id' => $otherAdmin->id,
    ]);

    $response->assertRedirect();
    Mail::assertSent(NewsletterTestMail::class, function ($mail) use ($otherAdmin) {
        return $mail->hasTo($otherAdmin->email);
    });
});

test('admin cannot send test to non-admin user', function () {
    $user = User::factory()->create(['is_admin' => false]);
    $newsletter = Newsletter::create([
        'subject' => 'Test',
        'body_html' => '<p>Body</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->post(route('admin.newsletters.send-test', $newsletter), [
        'admin_id' => $user->id,
    ]);

    $response->assertRedirect();
    $response->assertSessionHasErrors('admin_id');
});

test('admin can preview newsletter', function () {
    $newsletter = Newsletter::create([
        'subject' => 'Preview',
        'body_html' => '<p>Preview content</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->get(route('admin.newsletters.preview', $newsletter));

    $response->assertSuccessful();
    $response->assertSee('Preview content', false);
});

test('admin can update draft newsletter', function () {
    $newsletter = Newsletter::create([
        'subject' => 'Original',
        'body_html' => '<p>Original</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->put(route('admin.newsletters.update', $newsletter), [
        'subject' => 'Updated',
        'body_html' => '<p>Updated body</p>',
    ]);

    $response->assertRedirect(route('admin.newsletters.index'));
    $newsletter->refresh();
    expect($newsletter->subject)->toBe('Updated');
    expect($newsletter->body_html)->toContain('Updated body');
});

test('admin cannot update sent newsletter', function () {
    $newsletter = Newsletter::create([
        'subject' => 'Sent',
        'body_html' => '<p>Sent</p>',
        'user_id' => $this->admin->id,
        'sent_at' => now(),
    ]);

    $response = $this->actingAs($this->admin)->put(route('admin.newsletters.update', $newsletter), [
        'subject' => 'Hack',
        'body_html' => '<p>Hack</p>',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasErrors('newsletter');
    $newsletter->refresh();
    expect($newsletter->subject)->toBe('Sent');
});

test('admin can delete draft newsletter', function () {
    $newsletter = Newsletter::create([
        'subject' => 'To delete',
        'body_html' => '<p>Body</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->delete(route('admin.newsletters.destroy', $newsletter));

    $response->assertRedirect(route('admin.newsletters.index'));
    $this->assertModelMissing($newsletter);
});

test('admin cannot delete sent newsletter', function () {
    $newsletter = Newsletter::create([
        'subject' => 'Sent',
        'body_html' => '<p>Sent</p>',
        'user_id' => $this->admin->id,
        'sent_at' => now(),
    ]);

    $response = $this->actingAs($this->admin)->delete(route('admin.newsletters.destroy', $newsletter));

    $response->assertRedirect();
    $response->assertSessionHasErrors('newsletter');
    $this->assertDatabaseHas('newsletters', ['id' => $newsletter->id]);
});

test('admin can send newsletter to all users', function () {
    Queue::fake();
    User::factory()->create(['email' => 'u1@example.com']);
    User::factory()->create(['email' => 'u2@example.com']);

    $newsletter = Newsletter::create([
        'subject' => 'To All',
        'body_html' => '<p>Hi all</p>',
        'user_id' => $this->admin->id,
    ]);

    $response = $this->actingAs($this->admin)->post(
        route('admin.newsletters.send-to-all-users', $newsletter)
    );

    $response->assertRedirect();
    $response->assertSessionHas('success');
    Queue::assertPushed(SendNewsletterToAllUsers::class, function ($job) use ($newsletter) {
        return $job->newsletter->id === $newsletter->id;
    });
});

test('admin cannot send to all users when newsletter already sent', function () {
    $newsletter = Newsletter::create([
        'subject' => 'Sent',
        'body_html' => '<p>Done</p>',
        'user_id' => $this->admin->id,
        'sent_at' => now(),
    ]);

    $response = $this->actingAs($this->admin)->post(
        route('admin.newsletters.send-to-all-users', $newsletter)
    );

    $response->assertRedirect();
    $response->assertSessionHasErrors('newsletter');
});

test('admin can get stats when brevo_campaign_id is set', function () {
    Http::fake([
        'api.brevo.com/*' => Http::response([
            'statistics' => [
                'globalStats' => [
                    'sent' => 100,
                    'openers' => 50,
                    'clicks' => 20,
                ],
            ],
        ], 200),
    ]);

    $newsletter = Newsletter::create([
        'subject' => 'Campaign',
        'body_html' => '<p>Body</p>',
        'user_id' => $this->admin->id,
        'sent_at' => now(),
        'brevo_campaign_id' => 123,
    ]);

    $response = $this->actingAs($this->admin)->get(route('admin.newsletters.stats', $newsletter), [
        'Accept' => 'application/json',
    ]);

    $response->assertSuccessful();
    $data = $response->json();
    expect($data)->toHaveKey('stats');
    expect($data['stats']['sent'])->toBe(100);
});
