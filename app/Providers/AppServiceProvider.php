<?php

namespace App\Providers;

use App\Models\Equipment;
use App\Models\User;
use App\Observers\EquipmentObserver;
use App\Observers\UserObserver;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Equipment::observe(EquipmentObserver::class);
        User::observe(UserObserver::class);

        Event::listen(function (\SocialiteProviders\Manager\SocialiteWasCalled $event) {
            $event->extendSocialite('google', \SocialiteProviders\Google\Provider::class);
            $event->extendSocialite('helloasso', \App\Providers\HelloAssoProvider::class);
        });
    }
}
