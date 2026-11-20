# Technische Entscheidungen

Kurzes Protokoll, damit jede spätere Betreuung nachvollziehen kann, *warum* etwas so ist.

| Datum | Entscheidung | Begründung | Alternativen |
|---|---|---|---|
| 2026-11-20 | Ein Repository (Monorepo) mit `website/`, `brand-media/`, `docs/` | Eine Übergabe statt drei; Code, Texte und Doku versionieren gemeinsam | Getrennte Repos |
| 2026-11-20 | Astro, statische Ausgabe, Inhalte als Markdown | Sehr schnell (Core Web Vitals), sicher (kein Server, keine Datenbank), Texte ohne Code änderbar, hosterunabhängig | WordPress (Wartungs-/Sicherheitsaufwand), Webflow/Wix (Lock-in, Übergabe schwieriger) |
| 2026-11-20 | Tailwind CSS + Brand-Tokens in JSON | Eine Quelle für Farben/Schriften, leicht anpassbar | – |
| 2026-11-20 | Alle Projektfakten in `site.ts`, offene Werte als `TODO:` + Launch-Sperre | Keine erfundenen Daten, kein versehentlicher Launch mit Platzhaltern | – |
| 2026-11-20 | Hosting Vercel (geplant), Code hosterneutral | Vorschau-Links pro Änderung; **Hobby-Plan nicht für kommerzielle Nutzung → Pro auf Kundin** oder Cloudflare Pages | Netlify, Cloudflare Pages |
| 2026-11-20 | GA4 nur nach Einwilligung, Consent Mode v2 | Kundenwunsch Google-Ökosystem, UK PECR-konform | Plausible/Fathom (cookiefrei, kein Banner nötig, kostenpflichtig) |
| 2026-11-20 | Formular über externen Dienst (Konto Kundin) | Kein eigener Server nötig, Übergabe trivial | Vercel Function + E-Mail-API |
| 2026-11-20 | Rohmedien nicht im Git, Pipelines mit sharp/ffmpeg | Repo bleibt klein; Originale im Speicher der Kundin | Git LFS |
