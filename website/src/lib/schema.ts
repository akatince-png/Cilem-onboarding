import { site } from '../config/site';
import { filled } from './routing';

/**
 * Schema.org-Daten (JSON-LD) für Person + ProfessionalService.
 * Speist sich ausschließlich aus src/config/site.ts. Offene TODO-Werte werden weggelassen,
 * damit nie Platzhalter an Google gemeldet werden.
 */
export function buildSchema(siteUrl: string, locale: string) {
  const base = siteUrl.replace(/\/$/, '');
  const personId = `${base}/#person`;
  const businessId = `${base}/#business`;

  const languages = Array.from(
    new Set(site.languagePairs.flatMap((p) => [p.from, p.to])),
  );

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: filled(site.person.name),
    jobTitle: site.person.jobTitle,
    url: `${base}/`,
    knowsLanguage: languages.length ? languages : undefined,
    knowsAbout: site.specialisms.length ? site.specialisms : undefined,
    hasCredential: site.person.credentials.length
      ? site.person.credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c }))
      : undefined,
    sameAs: site.person.sameAs.length ? site.person.sameAs : undefined,
    worksFor: { '@id': businessId },
  };

  const a = site.address;
  const business: Record<string, unknown> = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: filled(site.brandName) ?? filled(site.person.name),
    url: `${base}/`,
    email: filled(site.contact.email),
    telephone: filled(site.contact.phone),
    founder: { '@id': personId },
    inLanguage: locale,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.showStreetAddress ? filled(a.streetAddress) : undefined,
      postalCode: a.showStreetAddress ? filled(a.postalCode) : undefined,
      addressLocality: a.locality,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
    knowsLanguage: languages.length ? languages : undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interpreting services',
      itemListElement: site.interpretingModes.map((m) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: m },
      })),
    },
    sameAs: site.person.sameAs.length ? site.person.sameAs : undefined,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [prune(person), prune(business)],
  };
}

function prune<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T; // entfernt undefined-Felder
}
