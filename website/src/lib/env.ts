import { site } from '../config/site';
import { siteUrlFromConfig } from './site-url.mjs';

export const env = {
  siteUrl: siteUrlFromConfig(site, import.meta.env.PUBLIC_SITE_URL),
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
};

/**
 * Indexierung nur, wenn die Kundin freigegeben hat (launch.ready) UND es der
 * Produktions-Build ist. Cloudflare-Pages-Vorschauen (andere Branches als PRODUCTION_BRANCH,
 * Standard "main") bleiben immer noindex.
 */
const cfBranch = process.env.CF_PAGES_BRANCH;
const productionBranch = process.env.PRODUCTION_BRANCH || 'main';
export const indexable =
  site.launch.ready === true && (cfBranch === undefined || cfBranch === productionBranch);
