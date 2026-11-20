# Eigentümer-Prinzip: Konten richtig anlegen

**Regel:** Inhaberin jedes Kontos ist die Kundin, angelegt mit ihrer **geschäftlichen** E-Mail-Adresse.
Wir erhalten eigene Zugänge mit Rollen. Wir teilen keine Passwörter und loggen uns nicht als Kundin ein.

Reihenfolge beim Aufbau (jeder Schritt baut auf dem vorigen auf):

## 1. Cloudflare-Konto (Domain, DNS, Hosting)
Domain **und** Hosting liegen bei Cloudflare – ein Konto für alles, das spart bei der Übergabe Arbeit.
- Das Cloudflare-Konto gehört der Kundin (Login = ihre geschäftliche E-Mail, 2FA auf ihrem Gerät, ihre Zahlungsmethode).
- Domain-Registrierung auf **ihren** Namen (bei `.co.uk` ist der Registrant bei Nominet maßgeblich, nicht nur das Konto).
  In Cloudflare: *Domain Registration → Manage → Contacts* prüfen.
- Wir werden als **Mitglied** eingeladen (*Manage Account → Members → Invite*), nicht mit ihrem Passwort.
  Rollen eng halten, z. B. „Domain DNS“ + „Cloudflare Pages“ (bzw. „Administrator“ während des Aufbaus).
- Liegt das Konto derzeit bei uns: Kundin legt eigenes Konto an, Domain per *Move Domain* in ihr Konto
  verschieben (Cloudflare-intern), danach uns dort als Mitglied einladen.
- API-Tokens nur zweckgebunden und mit Ablaufdatum; nie im Repo, nie im Chat – sie stehen im Register (ohne Wert).

## 2. Geschäftliche E-Mail
- MX-/SPF-/DKIM-/DMARC-Einträge des Mail-Anbieters in Cloudflare DNS eintragen.
- Postfach auf eigener Domain (z. B. `hello@domain.co.uk`), z. B. Google Workspace Business Starter.
- Kundin = Super-Admin. Dieses Postfach ist das **Login für alle weiteren Dienste** – dadurch hängt nichts
  an einer privaten Gmail-Adresse (siehe [reputation-und-kanaltrennung.md](reputation-und-kanaltrennung.md)).
- Alternative ohne Workspace: kostenloses Google-Konto mit der Domain-Adresse („Google-Konto mit vorhandener E-Mail erstellen“).

## 3. GitHub (Code & Texte)
- Ziel: GitHub-**Organisation** im Besitz der Kundin (kostenlos), wir als Mitglied/Maintainer.
- Übergangsweise liegt das Repo bei uns (`akatince-png/cilem-onboarding`). Übertragung jederzeit möglich,
  ohne Historie zu verlieren → [repo-transfer.md](repo-transfer.md).

## 4. Hosting (Cloudflare Pages)
- Im Cloudflare-Konto der Kundin: *Workers & Pages → Create → Pages → Connect to Git* → dieses Repository.
- Build-Einstellungen (Projekt-Root = Repo-Hauptordner, wegen npm-Workspaces):
  - Framework preset: *Astro* bzw. *None*
  - Build command: `npm run build`
  - Build output directory: `website/dist`
  - Root directory: *(leer)*
  - Umgebungsvariablen: `NODE_VERSION=22` sowie die Werte aus `website/.env.example`
  - Production branch: `main`
- Jeder Pull Request bekommt automatisch eine Vorschau-Adresse `*.pages.dev`; diese sind per
  `website/public/_headers` und Code immer `noindex`.
- Custom Domains: *Projekt → Custom domains* → `www.<domain>` und `<domain>`; DNS-Einträge legt Cloudflare
  automatisch an, weil die Domain im selben Konto liegt.
- Die Seite ist rein statisch: Ein Wechsel zu einem anderen Hoster bleibt jederzeit ohne Code-Änderung möglich.

## 5. Google Search Console
- Property-Typ **Domain** (erfasst alle Varianten), Verifizierung per **DNS-TXT-Eintrag in Cloudflare** – damit bleibt die
  Inhaberschaft an der Domain und damit an der Kundin.
- Kundin = Inhaber; wir = „Uneingeschränkt“ (Full user).
- Sitemap einreichen: `https://<domain>/sitemap-index.xml` (erst nach Launch).

## 6. Google Analytics 4
- Konto + Property im Google-Konto der Kundin; Zeitzone Europe/London, Währung GBP.
- Datenaufbewahrung: 14 Monate; Google-Signale aus; Datenfreigabe-Einstellungen minimal.
- Wir = „Bearbeiter“ (Editor) auf Property-Ebene. Mess-ID `G-…` als `PUBLIC_GA4_ID` in Cloudflare Pages eintragen.
- Datenschutzfreundliche Alternative ohne Cookie-Banner: Plausible/Fathom (Konto der Kundin) – siehe [entscheidungen.md](entscheidungen.md).

## 7. Google Business Profile
- Mit dem Google-Konto der Kundin anlegen → sie ist **Primärer Inhaber**.
- Typ: Servicegebiet-Unternehmen (keine Privatadresse anzeigen), Servicegebiet London + ggf. weitere.
- Wir = „Verwalter“ (Manager). Inhalte (Beschreibung, Leistungen, Kategorien) zusätzlich in
  [seo-und-google.md](seo-und-google.md) dokumentieren, damit sie reproduzierbar sind.

## 8. Formular-Dienst
- z. B. Formspree: Konto mit ihrer E-Mail, Empfänger = ihr Geschäftspostfach, Datenspeicherung minimal.
- Endpunkt-URL als `PUBLIC_FORM_ENDPOINT` in Cloudflare Pages. Wird ein anderer Dienst gewählt,
  `website/public/_headers` (Content-Security-Policy: `connect-src`, `form-action`) anpassen.

## 9. LinkedIn
- Persönliches Profil gehört immer der Kundin; wir liefern Texte/Bilder, sie veröffentlicht.
- Optional Unternehmensseite: Kundin = Super-Admin, wir = Content-Admin.

## 10. Passwörter & 2FA
- Passwörter verwaltet die Kundin in **ihrem** Passwort-Manager (z. B. Bitwarden, 1Password).
- 2FA auf ihr Telefon; Wiederherstellungscodes bei ihr. Niemals Passwörter in dieses Repo, in E-Mails oder Chats.
