// Ermittelt die Basis-URL aus PUBLIC_SITE_URL oder site.domain (src/config/site.ts).
// Als .mjs, damit astro.config.mjs und die Seiten dieselbe Logik nutzen.
/** @param {{ domain: string; useWww: boolean }} site @param {string | undefined} override */
export function siteUrlFromConfig(site, override) {
  if (override) return override.replace(/\/$/, '');
  const d = site.domain.trim();
  if (!d || d.startsWith('TODO')) return 'https://example.com';
  const host = d.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
  return `https://${site.useWww ? 'www.' : ''}${host}`;
}
