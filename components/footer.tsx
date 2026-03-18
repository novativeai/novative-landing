'use client';

import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'AI Products', href: '#services' },
    { name: 'SaaS Platforms', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Business Automation', href: '#services' },
  ],
  company: [
    { name: 'Our Work', href: '/work' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Estimate', href: '#estimate' },
  ],
  legal: [
    { name: 'Legal Notice', href: '/legal' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/novativeai' },
  { name: 'Twitter', href: 'https://x.com/novativeai' },
  { name: 'GitHub', href: 'https://github.com/novativeai' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)]">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <span className="text-title text-xl">Novative</span>
            </Link>
            <p className="text-body-sm text-[var(--background)]/70 max-w-xs">
              AI Product Studio.
              Your idea, our engine.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-mono-sm uppercase tracking-wider mb-4 text-[var(--background)]/50">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-mono-sm uppercase tracking-wider mb-4 text-[var(--background)]/50">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-mono-sm uppercase tracking-wider mb-4 text-[var(--background)]/50">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-mono-sm uppercase tracking-wider mb-4 text-[var(--background)]/50">
              Social
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--background)]/20 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mono-sm text-[var(--background)]/50">
            &copy; {currentYear} Novative. All rights reserved.
          </p>

          {/* Keywords */}
          <div className="flex items-center gap-2 text-mono-sm text-[var(--background)]/30">
            <span>ai products</span>
            <span>&middot;</span>
            <span>saas platforms</span>
            <span>&middot;</span>
            <span>business automation</span>
            <span>&middot;</span>
            <span>mobile apps</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
