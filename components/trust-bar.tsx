import { Star } from 'lucide-react';

/** Verifiable, first-party proof points (all supported by the site/portfolio). */
const stats = [
  { value: '22+', label: 'Products shipped' },
  { value: '47', label: 'Countries reached' },
  { value: '2-4 wks', label: 'To a working MVP' },
  { value: '100%', label: 'Code ownership' },
];

/** Tools we actually build with — shown as a "trusted stack" strip. */
const stack = ['Next.js', 'React', 'Python', 'FastAPI', 'Stripe', 'Claude', 'Firebase', 'Vercel'];

/**
 * Third-party review badges. EMPTY by default so nothing unverified renders.
 * Add real entries once profiles exist, e.g.:
 *   { platform: 'Clutch', rating: '5.0', url: 'https://clutch.co/profile/novative' }
 */
interface ReviewBadge {
  platform: string;
  rating: string;
  url: string;
}
const reviewBadges: ReviewBadge[] = [];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--background-secondary)]">
      <div className="container-custom py-10 md:py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--background-secondary)] p-5 text-center">
              <div className="text-display text-3xl md:text-4xl mb-1">{s.value}</div>
              <div className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted stack */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
            Built with a modern, production-proven stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-[var(--foreground-secondary)] tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Third-party review badges (render only when configured) */}
        {reviewBadges.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {reviewBadges.map((badge) => (
              <a
                key={badge.platform}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--foreground)] transition-colors"
              >
                <Star className="w-4 h-4 fill-[var(--foreground)] text-[var(--foreground)]" />
                <span className="text-body-sm font-medium">{badge.rating}</span>
                <span className="text-mono-sm text-[var(--foreground-muted)]">{badge.platform}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
