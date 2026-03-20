import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseStudies, getCaseStudy, getAllSlugs } from '@/lib/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = `${study.name} — ${study.category} | Novative`;
  const description = `${study.tagline} Built with ${study.techStack.join(', ')}. See the full case study.`;

  return {
    title,
    description,
    keywords: [
      study.name,
      study.category,
      ...study.techStack,
      `${study.category.toLowerCase()} development`,
      'case study',
      'Novative portfolio',
    ],
    alternates: {
      canonical: `https://novative.dev/work/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://novative.dev/work/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.name} — ${study.category}`,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.id === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: study.name,
    description: study.tagline,
    applicationCategory: study.category,
    operatingSystem: 'Web',
    ...(study.url ? { url: `https://${study.url}` } : {}),
    creator: {
      '@type': 'Organization',
      name: 'Novative',
      url: 'https://novative.dev',
    },
    offers: {
      '@type': 'Offer',
      category: 'Custom Development',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\u003c'),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="dot" />
                <span className="dot" />
              </div>
              <span className="text-lg font-medium tracking-tight">Novative</span>
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                {study.category}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl">
                {study.name}
              </h1>
              {study.url && (
                <a
                  href={`https://${study.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-mono-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors mt-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  {study.url}
                </a>
              )}
            </div>
            <p className="text-body-lg text-[var(--foreground-secondary)] max-w-2xl mb-12">
              {study.tagline}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] mb-12 md:mb-16">
              {study.results.map((result) => (
                <div
                  key={result.label}
                  className="bg-[var(--background)] p-6 md:p-8 text-center"
                >
                  <div className="text-display text-3xl md:text-4xl mb-2">
                    {result.value}
                  </div>
                  <div className="text-mono-sm text-[var(--foreground-muted)] uppercase tracking-wider">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Screenshot */}
            <div className="relative w-full aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--background-tertiary)] mb-12 md:mb-16">
              <Image
                src={study.image}
                alt={`${study.name} — ${study.category} case study by Novative`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left */}
              <div>
                <div className="mb-8">
                  <h2 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                    The Challenge
                  </h2>
                  <p className="text-body text-[var(--foreground-secondary)]">
                    {study.challenge}
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                    Our Solution
                  </h2>
                  <p className="text-body text-[var(--foreground-secondary)]">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h2 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                    Built With
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                  What We Delivered
                </h2>
                <div className="space-y-4">
                  {study.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 border border-transparent hover:border-[var(--border)] transition-all"
                    >
                      <span className="text-mono-sm text-[var(--foreground-muted)] w-6 flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-body text-[var(--foreground-secondary)]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <div className="line-h" />
            </div>
          </div>
        </section>

        {/* Navigation between projects */}
        <section className="bg-[var(--background-secondary)]">
          <div className="container-custom py-12 md:py-16">
            <div className="flex items-center justify-between">
              {prevStudy ? (
                <Link
                  href={`/work/${prevStudy.id}`}
                  className="flex items-center gap-3 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <div>
                    <div className="text-mono-sm text-[var(--foreground-muted)]">Previous</div>
                    <div className="text-title">{prevStudy.name}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextStudy ? (
                <Link
                  href={`/work/${nextStudy.id}`}
                  className="flex items-center gap-3 text-right text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  <div>
                    <div className="text-mono-sm text-[var(--foreground-muted)]">Next</div>
                    <div className="text-title">{nextStudy.name}</div>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--foreground)] text-[var(--background)]">
          <div className="container-custom py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[6px] h-[6px] bg-[var(--background)]" />
                <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                  Your Project
                </span>
              </div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Want Something
                <br />
                <span className="italic">Like This?</span>
              </h2>
              <p className="text-body-lg text-[var(--background)]/80 mb-8">
                Every product above started with a conversation. Tell us what you&apos;re building
                and we&apos;ll tell you exactly what it takes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#estimate">
                  <Button
                    size="lg"
                    className="group bg-[var(--background)] text-[var(--foreground)] hover:opacity-90"
                  >
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[var(--background)]/30 text-[var(--background)] hover:bg-[var(--background)]/10"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--foreground)] text-[var(--background)] border-t border-[var(--background)]/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-mono-sm text-[var(--background)]/50">
                &copy; {new Date().getFullYear()} Novative. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-mono-sm text-[var(--background)]/30">
                <span>automation</span>
                <span>&middot;</span>
                <span>integration</span>
                <span>&middot;</span>
                <span>optimization</span>
                <span>&middot;</span>
                <span>scale</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
