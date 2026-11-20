# Repository & Hosting übertragen

## Variante A (empfohlen, jederzeit möglich): GitHub-Organisation der Kundin

1. Kundin erstellt ein GitHub-Konto mit ihrer geschäftlichen E-Mail (2FA aktivieren).
2. Kundin erstellt eine **kostenlose Organisation** (github.com → + → New organization → Free),
   z. B. `<markenname>-digital`, und lädt uns als **Owner** (während der Betreuung) ein.
3. Wir übertragen das Repo: *Settings → General → Danger Zone → Transfer ownership* → Ziel: die Organisation.
   - Historie, Issues, Pull Requests und Branches bleiben erhalten.
   - Alte URLs leiten automatisch weiter. Lokale Kopien: `git remote set-url origin <neue-url>`.
4. Vercel: *Project → Settings → Git* → Verbindung prüfen bzw. neu mit dem übertragenen Repo verbinden
   (die Vercel-GitHub-App muss in der neuen Organisation installiert werden).
5. Test: kleinen Text ändern → Pull Request → Vorschau-Link → mergen → Live-Seite prüfen.
6. Bei Ende der Betreuung: unsere Rolle von Owner auf „Member“ senken oder uns entfernen.

## Variante B: direkt in das persönliche Konto der Kundin
Gleich wie oben, Ziel ist ihr Benutzername statt einer Organisation. Nachteil: Mitarbeiter-Rollen
sind bei persönlichen Repos weniger fein steuerbar.

## Vercel-Projekt übertragen
Falls das Projekt zunächst in unserem Vercel-Team liegt: *Project → Settings → General → Transfer Project*
→ Ziel-Team der Kundin. Domains, Umgebungsvariablen und Deployments werden mitgenommen.
Danach Umgebungsvariablen und Domain-Zuordnung kurz prüfen.

## Hoster wechseln (ohne Vercel)
Die Website ist statisch. Bei Netlify/Cloudflare Pages: Repo verbinden, Basis-Ordner `website`,
Build-Befehl `npm run build`, Ausgabe-Ordner `dist`, Node 22, Umgebungsvariablen aus `website/.env.example`.
Sicherheits-Header aus `website/vercel.json` in das Format des neuen Hosters übernehmen (`_headers`-Datei).
