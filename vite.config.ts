import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    ssr: {
        // Bundle only SSR runtime deps so ssr.js stays small. Requires production
        // node_modules on the server (e.g. deploy node_modules or run npm ci --omit=dev once).
        noExternal: [
            '@inertiajs/vue3',
            '@vue/server-renderer',
            'laravel-vite-plugin',
            'ziggy-js',
            'vue',
        ],
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
