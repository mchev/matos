<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;

class BrevoContactService
{
    private const BASE_URL = 'https://api.brevo.com/v3';

    /**
     * Create or update a contact and optionally add to lists.
     *
     * @param  array<int>  $listIds
     * @return array<string, mixed>
     */
    public function createOrUpdateContact(string $email, array $attributes = [], array $listIds = []): array
    {
        $body = array_filter([
            'email' => $email,
            'attributes' => $attributes,
            'listIds' => $listIds ?: null,
            'updateEnabled' => true,
        ], fn ($v) => $v !== null && $v !== []);

        $response = Http::withHeaders([
            'accept' => 'application/json',
            'content-type' => 'application/json',
            'api-key' => config('services.brevo.key'),
        ])->post(self::BASE_URL.'/contacts', $body);

        $response->throw();

        return $response->json();
    }

    /**
     * Add contacts to a list by email (max 150 per request).
     *
     * @param  array<string>  $emails
     */
    public function addContactsToList(int $listId, array $emails): void
    {
        $chunks = array_chunk(array_values($emails), 150);
        foreach ($chunks as $chunk) {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'content-type' => 'application/json',
                'api-key' => config('services.brevo.key'),
            ])->post(self::BASE_URL."/contacts/lists/{$listId}/contacts/add", [
                'emails' => $chunk,
            ]);
            $response->throw();
        }
    }

    /**
     * Sync a user to the configured Brevo newsletter list (create/update contact + add to list).
     */
    public function syncUserToList(User $user): void
    {
        $listId = config('services.brevo.list_id');
        if (empty($listId) || ! is_numeric($listId) || empty($user->email)) {
            return;
        }

        $this->createOrUpdateContact($user->email, [
            'PRENOM' => $user->name,
            'NOM' => $user->name,
        ], [(int) $listId]);
    }
}
