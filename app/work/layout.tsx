import type { Metadata } from 'next';

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
    numberOfItems: 6,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'NovaMachine',
          description:
            'Node-based AI video and image generation platform with 7 node types, multi-model support via fal.ai, and Stripe-powered credit billing.',
          applicationCategory: 'Multimedia',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'NovaStudio',
          description:
            'Professional web-based video editor with frame-accurate timeline, multi-track compositing, AI generation via Kling 2.5, and backend FFmpeg rendering.',
          applicationCategory: 'Multimedia',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Reelzila',
          description:
            'AI video platform with 6 generation models and a creator marketplace. 40-70% profit margins.',
          applicationCategory: 'Multimedia',
          operatingSystem: 'Web',
          url: 'https://reelzila.studio',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Magnet',
          description:
            'Autonomous lead generation engine that scrapes 9+ sources, classifies signals, and generates personalized outreach via Claude AI.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'macOS',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Sonar',
          description:
            'B2B buying signal radar with 5-stage intelligence pipeline detecting companies ready to purchase.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Heritage Vault',
          description:
            'AI-powered digital archive with cryptographic authenticity verification for cultural preservation.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
        },
      },
    ],
  },
};

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
      {children}
    </>
  );
}
