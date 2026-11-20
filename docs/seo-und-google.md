# SEO & Google-Ökosystem

## Ziel
Bei Suche nach dem **Namen** der Kundin und nach **Sprache + Dolmetschen + London** stehen ihre
eigenen, geschäftlichen Kanäle oben: Website, Google Business Profile, LinkedIn, Verbandsprofile.

## Technische Basis (bereits umgesetzt)
- Statische, schnelle Seiten (keine Frameworks im Browser, nur wenige KB JavaScript).
- Pro Seite eigener Titel + Beschreibung (Frontmatter), Canonical-URL, Open Graph.
- `hreflang` zwischen Sprachversionen, sobald mehrere Sprachen aktiv sind.
- Schema.org JSON-LD `Person` + `ProfessionalService` (Unterart von `LocalBusiness`) aus `site.ts`,
  inkl. `knowsLanguage`, `knowsAbout`, `areaServed`, `sameAs`. Prüfen mit https://validator.schema.org.
- `sitemap-index.xml` automatisch; `robots.txt` sperrt bis zum Launch alles.
- Vorschau-Deployments sind immer `noindex`.

## Keyword-Struktur (Vorlage – mit echten Sprachen füllen)
| Cluster | Muster | Beispiel |
|---|---|---|
| Marke | `<Name>`, `<Name> interpreter` | – |
| Sprache + Ort | `<language> interpreter London` | „Turkish interpreter London“ |
| Sprache + Fach | `<language> legal / court / medical interpreter` | „German legal interpreter“ |
| Modus | `remote <language> interpreter`, `conference interpreter London` | – |
| Bedarf | `interpreter for solicitors London`, `interpreter for tribunal hearing` | – |

Vorgehen: Für jede Sprachkombination eine eigene Leistungs- oder Landingpage, wenn Suchvolumen
vorhanden ist (prüfen mit Search Console nach 4–8 Wochen bzw. Google Keyword Planner).

## Launch-Ablauf
1. Alle TODOs erledigt → `launch.ready: true` in `site.ts`.
2. Domain in Vercel verbinden, `PUBLIC_SITE_URL` setzen, Produktions-Deploy.
3. Search Console (Domain-Property, DNS) → Sitemap einreichen → Startseite „Indexierung beantragen“.
4. Google Business Profile: Website-URL eintragen.
5. LinkedIn, Verbandsprofile: Website-URL eintragen; diese URLs in `site.person.sameAs` aufnehmen.

## Google Business Profile – Inhalte (hier pflegen, dann ins Profil übertragen)
- **Name:** exakt wie `brandName` (keine Keywords anhängen – Verstoß gegen Richtlinien).
- **Hauptkategorie:** „Interpreter“ (Dolmetscher); weitere: „Translator“ nur, wenn auch übersetzt wird.
- **Servicegebiet:** London + TODO; Adresse ausgeblendet.
- **Beschreibung (max. 750 Zeichen):** TODO
- **Leistungen:** wie `src/content/services/`.
- **Öffnungszeiten:** TODO (oder „nach Vereinbarung“ über Leistungen kommunizieren).
- **Fotos:** Porträt, Arbeitssituation (ohne erkennbare Klient:innen), Logo.
- **Bewertungen:** zufriedene Auftraggeber:innen aktiv um Bewertung bitten; jede Bewertung beantworten.

## Analytics
GA4 nur nach Einwilligung (Banner). Ohne `PUBLIC_GA4_ID` wird nichts geladen. Erfolgreich
gesendete Anfragen lösen das Ereignis `generate_lead` aus – in GA4 unter *Verwaltung → Ereignisse*
als Schlüsselereignis markieren.

## Monatlicher Report (Vorlage)
Impressionen/Klicks (Search Console), Top-Suchanfragen, Anfragen über das Formular, GBP-Aufrufe/Aktionen,
erledigte Änderungen, nächste Schritte.
