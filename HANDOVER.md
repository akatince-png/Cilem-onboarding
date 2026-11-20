# Übergabe-Handbuch

Ziel: Die Kundin kann jederzeit – geplant oder kurzfristig – die vollständige Kontrolle über ihre
digitale Präsenz übernehmen, ohne dass etwas neu aufgebaut werden muss und ohne dass wir danach
noch Zugriff haben.

Das funktioniert, weil von Anfang an gilt: **Die Kundin ist Eigentümerin, wir sind Verwalter.**
Eine Übergabe ist deshalb kein Umzug, sondern nur das Entfernen unserer Zugänge.

---

## 1. Was die Kundin am Ende besitzt

| Bereich | Wo | Eigentümerin | Unsere Rolle bis zur Übergabe |
|---|---|---|---|
| Domain + DNS | Cloudflare | Kundin (Registrant, Konto-Inhaberin) | Konto-Mitglied mit eingeschränkter Rolle |
| Geschäftliche E-Mail | z. B. Google Workspace | Kundin (Super-Admin) | ggf. eigener Admin-Nutzer |
| Website-Code, Texte | GitHub-Repository | Kundin (Organisation/Konto) | Maintainer |
| Hosting | Cloudflare Pages (gleiches Konto wie Domain) | Kundin | Konto-Mitglied |
| Google Business Profile | business.google.com | Kundin (Primärer Inhaber) | Verwalter (Manager) |
| Google Search Console | search.google.com/search-console | Kundin (Inhaber, per DNS verifiziert) | Uneingeschränkter Nutzer |
| Google Analytics 4 | analytics.google.com | Kundin (Administrator des Kontos) | Bearbeiter |
| Formular-Dienst | z. B. Formspree | Kundin | Teammitglied |
| LinkedIn | linkedin.com | Kundin (persönliches Profil; ggf. Unternehmensseite mit ihr als Super-Admin) | Unternehmensseite: Content-Admin |
| Fotos/Videos (Originale) | Google Drive der Kundin | Kundin | Bearbeiter des Ordners |
| Nutzungsrechte | `brand-media/rights.md` | Kundin | – |

Details zu jedem Dienst: [docs/eigentuemer-prinzip.md](docs/eigentuemer-prinzip.md)

---

## 2. Laufend sicherstellen (nicht erst bei der Übergabe)

- [ ] Jedes neue Konto sofort in [docs/konten-register.md](docs/konten-register.md) eintragen.
- [ ] Jedes Konto mit der **geschäftlichen E-Mail der Kundin** als Inhaber anlegen – nie mit unserer.
- [ ] 2-Faktor-Authentifizierung der Inhaber-Konten auf **ihr** Gerät, Wiederherstellungscodes bei **ihr**.
- [ ] Zahlungen (Domain, Hosting, Workspace) über **ihre** Zahlungsmethode.
- [ ] Rechnungen und Verträge (Fotograf:in, Lizenzen) auf **ihren** Namen.
- [ ] Alle Texte und Konfigurationen im Repo, nicht nur in Dashboards (z. B. GBP-Texte in `docs/`).
- [ ] Monatlich: Abhängigkeiten aktualisieren (Dependabot-PRs prüfen), Search Console auf Fehler prüfen.

---

## 3. Übergabe-Checkliste

### A. Vorbereitung (ca. 1 Woche vorher)
- [ ] Register auf Vollständigkeit prüfen: Gibt es Konten, bei denen **wir** Inhaber sind? → zuerst übertragen.
- [ ] `npm run todos` → keine offenen Platzhalter.
- [ ] Offene Pull Requests mergen oder schließen.
- [ ] Übergabe-Termin (Video-Call, ca. 60 Min.) vereinbaren; Kundin hält ihre 2FA-Geräte bereit.

### B. Im Übergabe-Termin
- [ ] Kundin meldet sich bei jedem Dienst aus dem Register selbst an (Test: Zugriff funktioniert).
- [ ] GitHub: Repository in ihr Konto/ihre Organisation übertragen → [docs/repo-transfer.md](docs/repo-transfer.md)
- [ ] Cloudflare Pages: Git-Verbindung nach dem Transfer prüfen, ein Test-Deployment auslösen.
- [ ] Google Business Profile: Kundin ist „Primärer Inhaber“ – prüfen.
- [ ] Search Console: Kundin ist verifizierter Inhaber (DNS-TXT) – prüfen.
- [ ] Analytics: Kundin ist Administrator auf Kontoebene – prüfen.
- [ ] [docs/wartung.md](docs/wartung.md) gemeinsam einmal durchspielen (Text ändern → Vorschau → veröffentlichen).

### C. Unsere Zugänge entfernen (wenn die Betreuung endet)
- [ ] GitHub: uns als Collaborator/Mitglied entfernen.
- [ ] Cloudflare: uns als Konto-Mitglied entfernen, ggf. von uns erstellte API-Tokens löschen.
- [ ] Google Business Profile, Search Console, Analytics: unsere Nutzer entfernen.
- [ ] Workspace, Formular-Dienst: unsere Nutzer entfernen.
- [ ] LinkedIn-Unternehmensseite: unsere Admin-Rolle entfernen.
- [ ] Geteilte Drive-Ordner: unsere Freigabe entfernen.
- [ ] Unsere lokalen Kopien von Originalen und Exporten löschen (UK GDPR).
- [ ] Kundin bittet, Passwörter zu ändern, die wir je gesehen haben könnten (Vorsichtsmaßnahme).
- [ ] Register mit Datum „übergeben am …“ abschließen.

---

## 4. Weiterbetreuung durch jemand anderen

Weil alles im Repository dokumentiert ist (Code, Texte, Konfiguration, Entscheidungen), kann jede
Web-Agentur oder Freelancer:in mit Astro-/Node.js-Kenntnissen nahtlos übernehmen. Start: `README.md`.
