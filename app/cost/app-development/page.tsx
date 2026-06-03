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
import { LeadMagnet } from '@/components/lead-magnet';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/cost/app-development';

export const metadata: Metadata = {
  title: { absolute: 'How Much Does It Cost to Build an App in 2026? | Novative' },
  description:
    'Real app development costs from a studio that\'s built 22+ products. MVPs from $997, full apps $5K-$15K, enterprise platforms $15K-$30K+. Transparent, fixed pricing.',
  keywords: [
    'how much does it cost to build an app',
    'app development cost',
    'app development cost 2026',
    'cost to build an app',
    'app development pricing',
    'MVP cost',
    'custom software cost',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'How Much Does It Cost to Build an App in 2026? | Novative',
    description:
      'Real app development costs. MVPs from $997, full apps $5K-$15K, enterprise platforms $15K-$30K+. Transparent, fixed pricing.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does It Cost to Build an App in 2026? | Novative',
    description: 'Real app costs. MVPs from $997, full apps $5K-$15K, platforms $15K-$30K+.',
  },
};

const comparison = [
  {
    name: 'Freelancer',
    cost: '$10K – $60K',
    pros: 'Lower rate, direct contact',
    cons: 'One person, no backup, disappears mid-project',
  },
  {
    name: 'Traditional agency',
    cost: '$75K – $350K+',
    pros: 'Big teams, process, compliance',
    cons: 'Slow, expensive, hourly billing creep',
  },
  {
    name: 'Novative',
    cost: '$997 – $30K+',
    pros: 'Fixed price, AI-accelerated, you own the code',
    cons: 'Not built for 100-person enterprise programs',
    highlight: true,
  },
  {
    name: 'No-code',
    cost: '$2K – $20K',
    pros: 'Cheap, fast to start',
    cons: 'Hits a ceiling fast, hard to scale, platform lock-in',
  },
];

const tiers = [
  {
    name: 'Quick Win',
    price: '$997 – $2,500',
    duration: '1-2 weeks',
    features: ['One focused feature or tool', 'Landing page or chatbot', 'One integration', '30 days support'],
  },
  {
    name: 'Growth Product',
    price: '$5,000 – $15,000',
    duration: '4-8 weeks',
    features: ['Custom UI/UX', 'Auth, billing & dashboard', 'Advanced AI integration', '3 months support'],
    popular: true,
  },
  {
    name: 'Scale Platform',
    price: '$15,000 – $30,000+',
    duration: '8-12 weeks',
    features: ['Multi-tenant architecture', 'Marketplace / platform features', 'Advanced security', '6 months support'],
  },
];

const priceFactors = [
  { title: 'Complexity', body: 'More screens, roles, and edge cases mean more engineering. A single workflow costs far less than a multi-sided platform.' },
  { title: 'Integrations', body: 'Each external system — payments, CRMs, email, third-party APIs — adds scope. The first integration is included; the tenth is not.' },
  { title: 'AI features', body: 'Chatbots, agents, and generation features add data pipelines, prompt engineering, and ongoing API costs on top of the build.' },
  { title: 'Timeline', body: 'A standard 4-8 week build is priced as quoted. Compressing it into days requires more parallel effort and raises the price.' },
];

const examples = [
  { name: 'Focused tool or MVP (Kubera style)', range: '$8,000 – $20,000' },
  { name: 'Full SaaS with billing (Reelzila style)', range: '$15,000 – $30,000' },
  { name: 'AI generation platform (NovaMachine style)', range: '$20,000 – $40,000+' },
  { name: 'Automation engine (Magnet style)', range: '$10,000 – $25,000' },
];

const hiddenCosts = [
  { title: 'Hosting & infrastructure', body: '$100-$800/month depending on traffic and data. We set this up on your own accounts so there is no markup.' },
  { title: 'Maintenance', body: 'Dependencies, security patches, and bug fixes. Budget $500-$2,000/month once you have real users.' },
  { title: 'Feature iteration', body: 'Real products evolve. Post-launch feature work typically runs $2,000-$8,000/month while you find traction.' },
  { title: 'Third-party services', body: 'Email, payments, AI APIs, and analytics each carry their own usage fees — $150-$1,000/month combined.' },
];

