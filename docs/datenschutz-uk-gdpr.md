# Datenschutz & Rechtliches (UK)

> Keine Rechtsberatung. Die Texte sind sorgfältige Entwürfe; vor dem Launch von einer
> qualifizierten Stelle prüfen lassen (z. B. Berufsverband-Hotline, Solicitor).

## Pflichten für Selbstständige in UK (Überblick)
| Thema | Grundlage | Umsetzung |
|---|---|---|
| Data Protection Fee | Data Protection (Charges and Information) Regulations 2018 | Registrierung beim ICO prüfen (Self-Assessment auf ico.org.uk); Dolmetscher:innen verarbeiten Kundendaten elektronisch und sind meist gebührenpflichtig (Tier 1). Nummer in `site.ts → legal.icoRegistration`. |
| Datenschutzhinweis | UK GDPR Art. 13 | `website/src/content/pages/en/privacy.md` |
| Cookie-Einwilligung | PECR reg. 6 | Banner: Analytics erst nach Zustimmung, Ablehnen gleichwertig, jederzeit änderbar (Footer) |
| Anbieterangaben | Electronic Commerce (EC Directive) Regulations 2002, reg. 6 | Rechtsseite mit Name, **geografischer Anschrift**, E-Mail, ggf. Register-/VAT-Nummer – aus `site.ts` |
| Firmenangaben (nur Ltd) | Companies Act 2006 / Trading Disclosures Regulations 2015 | Firmenname, Nummer, Registered Office auf der Website |
| Vertraulichkeit | Berufsethik (CIOL/ITI/NRPSI Code of Conduct) | Hinweis auf Startseite und im Datenschutzhinweis |

Ein deutsches „Impressum“ ist in UK nicht vorgeschrieben; die Rechtsseite „Legal information“
deckt die UK-Pflichten ab und erfüllt zugleich die Erwartungen deutschsprachiger Kundschaft.

## Technische Datenschutz-Maßnahmen (umgesetzt)
- Keine externen Schriften/CDNs (Systemschriften; später selbst gehostete Webfonts).
- Kein Tracking ohne Einwilligung; ohne GA-ID wird gar kein Banner/Tracking ausgeliefert.
- Formular: nur notwendige Felder, Honeypot statt Captcha (kein Google reCAPTCHA).
- Bild-Pipeline entfernt EXIF/GPS-Daten.
- Sicherheits-Header (HSTS, CSP, X-Frame-Options …) in `website/vercel.json`.

## Auftragsverarbeiter (für den Datenschutzhinweis)
| Dienst | Zweck | Sitz | Transfermechanismus |
|---|---|---|---|
| Vercel | Hosting | USA | UK IDTA/Addendum bzw. UK-US Data Bridge (Zertifizierung prüfen) |
| Formspree (o. Ä.) | Formularversand | USA | wie oben prüfen |
| Google (GA4) | Statistik, nur mit Einwilligung | IE/USA | Google Ads Data Processing Terms |

Bei jedem neuen Dienst: Tabelle und `privacy.md` aktualisieren, Eintrag in [konten-register.md](konten-register.md).

## Bei Übergabe
Kopien personenbezogener Daten (Formular-Anfragen, Exporte) bei uns löschen – siehe HANDOVER.md, Abschnitt C.
