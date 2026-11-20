// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// Fallback nur, damit lokale Builds ohne Domain funktionieren. In Produktion PUBLIC_SITE_URL setzen.
const site = env.PUBLIC_SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
