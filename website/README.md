# website – Astro-Site

```bash
npm install          # einmalig, im Hauptordner des Repos
npm run dev          # lokale Vorschau auf http://localhost:4321
npm run build        # Produktions-Build nach website/dist/
npm run todos        # offene Platzhalter anzeigen
```

| Was ändern? | Datei |
|---|---|
| Name, E-Mail, Sprachen, Fachgebiete, Rechtsangaben | `src/config/site.ts` |
| Seitentexte | `src/content/pages/<sprache>/*.md` |
| Leistungen | `src/content/services/<sprache>/*.md` |
| Menü-, Button- und Formulartexte | `src/i18n/ui.ts` |
| Farben & Schriften | `../brand-media/tokens/tokens.json` → `npm run tokens` |
| Sicherheits-Header | `vercel.json` |

Technik: Astro (statisch, kein Server nötig), Tailwind CSS, Schema.org JSON-LD
(`src/lib/schema.ts`), Sitemap, Cookie-Einwilligung vor Google Analytics
(`src/components/ConsentBanner.astro`). Da die Seite rein statisch ist, kann sie bei jedem
Hoster laufen (Vercel, Netlify, Cloudflare Pages) – kein Lock-in.
