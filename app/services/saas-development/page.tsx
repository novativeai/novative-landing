import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingCta } from '@/components/marketing/marketing-cta';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';
import { RelatedWork, RelatedReading } from '@/components/marketing/internal-links';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/services/saas-development';

export const metadata: Metadata = {
  title: { absolute: 'SaaS Development Company | Launch Your SaaS in 6-8 Weeks | Novative' },
  description:
    'Full-stack SaaS development with user auth, billing, admin dashboards, and analytics. Launch-ready in 6-8 weeks. 22+ products shipped. From $5,000.',
  keywords: [
    'SaaS development company',
    'SaaS development services',
    'build a SaaS',
    'SaaS development agency',
    'full-stack SaaS development',
    'SaaS MVP',
    'subscription billing development',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'SaaS Development Company | Launch Your SaaS in 6-8 Weeks | Novative',
    description:
      'Full-stack SaaS with auth, billing, dashboards, and analytics. Launch-ready in 6-8 weeks. 22+ products shipped. From $5,000.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Company | Novative',
    description: 'Full-stack SaaS with auth, billing & dashboards. Launch-ready in 6-8 weeks. From $5,000.',
  },
};

const included = [
  'User authentication & accounts',
  'Stripe subscription billing',
  'Admin dashboard',
  'Analytics & reporting',
  'User & team management',
  'REST/JSON API',
];

const techStack = ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Firebase', 'Stripe', 'Vercel'];

const tiers = [
  {
    name: 'Growth Product',
    price: '$5,000 – $15,000',
    duration: '4-8 weeks',
    features: ['Custom UI/UX design', 'Auth, billing & dashboard', 'Advanced AI integration', '3 months support'],
    popular: true,
  },
  {
    name: 'Scale Platform',
    price: '$15,000 – $30,000+',
    duration: '8-12 weeks',
    features: ['Multi-tenant architecture', 'Marketplace / platform features', 'Advanced security & compliance', '6 months support'],
  },
];

const faqItems: FaqEntry[] = [
  {
    question: 'How long does it take to build a SaaS product?',
    answer:
      'A launch-ready SaaS with authentication, subscription billing, an admin dashboard, and analytics takes 6-8 weeks. Larger multi-tenant or marketplace platforms run 8-12 weeks. You see working software every week throughout the build.',
  },
  {
    question: 'How much does SaaS development cost?',
    answer:
      'SaaS development starts at $5,000 for a Growth Product (4-8 weeks) and goes up to $30,000+ for a Scale Platform with multi-tenant architecture, marketplace features, and advanced security. All prices are fixed quotes.',
  },
  {
    question: 'Do you handle subscription billing?',
    answer:
      'Yes. We implement full Stripe subscription billing — plans, trials, upgrades, downgrades, proration, invoices, and webhooks — plus the admin tooling to manage it. We can also wire crypto checkout where it fits.',
  },
  {
    question: 'Can it scale once we grow?',
    answer:
      'Yes. We build on scalable architecture from day one — Next.js, FastAPI, PostgreSQL or Firebase, and Vercel. For platforms that need it, we design multi-tenant data isolation and performance optimization so growth does not force a rewrite.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Development',
  serviceType: 'SaaS Development',
  description:
    'Full-stack SaaS development with authentication, Stripe billing, admin dashboards, and analytics. Launch-ready in 6-8 weeks. From $5,000.',
  areaServed: 'Worldwide',
  url: `https://novative.dev${PATH}`,
  provider: { '@id': 'https://novative.dev/#organization' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      minPrice: '5000',
      maxPrice: '30000',
    },
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: PATH },
  { name: 'SaaS Development', path: PATH },
]);

export default function SaasDevelopmentPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="SaaS Development"
          title="Your SaaS, Built and Launched in 6-8 Weeks"
          subtitle="Auth, billing, dashboards, analytics, and an API — the full stack of a real SaaS business, designed and engineered to launch in weeks and scale when you grow."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button size="lg" className="group">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog/saas-launch-playbook">
              <Button variant="outline" size="lg">
                Read the Launch Playbook
              </Button>
            </Link>
          </div>
        </MarketingHero>

        {/* What's included */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                What&apos;s Included
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">The full stack of a real SaaS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 border border-[var(--border)] bg-[var(--background)]">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--foreground)]" strokeWidth={2} />
                  <span className="text-body text-[var(--foreground-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Tech Stack
              </span>
            </div>
            <h2 className="text-headline mb-8 max-w-2xl">Modern, proven, and yours to keep</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="badge text-sm px-4 py-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                SaaS Pricing
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Fixed-price tiers that match your stage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative border p-6 md:p-8 bg-[var(--background)] flex flex-col ${tier.popular ? 'border-[var(--foreground)]' : 'border-[var(--border)]'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="badge bg-[var(--foreground)] text-[var(--background)]">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-title mb-2">{tier.name}</h3>
                  <div className="text-2xl md:text-3xl font-medium tracking-tight mb-1">{tier.price}</div>
                  <p className="text-mono-sm text-[var(--foreground-muted)] mb-6">{tier.duration}</p>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 text-[var(--foreground)]" strokeWidth={2} />
                        <span className="text-body-sm text-[var(--foreground-secondary)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-mono-sm text-[var(--foreground-muted)] mt-6">
              Just validating an idea first?{' '}
              <Link href="/services/mvp-development" className="underline underline-offset-4">
                Start with an MVP
              </Link>
              .
            </p>
          </div>
        </section>

        <RelatedWork
          slugs={['reelzila', 'halo', 'novamachine']}
          heading="SaaS Platforms We've Built"
          className="bg-[var(--background)]"
        />

        <RelatedReading
          slugs={['saas-launch-playbook', 'build-vs-buy-software']}
          heading="Launch Smarter"
          className="bg-[var(--background-secondary)]"
        />

        <FaqSection items={faqItems} heading="SaaS Development FAQ" />

        <MarketingCta
          eyebrow="Built to Launch"
          title={
            <>
              Ready To Launch
              <br />
              <span className="text-[var(--background)]/40">Your SaaS?</span>
            </>
          }
          description="Tell us what your SaaS needs to do. We'll send a fixed-price estimate and a 6-8 week launch plan within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
