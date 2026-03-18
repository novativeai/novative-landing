import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Novative',
  description: 'Privacy policy for Novative — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24">
        <div className="container-custom py-12 md:py-20 max-w-3xl">
          <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
            Privacy Policy
          </h1>
          <p className="text-mono-sm text-[var(--foreground-muted)] mb-12">
            Last updated: March 18, 2026
          </p>

          <div className="space-y-10 text-body text-[var(--foreground-secondary)]">
            <section>
              <p>
                Novative (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                operates the website{' '}
                <a
                  href="https://novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  novative.dev
                </a>
                . This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                1. Information We Collect
              </h2>
              <h3 className="text-title text-base mb-2 text-[var(--foreground)]">
                Information You Provide
              </h3>
              <p>
                We collect information you voluntarily provide when you use our
                project estimator form or contact us, including:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Project description and requirements</li>
              </ul>

              <h3 className="text-title text-base mb-2 mt-6 text-[var(--foreground)]">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent on pages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Respond to your inquiries and provide project estimates</li>
                <li>Send you relevant information about our services</li>
                <li>Improve and optimize our website</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                3. Data Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>
                  <strong className="text-[var(--foreground)]">Service providers:</strong>{' '}
                  Third-party services that help us operate our website (hosting,
                  analytics, email delivery)
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Legal requirements:</strong>{' '}
                  When required by law or to protect our rights
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Business transfers:</strong>{' '}
                  In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                4. Third-Party Services
              </h2>
              <p>Our website uses the following third-party services:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>
                  <strong className="text-[var(--foreground)]">Vercel:</strong>{' '}
                  Website hosting and analytics
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Cloudflare:</strong>{' '}
                  DNS management, email routing, and security
                </li>
              </ul>
              <p className="mt-3">
                Each of these services has their own privacy policy governing the
                use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                5. Cookies
              </h2>
              <p>
                Our website may use essential cookies required for the website to
                function properly. We do not use advertising or tracking cookies.
                You can configure your browser to refuse cookies, though this may
                affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfill the purposes outlined in this policy, unless a longer
                retention period is required or permitted by law. Contact form
                submissions are retained for up to 24 months.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                7. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a
                  href="mailto:contact@novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  contact@novative.dev
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                8. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website is not intended for children under 16. We do not
                knowingly collect personal information from children under 16. If
                you believe we have collected such information, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date. Your continued
                use of the website after changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at{' '}
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
                <Link href="/legal" className="text-[var(--foreground)] underline-animated">
                  Legal Notice
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
