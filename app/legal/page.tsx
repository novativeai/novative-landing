import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Legal Notice | Novative',
  description: 'Legal notice and company information for Novative, AI Product Studio.',
};

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24">
        <div className="container-custom py-12 md:py-20 max-w-3xl">
          <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
            Legal Notice
          </h1>
          <p className="text-mono-sm text-[var(--foreground-muted)] mb-12">
            Last updated: March 18, 2026
          </p>

          <div className="space-y-10 text-body text-[var(--foreground-secondary)]">
            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                1. Company Information
              </h2>
              <p>
                <strong className="text-[var(--foreground)]">Novative</strong>
                <br />
                AI Product Studio
                <br />
                Email:{' '}
                <a
                  href="mailto:contact@novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  contact@novative.dev
                </a>
                <br />
                Website:{' '}
                <a
                  href="https://novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  https://novative.dev
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                2. Website Hosting
              </h2>
              <p>
                This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, United States.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, icons, images, audio clips, digital downloads,
                and software, is the property of Novative or its content
                suppliers and is protected by international copyright laws.
              </p>
              <p className="mt-3">
                The compilation of all content on this website is the exclusive
                property of Novative and is protected by international copyright
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                4. Trademarks
              </h2>
              <p>
                &quot;Novative&quot; and the Novative logo are trademarks of
                Novative. All other trademarks, service marks, and trade names
                referenced on this site are the property of their respective
                owners.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                5. Limitation of Liability
              </h2>
              <p>
                Novative shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising from your
                access to, or use of, this website. Novative does not warrant
                that this website, its servers, or emails sent from Novative are
                free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                6. Applicable Law
              </h2>
              <p>
                Any disputes arising from the use of this website shall be
                governed by and construed in accordance with applicable laws. By
                using this website, you agree to the exclusive jurisdiction of
                the competent courts.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                7. Contact
              </h2>
              <p>
                For any questions regarding this legal notice, please contact us
                at{' '}
                <a
                  href="mailto:contact@novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  contact@novative.dev
                </a>
                .
              </p>
            </section>

            <div className="pt-8 border-t border-[var(--border)]">
              <p className="text-mono-sm text-[var(--foreground-muted)]">
                See also:{' '}
                <Link href="/privacy" className="text-[var(--foreground)] underline-animated">
                  Privacy Policy
                </Link>
                {' '}&middot;{' '}
                <Link href="/terms" className="text-[var(--foreground)] underline-animated">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
