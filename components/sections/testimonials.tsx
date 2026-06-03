import Image from 'next/image';
import { Star } from 'lucide-react';
import { JsonLd } from '@/components/json-ld';
import { testimonials } from '@/lib/testimonials';

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function TestimonialsSection() {
  // Renders nothing until real testimonials are added in lib/testimonials.ts.
  if (testimonials.length === 0) return null;

  const ratings = testimonials.map((t) => t.rating ?? 5);
  const avg = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://novative.dev/#organization',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg,
      reviewCount: testimonials.length,
      bestRating: '5',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: String(t.rating ?? 5), bestRating: '5' },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
    })),
  };

  return (
    <section className="section">
      <JsonLd data={jsonLd} />
      <div className="container-custom">
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Testimonials
              </span>
            </div>
            <h2 className="text-headline">What Founders Say</h2>
          </div>
          <span className="page-number hidden md:block">05</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-bordered flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--foreground)] text-[var(--foreground)]"
                  />
                ))}
              </div>
              <blockquote className="text-body text-[var(--foreground-secondary)] flex-grow mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden bg-[var(--background-tertiary)] flex items-center justify-center">
                  {t.avatar ? (
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                  ) : (
                    <span className="text-mono-sm font-medium">{initials(t.name)}</span>
                  )}
                </div>
                <div>
                  <div className="text-body-sm font-medium text-[var(--foreground)]">{t.name}</div>
                  <div className="text-mono-sm text-[var(--foreground-muted)]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
