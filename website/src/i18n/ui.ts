/**
 * Kurze Oberflächentexte (Navigation, Buttons, Formular, Cookie-Banner) je Sprache.
 * Längere Inhalte stehen als Markdown in src/content/.
 */
export const ui = {
  en: {
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'lang.label': 'Language',
    'footer.legal': 'Legal information',
    'footer.privacy': 'Privacy notice',
    'footer.cookies': 'Cookie settings',
    'footer.rights': 'All rights reserved.',
    'cta.contact': 'Request a quote',
    'services.heading': 'Services',
    'languages.heading': 'Language combinations',
    'specialisms.heading': 'Areas of expertise',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.organisation': 'Organisation (optional)',
    'form.date': 'Date(s) of the assignment (optional)',
    'form.message': 'Your request',
    'form.message.hint': 'Languages, type of interpreting, location or remote, duration.',
    'form.consent': 'I agree that my details will be used to answer my enquiry, as described in the privacy notice.',
    'form.submit': 'Send enquiry',
    'form.fallback': 'Please send your enquiry by email:',
    'form.sending': 'Sending…',
    'form.success': 'Thank you. Your enquiry has been sent – you will receive a reply shortly.',
    'form.error': 'Sorry, the message could not be sent. Please try again or write an email.',
    'consent.text': 'This website would like to use Google Analytics to understand how visitors use it. Analytics cookies are only set with your consent. You can change your choice at any time.',
    'consent.accept': 'Accept analytics',
    'consent.reject': 'Reject',
    'consent.more': 'Privacy notice',
    '404.title': 'Page not found',
    '404.text': 'The page you are looking for does not exist or has moved.',
    '404.back': 'Back to the homepage',
  },
} as const;

export type Locale = keyof typeof ui;
export type UiKey = keyof (typeof ui)['en'];

export function t(locale: string, key: UiKey): string {
  const dict = (ui as Record<string, Record<string, string>>)[locale] ?? ui.en;
  return dict[key] ?? ui.en[key];
}
