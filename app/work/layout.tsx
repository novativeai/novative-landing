import type { Metadata } from 'next';
import { breadcrumbJsonLd } from '@/lib/seo';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Our Work — 22+ AI Products Shipped to Production',
  description:
    'See our portfolio of AI-powered products: SaaS platforms, video generation tools, AI chatbots, lead generation engines, and more. Built with Next.js, React, Python, and FastAPI.',
  keywords: [
    'AI product portfolio',
    'SaaS case studies',
    'AI development examples',
    'web app portfolio',
    'chatbot development portfolio',
    'AI video generation platform',
    'AI video editor',
    'lead generation software',
    'Next.js development',
    'React development',
    'Python FastAPI',
    'production AI products',
  ],
  alternates: {
    canonical: 'https://novative.dev/work',
  },
  openGraph: {
    title: 'Our Work — 22+ AI Products Shipped | Novative',
    description:
      'From AI video platforms generating revenue to autonomous lead generation engines. See real products solving real business problems.',
    url: 'https://novative.dev/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — 22+ AI Products Shipped | Novative',
    description:
      'AI SaaS platforms, video tools, lead gen engines, and more. See our production portfolio.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Novative Portfolio — AI Products & Case Studies',
  description:
    'Portfolio of 22+ AI-powered products shipped to production including SaaS platforms, video generation tools, chatbots, and automation systems.',
  url: 'https://novative.dev/work',
  isPartOf: { '@id': 'https://novative.dev/#website' },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: study.name,
        description: study.tagline,
        applicationCategory: study.category,
        operatingSystem: 'Web',
        url: `https://novative.dev/work/${study.id}`,
        ...(study.url ? { sameAs: `https://${study.url}` } : {}),
      },
    })),
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
]);

export default function WorkLayout({
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
