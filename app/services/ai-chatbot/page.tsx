import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Headphones, Filter, BookOpen, Mic, Database, Users, BarChart3, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingCta } from '@/components/marketing/marketing-cta';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';
import { RelatedWork, RelatedReading } from '@/components/marketing/internal-links';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/services/ai-chatbot';

export const metadata: Metadata = {
  title: { absolute: 'AI Chatbot Development | Custom Chatbots for Business | Novative' },
  description:
    'Custom AI chatbots that handle customer support 24/7, qualify leads, and reduce ticket volume by up to 73%. Built on your business knowledge. Starting at $997.',
  keywords: [
    'AI chatbot development',
    'custom chatbot for business',
    'AI customer support chatbot',
    'chatbot development company',
    'build an AI chatbot',
    'lead qualification chatbot',
    'voice AI agent',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'AI Chatbot Development | Custom Chatbots for Business | Novative',
    description:
      'Custom AI chatbots that handle support 24/7, qualify leads, and cut ticket volume by up to 73%. Trained on your data. From $997.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development for Business | Novative',
    description: 'Custom AI chatbots trained on your data. 24/7 support, lead qualification. From $997.',
  },
};

const types = [
  { icon: Headphones, title: 'Customer support bots', body: 'Answer the same questions 24/7 so your team stops copy-pasting the same replies.' },
  { icon: Filter, title: 'Lead qualification bots', body: 'Greet visitors, qualify intent, and route hot leads to sales while they’re still warm.' },
  { icon: BookOpen, title: 'Internal knowledge bots', body: 'Let your team ask your docs, wikis, and SOPs in plain English and get instant answers.' },
  { icon: Mic, title: 'Voice AI agents', body: 'Phone agents that book meetings, qualify callers, and never miss a call.' },
];

const differentiators = [
  { icon: Database, title: 'Trained on YOUR data', body: 'Grounded in your docs, products, and policies — not generic internet answers that get facts wrong.' },
  { icon: Users, title: 'Human fallback', body: 'When the bot isn’t sure, it hands off cleanly to a human instead of hallucinating.' },
  { icon: BarChart3, title: 'Analytics dashboard', body: 'See what people ask, where the bot wins, and where to improve — with real metrics.' },
  { icon: Plug, title: 'CRM & tool integration', body: 'Connects to your CRM, helpdesk, and email so conversations turn into records and actions.' },
];

const results = [
  { value: 'Up to 73%', label: 'Ticket deflection' },
  { value: '~2 sec', label: 'Response time' },
  { value: '24/7', label: 'Availability' },
  { value: 'From $997', label: 'Starting price' },
];

const faqItems: FaqEntry[] = [
  {
    question: 'How much does a custom AI chatbot cost?',
    answer:
      'A custom AI chatbot starts at $997 for a focused support or lead-qualification bot. More complex bots with deep CRM integration, multiple data sources, or voice capabilities fall in the $5,000-$15,000 range. Ongoing AI API costs typically add $50-$300/month depending on volume.',
  },
  {
    question: 'How is a custom chatbot different from a platform like Intercom?',
    answer:
      'Platform chatbots are quick to set up but charge per-seat fees that compound and offer limited customization. A custom chatbot is trained on your exact data, integrates deeply with your systems, and is owned by you — which makes sense once per-seat costs climb or your needs exceed what platforms allow.',
  },
  {
    question: 'Will it make things up?',
    answer:
      'We ground every bot in your approved content and add guardrails plus a human fallback, so when the bot is uncertain it hands off to a person rather than guessing. That keeps answers accurate and on-brand.',
  },
  {
    question: 'What does it integrate with?',
    answer:
      'Our chatbots integrate with CRMs, helpdesks, email, calendars, and custom APIs. Conversations can create leads, update records, book meetings, and trigger workflows automatically.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Development',
  serviceType: 'AI Chatbot Development',
  description:
    'Custom AI chatbots trained on your business data: 24/7 customer support, lead qualification, internal knowledge bots, and voice agents. Starting at $997.',
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
  { name: 'AI Chatbot Development', path: PATH },
]);

export default function AiChatbotPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="AI Chatbot Development"
          title="AI Chatbots That Actually Work for Your Business"
          subtitle="Not a generic widget that frustrates customers. A custom AI chatbot trained on your business knowledge — answering questions, qualifying leads, and deflecting tickets around the clock."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button size="lg" className="group">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog/ai-chatbot-for-small-business">
              <Button variant="outline" size="lg">
                Read the Honest Guide
              </Button>
            </Link>
          </div>
        </MarketingHero>

        {/* Results */}
        <section className="bg-[var(--foreground)] text-[var(--background)]">
          <div className="container-custom py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--background)]/20">
              {results.map((r) => (
                <div key={r.label} className="bg-[var(--foreground)] p-6 text-center">
                  <div className="text-display text-3xl md:text-4xl mb-2">{r.value}</div>
                  <div className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-mono-sm text-[var(--background)]/50 mt-6 text-center">
              Benchmarks from production chatbot deployments. See the data in our{' '}
              <Link href="/blog/ai-chatbot-for-small-business" className="underline underline-offset-4">
                chatbot guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Types */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Types We Build
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Four kinds of chatbot, one custom build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {types.map((type) => (
                <div key={type.title} className="card-bordered">
                  <type.icon className="w-6 h-6 mb-4 text-[var(--foreground)]" strokeWidth={1.5} />
                  <h3 className="text-title text-lg mb-2">{type.title}</h3>
                  <p className="text-body-sm text-[var(--foreground-secondary)]">{type.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                What Makes Ours Different
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Accurate, accountable, and connected</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 border border-[var(--border)] bg-[var(--background)]">
                  <item.icon className="w-6 h-6 mt-1 flex-shrink-0 text-[var(--foreground)]" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-title text-lg mb-2">{item.title}</h3>
                    <p className="text-body text-[var(--foreground-secondary)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedWork
          slugs={['magnet', 'novamachine']}
          heading="AI We've Shipped"
          className="bg-[var(--background)]"
        />

        <RelatedReading
          slugs={['ai-chatbot-for-small-business', 'custom-ai-tools-for-business']}
          heading="Before You Build a Bot"
          className="bg-[var(--background-secondary)]"
        />

        <FaqSection items={faqItems} heading="AI Chatbot FAQ" />

        <MarketingCta
          eyebrow="Always On"
          title={
            <>
              Put an AI Agent
              <br />
              <span className="text-[var(--background)]/40">On Your Front Line.</span>
            </>
          }
          description="Tell us where your team loses time to repetitive questions. We'll scope a custom chatbot and send a fixed-price estimate within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
