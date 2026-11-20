import { site } from '../config/site';

export const env = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL || 'https://example.com',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
};

/**
 * Indexierung nur, wenn die Kundin freigegeben hat (launch.ready) UND es der
 * Produktions-Build ist. Vercel-Vorschauen (VERCEL_ENV=preview) bleiben immer noindex.
 */
export const indexable =
  site.launch.ready === true &&
  (process.env.VERCEL_ENV === undefined || process.env.VERCEL_ENV === 'production');
