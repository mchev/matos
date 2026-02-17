<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class BrevoCampaignService
{
    private const BASE_URL = 'https://api.brevo.com/v3';

    public function createCampaign(string $name, string $subject, string $htmlContent, array $listIds): array
    {
        $response = Http::withHeaders([
            'accept' => 'application/json',
            'content-type' => 'application/json',
            'api-key' => config('services.brevo.key'),
        ])->post(self::BASE_URL.'/emailCampaigns', [
            'tag' => 'newsletter',
            'sender' => [
                'name' => config('mail.from.name'),
                'email' => config('mail.from.address'),
            ],
            'name' => $name,
            'subject' => $subject,
            'htmlContent' => $htmlContent,
            'listIds' => $listIds,
        ]);

        $response->throw();

        return $response->json();
    }

    public function sendCampaignNow(int $campaignId): void
    {
        $response = Http::withHeaders([
            'api-key' => config('services.brevo.key'),
        ])->post(self::BASE_URL."/emailCampaigns/{$campaignId}/sendNow");

        $response->throw();
    }

    /**
     * @return array<string, mixed>
     */
    public function getCampaignStats(int $campaignId): array
    {
        $response = Http::withHeaders([
            'accept' => 'application/json',
            'api-key' => config('services.brevo.key'),
        ])->get(self::BASE_URL."/emailCampaigns/{$campaignId}", [
            'statistics' => 'globalStats',
        ]);

        $response->throw();

        return $response->json();
    }
}
