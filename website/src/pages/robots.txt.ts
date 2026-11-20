import type { APIRoute } from 'astro';
import { indexable, env } from '../lib/env';

export const GET: APIRoute = () => {
  const base = env.siteUrl.replace(/\/$/, '');
  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`
    : `# Noch nicht freigegeben (launch.ready = false oder Vorschau-Deployment)\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
