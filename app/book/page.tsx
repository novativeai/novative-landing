import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';
import { BOOKING_URL } from '@/lib/config';

const PATH = '/book';

export const metadata: Metadata = {
  title: { absolute: 'Book a Free Discovery Call | Novative' },
  description:
    'Pick a time that works for you. A free, no-pitch 15-minute call to talk through your idea, timeline, and budget with the team that has shipped 22+ products.',
  alternates: { canonical: `https://novative.dev${PATH}` },
  openGraph: {
    title: 'Book a Free Discovery Call | Novative',
    description:
      'Pick a time for a free, no-pitch 15-minute call about your project. 22+ products shipped.',
    url: `https://novative.dev${PATH}`,
    type: 'website',
  },
};

const breadcrumbData = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Book a Call', path: PATH },
]);

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <SiteHeader />

      <main>
        <section className="pt-28 md:pt-36 pb-10 md:pb-12">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-6">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Discovery Call
              </span>
            </div>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-6">
              Let&apos;s Talk About What You&apos;re Building
            </h1>
            <p className="text-body-lg text-[var(--foreground-secondary)] max-w-2xl">
              Pick a time below for a free, no-pitch 15-minute call. We&apos;ll talk through your
              idea, rough timeline, and budget — and tell you exactly what it would take.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container-custom">
            <div className="border border-[var(--border)] bg-[var(--background-secondary)] overflow-hidden">
              <iframe
                src={BOOKING_URL}
                title="Book a discovery call with Novative"
                className="w-full"
                style={{ height: '720px', border: '0' }}
                loading="lazy"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-body-sm text-[var(--foreground-muted)]">
                Calendar not loading, or prefer email?
              </p>
              <a
                href="mailto:contact@novative.dev?subject=Discovery%20Call%20Request&body=Hi%20Novative%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call.%0A%0AProject%20idea%3A%20"
                className="inline-flex items-center gap-2 text-body-sm text-[var(--foreground)] underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                contact@novative.dev
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
