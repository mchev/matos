<?php

namespace App\Jobs;

use App\Models\User;
use App\Notifications\UserCreatedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class NotifyAdminUserCreated implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public User $user)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // $admin = User::where('email', config('mail.from.address'))->first();

        $administrators = User::where('is_admin', true)->get();

        foreach ($administrators as $administrator) {
            $administrator->notify(new UserCreatedNotification($this->user));
        }
    }
}
