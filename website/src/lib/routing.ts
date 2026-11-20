import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../config/site';

export type PageEntry = CollectionEntry<'pages'>;

export function localeOf(entry: { id: string }): string {
  return entry.id.split('/')[0];
}

function nameOf(entry: PageEntry): string {
  return entry.data.urlSlug ?? entry.id.split('/').slice(1).join('/');
}

/** URL-Pfad einer Seite, z. B. "/", "/about/", "/de/", "/de/ueber-mich/" */
export function pathOf(entry: PageEntry): string {
  const locale = localeOf(entry);
  const prefix = locale === site.i18n.defaultLocale ? '' : `/${locale}`;
  const name = nameOf(entry);
  return name === 'home' ? `${prefix}/` : `${prefix}/${name}/`;
}

/** Parameter für [...path].astro (undefined = Startseite der Standardsprache) */
export function paramOf(entry: PageEntry): string | undefined {
  const p = pathOf(entry).replace(/^\/|\/$/g, '');
  return p === '' ? undefined : p;
}

export async function getPublishedPages(): Promise<PageEntry[]> {
  const locales: readonly string[] = site.i18n.locales;
  return getCollection(
    'pages',
    (p) => !p.data.draft && locales.includes(localeOf(p)),
  );
}

export function navFor(all: PageEntry[], locale: string) {
  return all
    .filter((p) => localeOf(p) === locale && p.data.navOrder !== undefined)
    .sort((a, b) => (a.data.navOrder ?? 0) - (b.data.navOrder ?? 0))
    .map((p) => ({ href: pathOf(p), label: p.data.navLabel ?? p.data.title, key: p.data.translationKey }));
}

export function alternatesFor(all: PageEntry[], entry: PageEntry) {
  return all
    .filter((p) => p.data.translationKey === entry.data.translationKey)
    .map((p) => ({ locale: localeOf(p), href: pathOf(p) }));
}

export function findByKey(all: PageEntry[], locale: string, key: string) {
  return all.find((p) => localeOf(p) === locale && p.data.translationKey === key);
}

/** Wahr, wenn ein Wert noch ein offener Platzhalter ist */
export function isTodo(v: unknown): boolean {
  return typeof v === 'string' && v.startsWith('TODO');
}

/** Gibt nur fertige, nicht leere Werte zurück */
export function filled(v: string | undefined | null): string | undefined {
  return v && !isTodo(v) ? v : undefined;
}
