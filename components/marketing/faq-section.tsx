import { Plus } from 'lucide-react';
import { JsonLd } from '@/components/json-ld';
import { faqJsonLd } from '@/lib/seo';

export interface FaqEntry {
  question: string;
  /** Plain-text answer used for FAQPage schema. */
  answer: string;
  /** Optional rich answer (with links) used for display; falls back to `answer`. */
  answerNode?: React.ReactNode;
}

interface FaqSectionProps {
  items: FaqEntry[];
  eyebrow?: string;
  heading?: string;
  /** Set false to suppress the FAQPage JSON-LD (e.g. when emitted elsewhere). */
  emitSchema?: boolean;
  className?: string;
}

/**
 * Visible FAQ accordion (native <details>, no client JS) paired with
 * matching FAQPage structured data.
 */
export function FaqSection({
  items,
  eyebrow = 'FAQ',
  heading = 'Frequently Asked Questions',
  emitSchema = true,
  className = '',
}: FaqSectionProps) {
  return (
    <section className={`section ${className}`}>
      {emitSchema && (
        <JsonLd data={faqJsonLd(items.map((i) => ({ question: i.question, answer: i.answer })))} />
      )}
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="dot" />
          <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-headline mb-12">{heading}</h2>

        <div className="border-t border-[var(--border)]">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[var(--border)] py-5"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-title text-lg md:text-xl">{item.question}</h3>
                <Plus className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--foreground-muted)] transition-transform group-open:rotate-45" />
              </summary>
              <div className="text-body text-[var(--foreground-secondary)] mt-4 max-w-2xl">
                {item.answerNode ?? item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
