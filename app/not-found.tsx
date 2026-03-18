import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24">
        <div className="container-custom py-24 md:py-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="dot" />
            <span className="dot" />
          </div>
          <h1 className="text-display text-6xl md:text-8xl mb-4">404</h1>
          <p className="text-body-lg text-[var(--foreground-secondary)] mb-8 max-w-md mx-auto">
            This page doesn&apos;t exist. Maybe it was never built — or maybe it&apos;s your next project.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-body-sm font-medium hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              href="/#estimate"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-body-sm font-medium hover:border-[var(--foreground)] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
