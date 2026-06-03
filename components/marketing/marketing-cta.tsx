import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MarketingCtaProps {
  eyebrow?: string;
  /** Lines rendered in the headline; later lines are muted/italic for rhythm. */
  title: React.ReactNode;
  description: string;
  primaryLabel?: string;
}

/** Dark closing CTA block shared by the marketing landing pages. */
export function MarketingCta({
  eyebrow = "Let's Build Together",
  title,
  description,
  primaryLabel = 'Get a Free Estimate',
}: MarketingCtaProps) {
  return (
    <section className="bg-[var(--foreground)] text-[var(--background)]">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[6px] h-[6px] bg-[var(--background)]" />
            <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">{title}</h2>

          <p className="text-body-lg text-[var(--background)]/80 mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#estimate">
              <Button
                size="lg"
                className="group bg-[var(--background)] text-[var(--foreground)] hover:opacity-90"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/book">
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
  );
}
