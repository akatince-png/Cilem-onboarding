import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Seiten: eine Markdown-Datei pro Seite und Sprache, z. B. src/content/pages/en/about.md
 * Die Datei-ID ist "<sprache>/<name>". "home" wird zur Startseite.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    /** Seitentitel (H1 und Browser-Tab) */
    title: z.string(),
    /** Suchmaschinen-Beschreibung, ideal 120–155 Zeichen */
    description: z.string().max(170),
    /** Darstellung der Seite */
    layout: z.enum(['home', 'default', 'contact', 'legal']).default('default'),
    /** Position im Menü; weglassen = nicht im Menü */
    navOrder: z.number().optional(),
    /** Kurzer Menütitel, sonst wird title verwendet */
    navLabel: z.string().optional(),
    /** Gleicher Schlüssel in allen Sprachen verbindet Übersetzungen (hreflang) */
    translationKey: z.string(),
    /** Optionaler URL-Name (sonst Dateiname), z. B. "ueber-mich" für übersetzte URLs. */
    urlSlug: z.string().optional(),
    /** true = wird nicht veröffentlicht */
    draft: z.boolean().default(false),
    /** Nur Startseite */
    hero: z
      .object({
        eyebrow: z.string().optional(),
        headline: z.string(),
        subline: z.string(),
      })
      .optional(),
  }),
});

/** Leistungen: eine Datei pro Leistung und Sprache, z. B. src/content/services/en/legal.md */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, services };
