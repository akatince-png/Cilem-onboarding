# Wartung ohne Programmierkenntnisse

Alle Texte der Website sind einfache Textdateien (Markdown). Man kann sie direkt im Browser auf
GitHub ändern – ohne Installation. Jede Änderung erzeugt automatisch einen **Vorschau-Link**, bevor sie live geht.

## Einen Text ändern

1. Auf GitHub das Repository öffnen → Ordner `website/src/content/pages/en/` (bzw. andere Sprache).
2. Datei anklicken, z. B. `about.md` → Stift-Symbol („Edit this file“).
3. Text ändern. Regeln:
   - Der Block zwischen den beiden `---` oben enthält Titel und Google-Beschreibung. Anführungszeichen stehen lassen.
   - `## Überschrift` = Zwischenüberschrift, `- Punkt` = Aufzählung, `**fett**`, `[Linktext](https://…)`.
4. „Commit changes…“ → **„Create a new branch … and start a pull request“** wählen → kurz beschreiben, was geändert wurde.
5. Nach 1–2 Minuten erscheint im Pull Request ein Vercel-Kommentar mit **Vorschau-Link** – ansehen, auch am Handy.
6. Passt alles → „Merge pull request“. Die Live-Seite ist nach ca. 1 Minute aktualisiert.

Fehler passiert? Kein Problem: Jede Version ist gespeichert. Im Pull Request auf „Revert“ klicken.

## Wo steht was?

| Ich möchte … | Datei |
|---|---|
| Name, E-Mail, Telefon, Sprachen, Fachgebiete ändern | `website/src/config/site.ts` |
| Startseite (große Überschrift, Text) | `website/src/content/pages/en/home.md` |
| Über mich | `website/src/content/pages/en/about.md` |
| Eine Leistung ändern/hinzufügen | `website/src/content/services/en/` (Datei kopieren und anpassen) |
| Eine Leistung ausblenden | in der Datei oben `draft: true` ergänzen |
| Eine neue Seite anlegen | Datei in `website/src/content/pages/en/` kopieren, `translationKey` und Dateinamen ändern; mit `navOrder: 4` erscheint sie im Menü |
| Menü-/Buttontexte | `website/src/i18n/ui.ts` |
| Farben | `brand-media/tokens/tokens.json` (danach technisch `npm run tokens`) |

## Ein neues Foto einbinden
Foto im Original im Drive-Ordner ablegen und Bescheid geben – die Optimierung (Größen, Formate,
Entfernen von Standortdaten) läuft über `npm run images`. Rechte in `brand-media/rights.md` eintragen.

## Regelmäßige Pflege (ca. 30 Min./Monat)
- [ ] Dependabot-Pull-Requests: Vorschau prüfen, mergen, wenn alle Prüfungen grün sind.
- [ ] Search Console: Bereich „Seiten“ und „Leistung“ ansehen, Fehler beheben.
- [ ] Google Business Profile: Fragen/Bewertungen beantworten, ggf. Beitrag posten.
- [ ] Datenschutzhinweis: Stimmen Dienste/Anbieter noch?
