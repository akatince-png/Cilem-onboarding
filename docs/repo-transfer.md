# Repository & Hosting übertragen

## Variante A (empfohlen, jederzeit möglich): GitHub-Organisation der Kundin

1. Kundin erstellt ein GitHub-Konto mit ihrer geschäftlichen E-Mail (2FA aktivieren).
2. Kundin erstellt eine **kostenlose Organisation** (github.com → + → New organization → Free),
   z. B. `<markenname>-digital`, und lädt uns als **Owner** (während der Betreuung) ein.
3. Wir übertragen das Repo: *Settings → General → Danger Zone → Transfer ownership* → Ziel: die Organisation.
   - Historie, Issues, Pull Requests und Branches bleiben erhalten.
   - Alte URLs leiten automatisch weiter. Lokale Kopien: `git remote set-url origin <neue-url>`.
4. Deployment: Repository-Secrets und -Variablen bleiben beim Transfer erhalten. Unter *Actions* einen
   Lauf von „Deploy (Cloudflare Pages)“ manuell starten (*Run workflow*) und prüfen.
5. Test: kleinen Text ändern → Pull Request → Vorschau-Link → mergen → Live-Seite prüfen.
6. Bei Ende der Betreuung: unsere Rolle von Owner auf „Member“ senken oder uns entfernen.

## Variante B: direkt in das persönliche Konto der Kundin
Gleich wie oben, Ziel ist ihr Benutzername statt einer Organisation. Nachteil: Mitarbeiter-Rollen
sind bei persönlichen Repos weniger fein steuerbar.

## Cloudflare-Konto
Liegt das Pages-Projekt bereits im Konto der Kundin (empfohlen), ist nichts zu übertragen – wir werden
nur als Mitglied entfernt. Liegt es in einem fremden Konto: Domain per *Move Domain* ins Konto der Kundin
verschieben, neues API-Token dort erstellen und die beiden GitHub-Secrets ersetzen – der nächste
Deploy legt das Pages-Projekt dort an (siehe [eigentuemer-prinzip.md](eigentuemer-prinzip.md#4-hosting-cloudflare-pages)).

## Hoster wechseln
Die Website ist statisch. Bei Netlify/Vercel: Repo verbinden, Build-Befehl `npm run build`,
Ausgabe-Ordner `website/dist`, Node 22, Umgebungsvariablen aus `website/.env.example`.
`website/public/_headers` funktioniert bei Netlify unverändert; bei Vercel in `vercel.json` übertragen.
