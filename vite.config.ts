import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';

import { tanstackStart } from '@tanstack/react-start/plugin/vite';

import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [
        devtools(),
        tailwindcss(),
        tanstackStart({
            prerender: {
                autoStaticPathsDiscovery: true,
            },
            pages: [
                {
                    path: '/properties',
                    prerender: { enabled: true, outputPath: '/properties/index.html' },
                }
            ]
        }),
        viteReact(),
    ],
});

export default config;
