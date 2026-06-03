import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Magnet, Mail, Database, RefreshCw, BarChart3, Search, PenTool, Hammer, Rocket, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingCta } from '@/components/marketing/marketing-cta';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';
import { RelatedWork, RelatedReading } from '@/components/marketing/internal-links';
import { breadcrumbJsonLd } from '@/lib/seo';

const PATH = '/services/business-automation';

export const metadata: Metadata = {
  title: { absolute: 'Business Automation Development | AI Workflows That Run While You Sleep | Novative' },
  description:
    'Automate lead generation, email sequences, data processing, and repetitive tasks with custom AI workflows. Connected to your existing tools. Starting at $997.',
  keywords: [
    'business automation development',
    'AI workflow automation',
    'business process automation',
    'lead generation automation',
    'workflow automation services',
    'custom automation development',
    'AI automation agency',
  ],
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'Business Automation Development | AI Workflows | Novative',
    description:
      'Automate lead gen, email sequences, data processing, and repetitive tasks with custom AI workflows. Connected to your tools. From $997.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Automation Development | Novative',
    description: 'Custom AI workflows that automate lead gen, email, and data tasks. From $997.',
  },
};

const types = [
  { icon: Magnet, title: 'Lead generation', body: 'Autonomous engines that find, qualify, and contact prospects across the web — hands-free.' },
  { icon: Mail, title: 'Email sequences', body: 'Personalized, multi-step outreach and nurture flows that send and follow up automatically.' },
  { icon: Database, title: 'Data processing', body: 'Scrape, clean, enrich, and route data between systems without manual copy-paste.' },
  { icon: RefreshCw, title: 'CRM sync', body: 'Keep your CRM, helpdesk, and spreadsheets in sync so nothing falls through the cracks.' },
  { icon: BarChart3, title: 'Reporting', body: 'Automated dashboards and alerts that surface what matters the moment it changes.' },
];

const process = [
  { icon: Search, title: 'Identify bottleneck', body: 'We find the repetitive work that drains the most hours from your team.' },
  { icon: PenTool, title: 'Design workflow', body: 'We map the ideal automated flow and the systems it needs to touch.' },
  { icon: Hammer, title: 'Build', body: 'We build and integrate the workflow with your existing tools and data.' },
  { icon: Rocket, title: 'Deploy', body: 'We ship it to run on a schedule or trigger — reliably, in the background.' },
  { icon: Activity, title: 'Monitor', body: 'We watch it, tune it, and add safeguards so it keeps working as you grow.' },
];

const faqItems: FaqEntry[] = [
  {
    question: 'What can you automate?',
    answer:
      'Anything repetitive and rule-based: lead generation, prospect research, email outreach and follow-ups, data scraping and enrichment, CRM updates, report generation, and cross-tool syncing. If a person does it the same way every day, we can usually automate it.',
  },
  {
    question: 'How much does business automation cost?',
    answer:
      'A focused automation starts at $997. More complex multi-source engines with AI classification and ongoing monitoring fall in the $5,000-$25,000 range. Ongoing costs are mostly third-party API usage, typically $50-$500/month.',
  },
  {
    question: 'Does it connect to the tools we already use?',
    answer:
      'Yes. We connect to your CRM, email provider, spreadsheets, databases, and any system with an API. The goal is to fit into your existing stack, not force you to replace it.',
  },
  {
    question: 'What if the automation breaks?',
    answer:
      'We build in monitoring, logging, and alerts so failures surface immediately, plus catch-up logic so a missed run recovers automatically. Support is included, and because you own the code, you are never stranded.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Automation Development',
  serviceType: 'Business Process Automation',
  description:
    'Custom AI workflow automation for lead generation, email sequences, data processing, CRM sync, and reporting. Connected to your existing tools. From $997.',
  areaServed: 'Worldwide',
  url: `https://novative.dev${PATH}`,
  provider: { '@id': 'https://novative.dev/#organization' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      minPrice: '997',
      maxPrice: '25000',
    },
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: PATH },
  { name: 'Business Automation', path: PATH },
]);

export default function BusinessAutomationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <MarketingHero
          eyebrow="Business Automation"
          title="Automation That Runs While You Sleep"
          subtitle="Stop paying people to copy-paste, chase leads, and update spreadsheets. We build custom AI workflows that run in the background — connected to the tools you already use."
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button size="lg" className="group">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog/real-time-automation-competitive-advantage">
              <Button variant="outline" size="lg">
                See the Advantage
              </Button>
            </Link>
          </div>
        </MarketingHero>

        {/* Types */}
        <section className="section bg-[var(--background-secondary)]">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                What We Automate
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">Five workflows that buy back your time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* How it works */}
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                How It Works
              </span>
            </div>
            <h2 className="text-headline mb-12 max-w-2xl">From bottleneck to background process</h2>
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

        <RelatedWork
          slugs={['magnet', 'sonar', 'solaris']}
          heading="Automation We've Shipped"
          className="bg-[var(--background-secondary)]"
        />

        <RelatedReading
          slugs={['real-time-automation-competitive-advantage', 'custom-ai-tools-for-business']}
          heading="Why Automation Wins"
          className="bg-[var(--background)]"
        />

        <FaqSection items={faqItems} heading="Business Automation FAQ" className="bg-[var(--background-secondary)]" />

        <MarketingCta
          eyebrow="Set It and Forget It"
          title={
            <>
              What Would You
              <br />
              <span className="text-[var(--background)]/40">Automate First?</span>
            </>
          }
          description="Tell us the repetitive work eating your team's time. We'll design an automation and send a fixed-price estimate within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
