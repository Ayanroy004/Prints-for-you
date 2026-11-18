import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-unbundled-src-assets',
      apply: 'build',
      closeBundle() {
        const distDir = path.resolve('dist');
        const srcAssets = path.resolve('src/assets');
        const distAssets = path.resolve('dist/src/assets');

        if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
          fs.cpSync(srcAssets, distAssets, {
            recursive: true,
            force: true,
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve('.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});