const faqItems: FaqEntry[] = [
  {
    question: 'Why are you cheaper than other agencies?',
    answer:
      'We use AI-accelerated development to compress boilerplate coding, testing, and documentation by 40-60%, and we run lean without layers of account management. We pass those savings on as fixed prices — not because we cut corners on quality.',
  },
  {
    question: 'Are there hidden costs?',
    answer:
      'No hidden costs in the build — you get a fixed quote up front. The ongoing costs every app has (hosting, third-party APIs, maintenance, future features) are real, and we lay them out transparently so you can budget for total cost of ownership, not just the build.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes. Most projects are split into milestone-based payments tied to deliverables — typically a deposit to start and the balance across the build. We will structure a schedule that works for your cash flow during the estimate.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'App Development',
  serviceType: 'Custom App Development',
  description:
    'Transparent, fixed-price app development. MVPs from $997, full products $5K-$15K, and enterprise platforms $15K-$30K+.',
  areaServed: 'Worldwide',
  url: `https://novative.dev${PATH}`,
  provider: { '@id': 'https://novative.dev/#organization' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      minPrice: '997',
      maxPrice: '30000',
    },
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'App Development Cost', path: PATH },
]);

export default function AppDevelopmentCostPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="Pricing & Cost"
          title="Real App Development Costs — No Surprises"
          subtitle="Most cost guides quote pre-AI numbers from 2019. Here are the real 2026 ranges from a studio that has shipped 22+ products — with fixed pricing and a clear picture of total cost of ownership."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button size="lg" className="group">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog/how-much-does-it-cost-to-build-an-app">
              <Button variant="outline" size="lg">
                Read the Full Breakdown
              </Button>
            </Link>
          </div>
        </MarketingHero>

        {/* Comparison */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Your Options
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Freelancer vs agency vs studio vs no-code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparison.map((opt) => (
                <div
                  key={opt.name}
                  className={`border p-6 bg-[var(--background)] ${opt.highlight ? 'border-[var(--foreground)]' : 'border-[var(--border)]'}`}
                >
                  <h3 className="text-title text-lg mb-2">{opt.name}</h3>
                  <div className="text-xl font-medium tracking-tight mb-4">{opt.cost}</div>
                  <p className="text-body-sm text-[var(--foreground-secondary)] mb-2">
                    <span className="text-[var(--foreground)]">Pros:</span> {opt.pros}
                  </p>
                  <p className="text-body-sm text-[var(--foreground-secondary)]">
                    <span className="text-[var(--foreground)]">Cons:</span> {opt.cons}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Our Pricing
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Three fixed-price tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>

        {/* What affects the price */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                What Affects the Price
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Four things that move the number</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {priceFactors.map((factor) => (
                <div key={factor.title} className="border-l-2 border-[var(--foreground)] pl-5">
                  <h3 className="text-title mb-3">{factor.title}</h3>
                  <p className="text-body text-[var(--foreground-secondary)]">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real examples */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Real Examples
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">What products like yours actually cost</h2>
            <div className="border-t border-[var(--border)]">
              {examples.map((ex) => (
                <div
                  key={ex.name}
                  className="flex items-center justify-between gap-4 border-b border-[var(--border)] py-5"
                >
                  <span className="text-body text-[var(--foreground-secondary)]">{ex.name}</span>
                  <span className="text-title text-lg whitespace-nowrap">{ex.range}</span>
                </div>
              ))}
            </div>
            <p className="text-mono-sm text-[var(--foreground-muted)] mt-6">
              Ranges are illustrative. See the real products in our{' '}
              <Link href="/work" className="underline underline-offset-4">
                portfolio
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Hidden costs */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Watch Out For
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">The costs most agencies don&apos;t mention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiddenCosts.map((cost) => (
                <div key={cost.title} className="card-bordered">
                  <h3 className="text-title mb-3">{cost.title}</h3>
                  <p className="text-body text-[var(--foreground-secondary)]">{cost.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedReading
          slugs={['how-much-does-it-cost-to-build-an-app', 'what-is-an-mvp', 'build-vs-buy-software']}
          heading="Go Deeper"
          className="bg-[var(--background)]"
        />

        <RelatedWork slugs={['reelzila', 'novamachine']} className="bg-[var(--background-secondary)]" />

        <LeadMagnet className="bg-[var(--background)]" />

        <FaqSection items={faqItems} heading="App Cost FAQ" />

        <MarketingCta
          eyebrow="No Surprises"
          title={
            <>
              Want a Number
              <br />
              <span className="text-[var(--background)]/40">For Your Project?</span>
            </>
          }
          description="Tell us what you're building and we'll send a fixed-price estimate — specific to your project, not a generic range — within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
