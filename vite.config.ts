import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

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
            '@': path.resolve(rootDir, './resources/js'),
            'ziggy-js': path.resolve(rootDir, 'vendor/tightenco/ziggy'),
        },
    },
});
