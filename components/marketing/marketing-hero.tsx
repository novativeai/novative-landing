interface MarketingHeroProps {
  eyebrow: string;
  /** Rendered as the page H1. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

/** Standard top-of-page hero for the marketing landing pages. */
export function MarketingHero({ eyebrow, title, subtitle, children }: MarketingHeroProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-6">
          <span className="dot" />
          <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
            {eyebrow}
          </span>
        </div>

        <h1 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-6">{title}</h1>

        {subtitle && (
          <p className="text-body-lg text-[var(--foreground-secondary)] max-w-2xl mb-8">
            {subtitle}
          </p>
        )}

        {children}

        <div className="mt-12">
          <div className="line-h" />
        </div>
      </div>
    </section>
  );
}
