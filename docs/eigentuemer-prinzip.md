# Eigentümer-Prinzip: Konten richtig anlegen

**Regel:** Inhaberin jedes Kontos ist die Kundin, angelegt mit ihrer **geschäftlichen** E-Mail-Adresse.
Wir erhalten eigene Zugänge mit Rollen. Wir teilen keine Passwörter und loggen uns nicht als Kundin ein.

Reihenfolge beim Aufbau (jeder Schritt baut auf dem vorigen auf):

## 1. Domain
- Registrierung **auf den Namen der Kundin** (bei `.co.uk`/`.uk`: Registrant bei Nominet = ihr Name / Trading Name).
- Registrar-Konto mit ihrer E-Mail, ihre Zahlungsmethode, Auto-Verlängerung an.
- Empfehlung: Cloudflare (Registrar zum Selbstkostenpreis, DNS mit Mitgliederverwaltung) – wir werden als
  Mitglied mit DNS-Rechten eingeladen. Alternativ jeder Registrar mit „delegated access“.
- Wenn wir die Domain aus praktischen Gründen zuerst registrieren: **sofort** in ihr Konto übertragen (Registrar-interner Push).

## 2. Geschäftliche E-Mail
- Postfach auf eigener Domain (z. B. `hello@domain.co.uk`), z. B. Google Workspace Business Starter.
- Kundin = Super-Admin. Dieses Postfach ist das **Login für alle weiteren Dienste** – dadurch hängt nichts
  an einer privaten Gmail-Adresse (siehe [reputation-und-kanaltrennung.md](reputation-und-kanaltrennung.md)).
- Alternative ohne Workspace: kostenloses Google-Konto mit der Domain-Adresse („Google-Konto mit vorhandener E-Mail erstellen“).

## 3. GitHub (Code & Texte)
- Ziel: GitHub-**Organisation** im Besitz der Kundin (kostenlos), wir als Mitglied/Maintainer.
- Übergangsweise liegt das Repo bei uns (`akatince-png/cilem-onboarding`). Übertragung jederzeit möglich,
  ohne Historie zu verlieren → [repo-transfer.md](repo-transfer.md).

## 4. Hosting (Vercel)
- Wichtig: Der kostenlose **Hobby-Plan ist laut Vercel nur für nicht-kommerzielle Nutzung**. Für eine
  Geschäftswebsite ist ein **Pro-Team im Besitz der Kundin** (ca. 20 USD/Monat) korrekt.
- Kostenfreie Alternative mit kommerzieller Nutzung: **Cloudflare Pages** oder **Netlify**. Die Website ist
  rein statisch und läuft dort ohne Code-Änderung (nur Build-Befehl `npm run build`, Ordner `website/dist`).
- Projekt-Einstellungen: Root Directory `website`, Umgebungsvariablen aus `website/.env.example`.

## 5. Google Search Console
- Property-Typ **Domain** (erfasst alle Varianten), Verifizierung per **DNS-TXT-Eintrag** – damit bleibt die
  Inhaberschaft an der Domain und damit an der Kundin.
- Kundin = Inhaber; wir = „Uneingeschränkt“ (Full user).
- Sitemap einreichen: `https://<domain>/sitemap-index.xml` (erst nach Launch).

## 6. Google Analytics 4
- Konto + Property im Google-Konto der Kundin; Zeitzone Europe/London, Währung GBP.
- Datenaufbewahrung: 14 Monate; Google-Signale aus; Datenfreigabe-Einstellungen minimal.
- Wir = „Bearbeiter“ (Editor) auf Property-Ebene. Mess-ID `G-…` als `PUBLIC_GA4_ID` in Vercel eintragen.
- Datenschutzfreundliche Alternative ohne Cookie-Banner: Plausible/Fathom (Konto der Kundin) – siehe [entscheidungen.md](entscheidungen.md).

## 7. Google Business Profile
- Mit dem Google-Konto der Kundin anlegen → sie ist **Primärer Inhaber**.
- Typ: Servicegebiet-Unternehmen (keine Privatadresse anzeigen), Servicegebiet London + ggf. weitere.
- Wir = „Verwalter“ (Manager). Inhalte (Beschreibung, Leistungen, Kategorien) zusätzlich in
  [seo-und-google.md](seo-und-google.md) dokumentieren, damit sie reproduzierbar sind.

## 8. Formular-Dienst
- z. B. Formspree: Konto mit ihrer E-Mail, Empfänger = ihr Geschäftspostfach, Datenspeicherung minimal.
- Endpunkt-URL als `PUBLIC_FORM_ENDPOINT` in Vercel. Wird ein anderer Dienst gewählt, `vercel.json`
  (Content-Security-Policy: `connect-src`, `form-action`) anpassen.

## 9. LinkedIn
- Persönliches Profil gehört immer der Kundin; wir liefern Texte/Bilder, sie veröffentlicht.
- Optional Unternehmensseite: Kundin = Super-Admin, wir = Content-Admin.

## 10. Passwörter & 2FA
- Passwörter verwaltet die Kundin in **ihrem** Passwort-Manager (z. B. Bitwarden, 1Password).
- 2FA auf ihr Telefon; Wiederherstellungscodes bei ihr. Niemals Passwörter in dieses Repo, in E-Mails oder Chats.
