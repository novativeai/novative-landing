import type { Metadata } from 'next';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  // Bare title — the root layout template appends " | Novative".
  title: 'AI & App Development Blog for Founders',
  description:
    "Practical guides on app development costs, AI integration, and MVP strategy for non-technical founders. From a studio that's shipped 22+ products.",
  keywords: [
    'app development blog',
    'MVP guide',
    'hire a developer',
    'AI chatbot guide',
    'app cost breakdown',
    'non-technical founder',
    'startup development',
    'SaaS development guide',
  ],
  alternates: {
    canonical: 'https://novative.dev/blog',
  },
  openGraph: {
    title: 'AI & App Development Blog for Founders | Novative',
    description:
      "Practical guides on app development costs, AI integration, and MVP strategy for non-technical founders. From a studio that's shipped 22+ products.",
    url: 'https://novative.dev/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & App Development Blog for Founders | Novative',
    description:
      'Practical guides on app development costs, AI integration, and MVP strategy for non-technical founders.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Novative Blog — AI & Custom Software Insights',
  description:
    'Actionable insights on AI integration, custom software development, and digital transformation for CEOs and business leaders.',
  url: 'https://novative.dev/blog',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://novative.dev/#organization',
    name: 'Novative',
    url: 'https://novative.dev',
  },
  isPartOf: { '@id': 'https://novative.dev/#website' },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
]);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
