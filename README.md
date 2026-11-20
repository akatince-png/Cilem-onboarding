# Digitale Präsenz – Dolmetscherin, London

Zentrales Repository für Website, Marke, Medien und die gesamte Verwaltung (SEO, Google-Konten,
Datenschutz). Es ist von Anfang an so aufgebaut, dass **wir alles betreuen und es jederzeit
vollständig an die Kundin übergeben können**. Wie das geht, steht in [HANDOVER.md](HANDOVER.md).

## Aufbau

```
website/        Website (Astro, statisch, mehrsprachig, Schema.org, Cookie-Einwilligung)
brand-media/    Brand-Tokens (Farben/Schriften), Bild- und Video-Pipeline, Rechte-Register
docs/           Konten, Eigentümer-Prinzip, Wartung, SEO, Datenschutz, offene Fragen
HANDOVER.md     Übergabe-Handbuch mit Checkliste
```

## Schnellstart

Voraussetzung: Node.js 22 (siehe `.nvmrc`).

```bash
npm install
npm run dev      # Vorschau auf http://localhost:4321
npm run build    # Produktions-Build
npm run todos    # zeigt alle noch offenen Projektdaten
```

## Grundregeln

1. **Die Kundin besitzt alles** – Domain, Google-Konten, Hosting, dieses Repo. Wir arbeiten mit
   eigenen Zugängen und Rollen, nie mit ihrem Passwort. → [docs/eigentuemer-prinzip.md](docs/eigentuemer-prinzip.md)
2. **Jedes Konto steht im Register** (ohne Passwörter). → [docs/konten-register.md](docs/konten-register.md)
3. **Keine Secrets im Git.** Umgebungswerte stehen in `website/.env.example` als Vorlage; echte
   Werte nur in Vercel. CI prüft das automatisch.
4. **Keine Rohoriginale im Git.** Fotos/Videos liegen im Cloud-Speicher der Kundin.
5. **Alle Fakten an einer Stelle:** `website/src/config/site.ts`. Offene Werte heißen `TODO:` –
   solange es welche gibt, kann die Seite nicht versehentlich „live“ für Google geschaltet werden.
6. **Änderungen über Pull Requests**, damit es zu jeder Änderung eine Vorschau und eine Historie gibt.

## Dokumentation

| Dokument | Inhalt |
|---|---|
| [HANDOVER.md](HANDOVER.md) | Übergabe Schritt für Schritt |
| [docs/offene-fragen.md](docs/offene-fragen.md) | Was wir von der Kundin noch brauchen |
| [docs/eigentuemer-prinzip.md](docs/eigentuemer-prinzip.md) | Wie jedes Konto angelegt wird, damit es der Kundin gehört |
| [docs/konten-register.md](docs/konten-register.md) | Übersicht aller Konten und Rollen (ohne Passwörter) |
| [docs/wartung.md](docs/wartung.md) | Texte & Bilder ändern ohne Programmierkenntnisse |
| [docs/repo-transfer.md](docs/repo-transfer.md) | Repository und Hosting übertragen |
| [docs/seo-und-google.md](docs/seo-und-google.md) | Keywords, Search Console, Business Profile, Analytics |
| [docs/datenschutz-uk-gdpr.md](docs/datenschutz-uk-gdpr.md) | UK GDPR, ICO, Cookies, Rechtsseite |
| [docs/reputation-und-kanaltrennung.md](docs/reputation-und-kanaltrennung.md) | Geschäftlich vs. privat |
| [docs/entscheidungen.md](docs/entscheidungen.md) | Technische Entscheidungen und warum |
