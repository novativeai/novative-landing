import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novative.dev'),
  title: {
    default: 'Novative | AI Product Studio — Build Your App, SaaS, or AI Agent',
    template: '%s | Novative',
  },
  description:
    'Hire a developer team that ships. We build AI-powered SaaS platforms, web apps, mobile apps, chatbots, and business automation. 22+ products shipped to production. MVP in 2-4 weeks.',
  keywords: [
    // High-intent buying keywords (from Magnet signal data)
    'hire a developer',
    'need an app built',
    'need a web app',
    'build my app',
    'need an mvp built',
    'SaaS development',
    'custom software development',
    'full stack developer',
    'AI agent development',
    'chatbot development',
    'need a website built',
    'looking for a developer',
    // Service keywords
    'AI product studio',
    'mobile app development',
    'business automation',
    'web application development',
    'MVP development agency',
    'AI SaaS platform',
    'LLM integration',
    'AI chatbot for business',
    // Tech keywords (high-demand from Magnet)
    'React developer',
    'Next.js developer',
    'Python developer',
    'TypeScript',
    'Supabase',
    'Firebase',
    // Brand
    'Novative',
    'novative.dev',
  ],
  authors: [{ name: 'Novative', url: 'https://novative.dev' }],
  creator: 'Novative',
  publisher: 'Novative',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://novative.dev',
  },
  openGraph: {
    title: 'Novative | AI Product Studio — Ship Your App in Weeks, Not Months',
    description:
      'We build AI-powered SaaS platforms, web apps, chatbots, and automation systems that generate revenue. 22+ products shipped. MVP in 2-4 weeks. Get a free estimate.',
    url: 'https://novative.dev',
    siteName: 'Novative Software Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novative | AI Product Studio',
    description:
      'We build AI-powered products that generate revenue. SaaS, web apps, chatbots, automation. 22+ products shipped.',
    creator: '@novaboratorio',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://novative.dev/#organization',
      name: 'Novative Software Studio',
      url: 'https://novative.dev',
      description:
        'AI product studio that builds SaaS platforms, web apps, mobile apps, chatbots, and business automation. 22+ products shipped to production.',
      foundingDate: '2024',
      areaServed: 'Worldwide',
      serviceType: [
        'AI Product Development',
        'SaaS Development',
        'Web Application Development',
        'Mobile App Development',
        'Chatbot Development',
        'Business Automation',
        'MVP Development',
        'AI Agent Development',
        'UI/UX Design',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'SaaS Architecture',
        'React',
        'Next.js',
        'Python',
        'TypeScript',
        'FastAPI',
        'Supabase',
        'Firebase',
        'LLM Integration',
        'Claude AI',
        'OpenAI',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://novative.dev/#website',
      url: 'https://novative.dev',
      name: 'Novative Software Studio',
      alternateName: 'Novative',
      publisher: { '@id': 'https://novative.dev/#organization' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://novative.dev/#service',
      name: 'Novative — AI Product Studio',
      url: 'https://novative.dev',
      provider: { '@id': 'https://novative.dev/#organization' },
      description:
        'Hire a developer team that ships production-ready AI products. SaaS platforms, web apps, mobile apps, chatbots, and automation systems. MVP in 2-4 weeks.',
      priceRange: '$997 - $50,000+',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Products & Chatbot Development',
              description:
                'Custom AI chatbots, voice agents, content generators, and LLM integrations that automate business processes.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SaaS Platform Development',
              description:
                'Complete web applications with user accounts, subscription billing, admin dashboards, and analytics. Launch-ready in 6-8 weeks.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Cross-platform iOS and Android apps from one codebase. Offline-capable, fast, and native-feeling.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'MVP & Rapid Launch',
              description:
                'Validate your idea with a working product in 2-4 weeks. Real app with real users and real data.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Automation',
              description:
                'Workflow automation, lead generation, email sequences, data processing, and API integrations.',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\u003c'),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
