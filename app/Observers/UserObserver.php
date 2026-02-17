<?php

namespace App\Observers;

use App\Models\User;
use App\Services\BrevoContactService;

class UserObserver
{
    public function __construct(
        private BrevoContactService $brevoContacts
    ) {}

    public function created(User $user): void
    {
        $this->syncToBrevoIfNeeded($user);
    }

    public function updated(User $user): void
    {
        if ($user->wasChanged(['email', 'name'])) {
            $this->syncToBrevoIfNeeded($user);
        }
    }

    private function syncToBrevoIfNeeded(User $user): void
    {
        if (empty($user->email)) {
            return;
        }

        try {
            $this->brevoContacts->syncUserToList($user);
        } catch (\Throwable) {
            // Ne pas bloquer l'inscription en cas d'erreur Brevo
        }
    }
}
