<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Services\BrevoContactService;
use Illuminate\Console\Command;

class BrevoSyncUsersCommand extends Command
{
    protected $signature = 'brevo:sync-users
                            {--dry-run : Afficher les utilisateurs sans appeler l\'API}';

    protected $description = 'Synchronise tous les utilisateurs ayant un email vers la liste Brevo (BREVO_LIST_ID)';

    public function handle(BrevoContactService $brevo): int
    {
        $listId = config('services.brevo.list_id');
        if (empty($listId) || ! is_numeric($listId)) {
            $this->error('BREVO_LIST_ID doit être défini dans .env');

            return self::FAILURE;
        }

        $users = User::query()
            ->whereNotNull('email')
            ->where('email', '!=', '')
            ->get();

        if ($users->isEmpty()) {
            $this->warn('Aucun utilisateur avec email.');

            return self::SUCCESS;
        }

        if ($this->option('dry-run')) {
            $this->info('Mode dry-run : '.$users->count().' utilisateur(s) seraient synchronisés.');
            $this->table(['ID', 'Email', 'Nom'], $users->map(fn ($u) => [$u->id, $u->email, $u->name]));

            return self::SUCCESS;
        }

        $bar = $this->output->createProgressBar($users->count());
        $bar->start();

        $failed = 0;
        foreach ($users as $user) {
            try {
                $brevo->syncUserToList($user);
            } catch (\Throwable $e) {
                $failed++;
                $this->newLine();
                $this->warn("Erreur pour {$user->email}: ".$e->getMessage());
            }
            $bar->advance();
        }

        $bar->finish();
        $this->newLine(2);
        $this->info('Synchronisation terminée. '.($users->count() - $failed).' contact(s) envoyé(s).');
        if ($failed > 0) {
            $this->warn("{$failed} erreur(s).");
        }

        return self::SUCCESS;
    }
}
