import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Search, PenTool, Hammer, TestTube, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingCta } from '@/components/marketing/marketing-cta';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';
import { RelatedWork, RelatedReading } from '@/components/marketing/internal-links';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/services/mvp-development';

export const metadata: Metadata = {
  title: { absolute: 'MVP Development Agency | Ship Your MVP in 2-4 Weeks | Novative' },
  description:
    'Get a working MVP in 2-4 weeks, not 6 months. Fixed pricing from $997. 22+ products shipped to production. AI-powered development that moves fast.',
  keywords: [
    'MVP development agency',
    'MVP development company',
    'build an MVP',
    'MVP development services',
    'rapid MVP development',
    'startup MVP',
    'minimum viable product development',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'MVP Development Agency | Ship Your MVP in 2-4 Weeks | Novative',
    description:
      'A working MVP in 2-4 weeks, not 6 months. Fixed pricing from $997. 22+ products shipped to production.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development Agency | Ship in 2-4 Weeks | Novative',
    description: 'A working MVP in 2-4 weeks. Fixed pricing from $997. 22+ products shipped.',
  },
};

const included = [
  'UI/UX design tailored to your brand',
  'Frontend built with Next.js & React',
  'Backend, database & API',
  'Authentication & user accounts',
  'Production deployment on Vercel',
  '30 days of post-launch support',
];

const process = [
  { icon: Search, title: 'Scope', body: 'We define the one core thing your MVP must prove and cut everything else.' },
  { icon: PenTool, title: 'Design', body: 'A clean, on-brand interface designed around your core user flow.' },
  { icon: Hammer, title: 'Build', body: 'AI-accelerated development in weekly sprints with live demos.' },
  { icon: TestTube, title: 'Test', body: 'Real-world testing, bug fixing, and performance hardening.' },
  { icon: Rocket, title: 'Launch', body: 'Deployed to production and handed over — code, infra, and all.' },
];

const tiers = [
  {
    name: 'Quick Win',
    price: '$997 – $2,500',
    duration: '1-2 weeks',
    body: 'A focused MVP that proves one specific idea — a chatbot, a landing flow, a single workflow.',
  },
  {
    name: 'Growth Product',
    price: '$5,000 – $15,000',
    duration: '4-8 weeks',
    body: 'A complete, launch-ready product with auth, billing, dashboard, and analytics.',
    popular: true,
  },
];

const faqItems: FaqEntry[] = [
  {
    question: 'How fast can you build an MVP?',
    answer:
      'Most MVPs ship in 2-4 weeks. A focused single-feature MVP can be ready in 1-2 weeks, while a more complete product with authentication, billing, and a dashboard takes 4-8 weeks. You see working software every week.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We build MVPs with Next.js, React, and TypeScript on the frontend, and Python, FastAPI, Firebase, or PostgreSQL on the backend. Billing runs on Stripe and AI features use Claude AI and OpenAI. Everything deploys to Vercel.',
  },
  {
    question: "What's included in an MVP build?",
    answer:
      'Every MVP includes UI/UX design, frontend, backend, database, user authentication, production deployment, and 30 days of post-launch support. You receive full source code with no lock-in.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'You get 30 days of included support to fix issues and tune the product. After that, most founders move into an iteration phase where we add features based on real user feedback — but because you own the code, you are never locked in.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MVP Development',
  serviceType: 'MVP Development',
  description:
    'Rapid MVP development: a working, production-ready minimum viable product in 2-4 weeks with fixed pricing from $997.',
  areaServed: 'Worldwide',
  url: `https://novative.dev${PATH}`,
  provider: { '@id': 'https://novative.dev/#organization' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      minPrice: '997',
      maxPrice: '15000',
    },
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: PATH },
  { name: 'MVP Development', path: PATH },
]);

export default function MvpDevelopmentPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="MVP Development"
          title="Ship Your MVP in 2-4 Weeks"
          subtitle="Not six months. Not a deck of wireframes. A real, working product with real users and real data — built with AI-accelerated development and a fixed price you know before we start."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button size="lg" className="group">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/cost/app-development">
              <Button variant="outline" size="lg">
                See MVP Costs
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
            <h2 className="text-headline mb-12 max-w-2xl">Everything you need to launch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 border border-[var(--border)] bg-[var(--background)]">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--foreground)]" strokeWidth={2} />
                  <span className="text-body text-[var(--foreground-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Our MVP Process
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Five steps from idea to live product</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[var(--border)]">
              {process.map((step, i) => (
                <div key={step.title} className="bg-[var(--background)] p-6">
                  <div className="text-mono-sm text-[var(--foreground-muted)] mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <step.icon className="w-6 h-6 mb-4 text-[var(--foreground)]" strokeWidth={1.5} />
                  <h3 className="text-title text-lg mb-2">{step.title}</h3>
                  <p className="text-body-sm text-[var(--foreground-secondary)]">{step.body}</p>
                </div>
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
                MVP Pricing
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Fixed prices, no hourly surprises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative border p-6 md:p-8 bg-[var(--background)] ${tier.popular ? 'border-[var(--foreground)]' : 'border-[var(--border)]'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="badge bg-[var(--foreground)] text-[var(--background)]">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-title mb-2">{tier.name}</h3>
                  <div className="text-2xl md:text-3xl font-medium tracking-tight mb-1">
                    {tier.price}
                  </div>
                  <p className="text-mono-sm text-[var(--foreground-muted)] mb-4">{tier.duration}</p>
                  <p className="text-body text-[var(--foreground-secondary)]">{tier.body}</p>
                </div>
              ))}
            </div>
            <p className="text-mono-sm text-[var(--foreground-muted)] mt-6">
              Need something bigger?{' '}
              <Link href="/services/saas-development" className="underline underline-offset-4">
                See SaaS development
              </Link>{' '}
              for full platforms.
            </p>
          </div>
        </section>

        <RelatedWork
          slugs={['reelzila', 'novamachine', 'kubera']}
          heading="MVPs We've Shipped"
          className="bg-[var(--background)]"
        />

        <RelatedReading
          slugs={['what-is-an-mvp', 'how-much-does-it-cost-to-build-an-app']}
          heading="Plan Your MVP"
          className="bg-[var(--background-secondary)]"
        />

        <FaqSection items={faqItems} heading="MVP Development FAQ" />

        <MarketingCta
          eyebrow="Ship Fast"
          title={
            <>
              Got an Idea?
              <br />
              <span className="text-[var(--background)]/40">Let&apos;s Ship It.</span>
            </>
          }
          description="Tell us what you're building. We'll send a fixed-price MVP estimate and a 2-4 week timeline within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
