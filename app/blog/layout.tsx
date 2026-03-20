import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — AI & Custom Software Insights for Business Leaders | Novative',
  description:
    'Actionable insights on AI integration, custom software development, and digital transformation for CEOs and business leaders. Learn how to leverage technology to scale your business.',
  keywords: [
    'AI blog for business',
    'custom software insights',
    'digital transformation guide',
    'CEO technology blog',
    'AI integration strategy',
    'SaaS development insights',
    'business automation blog',
    'AI product development',
    'software development best practices',
    'technology leadership',
  ],
  alternates: {
    canonical: 'https://novative.dev/blog',
  },
  openGraph: {
    title: 'Blog — AI & Custom Software Insights | Novative',
    description:
      'Actionable insights on AI integration, custom software, and digital transformation for CEOs and business leaders.',
    url: 'https://novative.dev/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — AI & Custom Software Insights | Novative',
    description:
      'Actionable insights on AI, custom software, and digital transformation for business leaders.',
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
      {children}
    </>
  );
}
