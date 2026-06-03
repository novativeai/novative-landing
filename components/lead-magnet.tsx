'use client';

import { useState } from 'react';
import { ArrowRight, Check, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PDF_URL = '/downloads/app-development-cost-checklist.pdf';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'loading' | 'success' | 'error';

function triggerDownload() {
  const a = document.createElement('a');
  a.href = PDF_URL;
  a.download = 'app-development-cost-checklist.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

interface LeadMagnetProps {
  className?: string;
}

/**
 * Email-gated download of the App Development Cost Checklist PDF.
 * Captures the email via /api/lead, then delivers the file.
 */
export function LeadMagnet({ className = '' }: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'lead-magnet:cost-checklist' }),
      });
      setStatus('success');
      triggerDownload();
    } catch {
      // Even if capture fails, let them have the resource.
      setStatus('success');
      triggerDownload();
    }
  }

  return (
    <section className={`section ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border border-[var(--border)] bg-[var(--background)] p-8 md:p-12">
          {/* Left: pitch */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-[var(--foreground)]" strokeWidth={1.5} />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Free Download
              </span>
            </div>
            <h2 className="text-headline text-2xl md:text-3xl mb-4">
              The App Development Cost Checklist
            </h2>
            <p className="text-body text-[var(--foreground-secondary)] mb-6 max-w-md">
              Not ready for an estimate? Get the 20+ questions to answer before you ask anyone for a
              quote — the same checklist we use to scope projects. No spam, just the PDF.
            </p>
            <ul className="space-y-2">
              {[
                'Define your scope before you pay for it',
                'Compare freelancer vs agency vs studio vs no-code',
                'Spot the hidden costs and red flags',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 text-[var(--foreground)]" strokeWidth={2} />
                  <span className="text-body-sm text-[var(--foreground-secondary)]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-[var(--background-secondary)] border border-[var(--border)] p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[var(--foreground)] mb-4">
                  <Download className="w-5 h-5 text-[var(--foreground)]" strokeWidth={1.5} />
                </div>
                <h3 className="text-title mb-2">Your checklist is downloading</h3>
                <p className="text-body-sm text-[var(--foreground-secondary)] mb-4">
                  If it didn&apos;t start automatically, use the link below.
                </p>
                <a
                  href={PDF_URL}
                  download
                  className="inline-flex items-center gap-2 text-mono-sm text-[var(--foreground)] underline underline-offset-4"
                >
                  Download the PDF
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="lead-magnet-email"
                  className="block text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-2"
                >
                  Where should we send it?
                </label>
                <input
                  id="lead-magnet-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="you@company.com"
                  className="w-full h-12 px-4 mb-3 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
                />
                {status === 'error' && (
                  <p className="text-body-sm text-[var(--destructive)] mb-3">
                    Please enter a valid email address.
                  </p>
                )}
                <Button type="submit" className="w-full group" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Get the Free Checklist'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-mono-sm text-[var(--foreground-muted)] mt-3 text-center">
                  Instant download. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
