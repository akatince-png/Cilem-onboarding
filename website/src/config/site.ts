/**
 * ZENTRALE PROJEKTDATEN
 * =====================
 * Alle Fakten über die Kundin und ihr Business stehen NUR hier.
 * Website, Schema.org-Daten, Footer, Rechtstexte und Kontaktseite lesen daraus.
 *
 * Regeln:
 * - Werte, die mit "TODO:" beginnen, sind noch offen (siehe docs/offene-fragen.md).
 *   `npm run todos` listet sie auf. Solange `launch.ready` false ist, wird die Seite
 *   nicht von Suchmaschinen indexiert. Mit `launch.ready: true` bricht der Build ab,
 *   wenn noch TODOs übrig sind – so geht nichts Halbfertiges live.
 * - Nur geschäftliche Kontaktdaten eintragen (keine private Adresse/Handynummer).
 *   Siehe docs/reputation-und-kanaltrennung.md.
 * - Leere Strings ('') bedeuten "bewusst nicht veröffentlichen" und werden ausgeblendet.
 */

export const site = {
  /**
   * Domain der Website, ohne https:// und ohne www (z. B. 'beispiel.co.uk').
   * Daraus entstehen Canonical-URLs, Sitemap und Schema.org-Daten.
   * PUBLIC_SITE_URL (Umgebungsvariable) hat Vorrang, z. B. für Testumgebungen.
   */
  domain: 'TODO: Domain bestätigen (translate4uk.co.uk oder translateforyou.co.uk?)',
  /** Mit oder ohne www als Hauptadresse. Die jeweils andere Variante leitet Cloudflare um. */
  useWww: true,

  launch: {
    /** Erst auf true setzen, wenn alle TODOs erledigt und Rechtstexte geprüft sind. */
    ready: false,
  },

  /** Name, wie er öffentlich erscheinen soll (Marke / Wortmarke). */
  brandName: 'TODO: Öffentlicher Markenname (z. B. Vorname Nachname – Interpreter)',

  person: {
    /** Vollständiger Name, wie er bei Google & LinkedIn konsistent verwendet wird. */
    name: 'TODO: Vollständiger Name der Kundin',
    jobTitle: 'Interpreter',
    /** Berufliche Qualifikationen/Mitgliedschaften (z. B. DPSI, CIOL, ITI, NRPSI). */
    credentials: [] as string[],
    /** Öffentliche Profile, die zur Marke gehören (LinkedIn, ggf. Verbandsprofil). Keine privaten Profile. */
    sameAs: [] as string[],
  },

  /** Sprachkombinationen der Dolmetscherin, z. B. { from: 'Turkish', to: 'English', mode: 'both' } */
  languagePairs: [] as Array<{ from: string; to: string; mode: 'both' | 'into' }>,

  /** Fachgebiete (für Inhalte, Keywords & Schema.org knowsAbout). */
  specialisms: [] as string[],

  /** Dolmetscharten, die angeboten werden. Unzutreffende entfernen. */
  interpretingModes: [
    'Consecutive interpreting',
    'Simultaneous interpreting',
    'Remote interpreting (video & telephone)',
  ],

  contact: {
    /** Geschäftliche E-Mail auf eigener Domain (z. B. hello@domain.co.uk). */
    email: 'TODO: geschäftliche E-Mail-Adresse',
    /** Geschäftliche Telefonnummer im internationalen Format, '' = nicht veröffentlichen. */
    phone: '',
  },

  /**
   * Adresse für Google Business Profile / Schema.org.
   * Ohne Ladengeschäft: Servicegebiet-Unternehmen – Straße NICHT veröffentlichen
   * (showStreetAddress: false), nur Stadt/Region.
   */
  address: {
    showStreetAddress: false,
    streetAddress: '',
    locality: 'London',
    region: 'Greater London',
    postalCode: '',
    country: 'GB',
  },

  /** Einsatzgebiete (Local SEO). */
  areaServed: ['London', 'United Kingdom'],

  legal: {
    /** Rechtlicher Name des Unternehmens (Sole Trader: eigener Name; ggf. "trading as"). */
    tradingName: 'TODO: Rechtlicher Name / Trading Name',
    /** Nur bei Ltd: Companies House Nummer und Registered Office. */
    companyNumber: '',
    registeredOffice: '',
    /** ICO-Registrierungsnummer (Data Protection Fee), sofern registriert. */
    icoRegistration: 'TODO: ICO-Registrierungsnummer (oder "" falls nicht erforderlich)',
    vatNumber: '',
    /**
     * Geschäftsanschrift für die Rechtsseite (UK Electronic Commerce Regulations 2002, reg. 6:
     * "geographic address" erforderlich). Empfehlung: Geschäfts-/Virtual-Office-Adresse statt
     * Privatadresse, siehe docs/reputation-und-kanaltrennung.md.
     */
    businessAddress: 'TODO: Geschäftsanschrift (keine Privatadresse, z. B. Virtual Office)',
  },

  /** Inhaber:in der Rechte an Website, Texten und Bildern (Übergabe-Prinzip). */
  copyrightHolder: 'TODO: Vollständiger Name der Kundin',

  seo: {
    defaultTitleSuffix: 'TODO: Kurzer Marken-Suffix für Seitentitel',
    /** Standard-Vorschaubild (1200×630) unter website/public/, z. B. '/og-default.jpg'. '' = keins. */
    defaultOgImage: '',
  },

  i18n: {
    /** Standardsprache der Website (ohne URL-Präfix). */
    defaultLocale: 'en',
    /**
     * Alle Website-Sprachen. Neue Sprache hinzufügen:
     * 1. Kürzel hier eintragen (z. B. 'de', 'tr')
     * 2. Ordner src/content/pages/en kopieren nach src/content/pages/<kürzel> und übersetzen
     * 3. Gleiches für src/content/services/
     * 4. UI-Texte in src/i18n/ui.ts ergänzen
     */
    locales: ['en'] as string[],
  },
};

export type Site = typeof site;
