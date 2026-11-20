# Technische Entscheidungen

Kurzes Protokoll, damit jede spätere Betreuung nachvollziehen kann, *warum* etwas so ist.

| Datum | Entscheidung | Begründung | Alternativen |
|---|---|---|---|
| 2026-11-20 | Ein Repository (Monorepo) mit `website/`, `brand-media/`, `docs/` | Eine Übergabe statt drei; Code, Texte und Doku versionieren gemeinsam | Getrennte Repos |
| 2026-11-20 | Astro, statische Ausgabe, Inhalte als Markdown | Sehr schnell (Core Web Vitals), sicher (kein Server, keine Datenbank), Texte ohne Code änderbar, hosterunabhängig | WordPress (Wartungs-/Sicherheitsaufwand), Webflow/Wix (Lock-in, Übergabe schwieriger) |
| 2026-11-20 | Tailwind CSS + Brand-Tokens in JSON | Eine Quelle für Farben/Schriften, leicht anpassbar | – |
| 2026-11-20 | Alle Projektfakten in `site.ts`, offene Werte als `TODO:` + Launch-Sperre | Keine erfundenen Daten, kein versehentlicher Launch mit Platzhaltern | – |
| 2026-11-20 | Hosting Cloudflare Pages (Wunsch Aka), Code hosterneutral | Domain liegt bereits bei Cloudflare → ein Konto für Domain, DNS, Hosting; kommerzielle Nutzung im Gratis-Plan erlaubt; Vorschau-Link pro Pull Request | Vercel (Hobby nicht kommerziell), Netlify |
| 2026-11-20 | GA4 nur nach Einwilligung, Consent Mode v2 | Kundenwunsch Google-Ökosystem, UK PECR-konform | Plausible/Fathom (cookiefrei, kein Banner nötig, kostenpflichtig) |
| 2026-11-20 | Formular über externen Dienst (Konto Kundin) | Kein eigener Server nötig, Übergabe trivial | Cloudflare Pages Function + E-Mail-API |
| 2026-11-20 | Rohmedien nicht im Git, Pipelines mit sharp/ffmpeg | Repo bleibt klein; Originale im Speicher der Kundin | Git LFS |
