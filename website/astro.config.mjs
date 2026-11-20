// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

import { site as siteConfig } from './src/config/site.ts';
import { siteUrlFromConfig } from './src/lib/site-url.mjs';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// Domain kommt aus src/config/site.ts; PUBLIC_SITE_URL kann sie überschreiben.
const site = siteUrlFromConfig(siteConfig, env.PUBLIC_SITE_URL);

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
