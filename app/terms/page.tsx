import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Novative',
  description: 'Terms of service for Novative — rules and guidelines for using our website and services.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24">
        <div className="container-custom py-12 md:py-20 max-w-3xl">
          <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
            Terms of Service
          </h1>
          <p className="text-mono-sm text-[var(--foreground-muted)] mb-12">
            Last updated: March 18, 2026
          </p>

          <div className="space-y-10 text-body text-[var(--foreground-secondary)]">
            <section>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of
                the Novative website at{' '}
                <a
                  href="https://novative.dev"
                  className="text-[var(--foreground)] underline-animated"
                >
                  novative.dev
                </a>{' '}
                and any services provided by Novative. By accessing or using our
                website, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                1. Services
              </h2>
              <p>
                Novative is an AI Product Studio that provides software
                development services including but not limited to: AI product
                development, SaaS platforms, mobile applications, MVP
                development, and business automation solutions.
              </p>
              <p className="mt-3">
                All project engagements are subject to a separate service
                agreement or statement of work that will detail the specific
                scope, deliverables, timeline, and pricing.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                2. Project Estimator
              </h2>
              <p>
                The project estimator tool on our website provides indicative
                estimates only. These estimates are not binding offers or
                contracts. Final pricing and timelines will be determined after a
                detailed project analysis and will be confirmed in a formal
                proposal or statement of work.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                3. Use of Website
              </h2>
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use the website to transmit malicious code or harmful data</li>
                <li>Reproduce, duplicate, or resell any part of the website without permission</li>
                <li>Use automated tools to scrape or extract data from the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                4. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the Novative website
                — including text, graphics, logos, icons, images, and software —
                are owned by Novative and are protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p className="mt-3">
                For client projects, intellectual property ownership and
                licensing terms will be specified in the applicable service
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                5. Confidentiality
              </h2>
              <p>
                Any project information, business ideas, or technical details you
                share with us through the website or during consultations will be
                treated as confidential. We will not disclose your information to
                third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                6. Payment Terms
              </h2>
              <p>
                Payment terms for project engagements will be outlined in the
                applicable service agreement. General terms include:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>A deposit may be required before work begins</li>
                <li>Milestone-based payments may apply for larger projects</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Late payments may incur additional charges as specified in the service agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Novative shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or business opportunities, arising from:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Your use of or inability to use our website</li>
                <li>Any errors or inaccuracies in website content</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Any third-party content or conduct on the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                8. Warranties Disclaimer
              </h2>
              <p>
                The website is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or
                implied. We do not guarantee that the website will be
                uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                9. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                website at any time, without prior notice, for conduct that we
                believe violates these Terms or is harmful to other users,
                Novative, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on this page. Your
                continued use of the website after any changes constitutes
                acceptance of the new Terms. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                applicable laws, without regard to conflict of law principles.
                Any disputes arising under these Terms shall be subject to the
                exclusive jurisdiction of the competent courts.
              </p>
            </section>

            <section>
              <h2 className="text-title text-xl mb-4 text-[var(--foreground)]">
                12. Contact
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
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
                <Link href="/privacy" className="text-[var(--foreground)] underline-animated">
                  Privacy Policy
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
