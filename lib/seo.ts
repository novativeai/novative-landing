export const SITE_URL = 'https://novative.dev';

export interface Breadcrumb {
  name: string;
  /** Path beginning with `/` (e.g. `/services/mvp-development`). */
  path: string;
}

/**
 * Builds a schema.org BreadcrumbList from an ordered list of crumbs.
 * The first crumb should always be Home.
 */
export function breadcrumbJsonLd(items: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Builds a schema.org FAQPage from a list of question/answer pairs. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
