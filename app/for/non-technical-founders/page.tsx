import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare, FileText, Hammer, Rocket, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingCta } from '@/components/marketing/marketing-cta';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';
import { RelatedWork, RelatedReading } from '@/components/marketing/internal-links';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/for/non-technical-founders';

export const metadata: Metadata = {
  title: { absolute: 'App Development for Non-Technical Founders | Novative' },
  description:
    "Don't know code? No problem. We build AI-powered apps, SaaS platforms, and MVPs for non-technical founders. 22+ products shipped. Plain English, fixed prices, you own everything.",
  keywords: [
    'app development for non-technical founders',
    'non-technical founder',
    'how to build an app without coding',
    'hire a developer for my startup',
    'technical co-founder alternative',
    'build my app',
    'MVP for founders',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'App Development for Non-Technical Founders | Novative',
    description:
      "Don't know code? We build AI-powered apps, SaaS, and MVPs for non-technical founders. Plain English, fixed prices, you own everything.",
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development for Non-Technical Founders | Novative',
    description:
      'We build AI-powered apps, SaaS, and MVPs for non-technical founders. Plain English, fixed prices, you own the code.',
  },
};

const painPoints = [
  {
    title: 'Burned by freelancers',
    body: 'You paid for a build that arrived late, broke on launch, or never shipped at all — and the developer vanished when you needed them most.',
  },
  {
    title: 'Drowning in jargon',
    body: 'Every conversation turns into an alphabet soup of frameworks and acronyms. You can’t tell a real answer from a stall.',
  },
  {
    title: 'Afraid of overpaying',
    body: 'Hourly billing with no ceiling. The quote keeps moving. You have no way to know what the work should actually cost.',
  },
  {
    title: 'Can’t evaluate developers',
    body: 'Everyone sounds confident. Without a technical background, it’s impossible to know who can really deliver until it’s too late.',
  },
];

const differentiators = [
  {
    title: 'Plain English, always',
    body: 'No jargon walls. We explain what we’re building, why, and what it means for your business — in language you actually use.',
  },
  {
    title: 'Fixed prices, no surprises',
    body: 'You get a fixed quote before we start. No hourly meter, no scope-creep invoices. You know the number up front.',
  },
  {
    title: 'Weekly demos',
    body: 'Every week you see real, working software — not status reports. You always know exactly where your product stands.',
  },
  {
    title: 'You own everything',
    body: 'Full source code, repositories, and accounts are handed to you. No lock-in. Hire anyone to maintain it later.',
  },
];

const process = [
  {
    icon: MessageSquare,
    title: 'Discovery call',
    body: 'A free, no-pitch conversation about what you’re building and what success looks like.',
  },
  {
    icon: FileText,
    title: 'Estimate',
    body: 'A clear, fixed-price quote with timeline and scope — within 24 hours.',
  },
  {
    icon: Hammer,
    title: 'Build',
    body: 'We build in weekly sprints with a live demo at the end of each one.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    body: 'We deploy to production, hand over the code, and get you in front of real users.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    body: 'Included post-launch support, plus a clear path for iterations and growth.',
  },
];

const faqItems: FaqEntry[] = [
  {
    question: 'Do I need technical knowledge to work with you?',
    answer:
      'No. The vast majority of our founders are non-technical. We translate your vision into a working product and explain every decision in plain English. You focus on your customers and your market; we handle all the engineering.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Projects fall into fixed-price tiers: a Quick Win ($997-$2,500), a Growth Product ($5,000-$15,000), and a Scale Platform ($15,000-$30,000+). You get a fixed quote before any work begins, so there are no hourly surprises.',
  },
  {
    question: 'How long does it take?',
    answer:
      'A working MVP takes 2-4 weeks. A complete, launch-ready product takes 6-8 weeks. Larger platforms run 8-12 weeks. You see working software every single week along the way.',
  },
  {
    question: 'Do I own the code?',
    answer:
      'Yes, 100%. You receive full source code, repositories, and infrastructure with no lock-in. You can hire any developer or team to maintain or extend the product later — it is entirely yours.',
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'Every project includes a post-launch support window (30 days to 6 months depending on tier). After that, we offer ongoing iteration and growth work, and because you own the code, you are never forced to stay with us.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'App Development for Non-Technical Founders',
  serviceType: 'Custom Software Development',
  description:
    'AI-powered app, SaaS, and MVP development for non-technical founders. Plain-English communication, fixed pricing, weekly demos, and full code ownership.',
  areaServed: 'Worldwide',
  url: `https://novative.dev${PATH}`,
  provider: { '@id': 'https://novative.dev/#organization' },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'For Non-Technical Founders', path: PATH },
]);

export default function NonTechnicalFoundersPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="For Non-Technical Founders"
          title={
            <>
              You Have the Vision.
              <br />
              <span className="text-[var(--foreground-secondary)]">We Build the Product.</span>
            </>
          }
          subtitle="You don't need to know how to code. You don't need a technical co-founder. You need a team that turns your idea into a real, revenue-ready product — and explains every step in plain English."
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
                See What It Costs
              </Button>
            </Link>
          </div>
        </MarketingHero>

        {/* Pain points */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Sound Familiar?
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">
              Building software shouldn&apos;t feel like a gamble
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point) => (
                <div key={point.title} className="card-bordered">
                  <h3 className="text-title mb-3">{point.title}</h3>
                  <p className="text-body text-[var(--foreground-secondary)]">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we're different */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                How We&apos;re Different
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">
              Built for founders who don&apos;t speak code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="border-l-2 border-[var(--foreground)] pl-5">
                  <h3 className="text-title mb-3">{item.title}</h3>
                  <p className="text-body text-[var(--foreground-secondary)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                The Process
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">From idea to launch in five clear steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[var(--border)]">
              {process.map((step, i) => (
                <div key={step.title} className="bg-[var(--background-secondary)] p-6">
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

        {/* Social proof */}
        <RelatedWork
          slugs={['reelzila', 'novamachine']}
          heading="Founders We've Shipped For"
          className="bg-[var(--background)]"
        />

        {/* Further reading */}
        <RelatedReading
          slugs={['how-much-does-it-cost-to-build-an-app', 'what-is-an-mvp']}
          heading="Read Before You Build"
          className="bg-[var(--background-secondary)]"
        />

        <FaqSection items={faqItems} heading="Questions Non-Technical Founders Ask" />

        <MarketingCta
          eyebrow="Your Idea, Our Engine"
          title={
            <>
              Ready To Build
              <br />
              <span className="text-[var(--background)]/40">Your Product?</span>
            </>
          }
          description="Tell us what you're building. We'll reply with a fixed-price estimate and a clear timeline — in plain English, within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
