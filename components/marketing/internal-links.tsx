import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCaseStudy } from '@/lib/case-studies';
import { getBlogPost } from '@/lib/blog';

interface RelatedWorkProps {
  /** Case-study ids from lib/case-studies. */
  slugs: string[];
  heading?: string;
  className?: string;
}

/** Internal links to relevant case studies. */
export function RelatedWork({ slugs, heading = 'Proof It Works', className = '' }: RelatedWorkProps) {
  const studies = slugs
    .map((slug) => getCaseStudy(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  if (studies.length === 0) return null;

  return (
    <section className={`section ${className}`}>
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <span className="dot" />
          <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
            {heading}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <Link
              key={study.id}
              href={`/work/${study.id}`}
              className="group block p-6 border border-[var(--border)] hover:border-[var(--foreground)] transition-colors"
            >
              <div className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-2">
                {study.category}
              </div>
              <h3 className="text-title mb-2 group-hover:text-[var(--foreground-secondary)] transition-colors">
                {study.name}
              </h3>
              <p className="text-body text-[var(--foreground-secondary)] mb-4">{study.tagline}</p>
              <span className="inline-flex items-center gap-2 text-mono-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
                View case study
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

interface RelatedReadingProps {
  /** Blog post slugs from lib/blog. */
  slugs: string[];
  heading?: string;
  className?: string;
}

/** Internal links to relevant blog posts. */
export function RelatedReading({
  slugs,
  heading = 'Further Reading',
  className = '',
}: RelatedReadingProps) {
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (posts.length === 0) return null;

  return (
    <section className={`section ${className}`}>
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <span className="dot" />
          <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
            {heading}
          </span>
        </div>

        <div className="border-t border-[var(--border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-4 border-b border-[var(--border)] py-6"
            >
              <div>
                <div className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-2">
                  {post.category} &middot; {post.readingTime}
                </div>
                <h3 className="text-title text-lg md:text-xl group-hover:text-[var(--foreground-secondary)] transition-colors">
                  {post.title}
                </h3>
              </div>
              <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
