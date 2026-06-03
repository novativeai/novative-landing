'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { serviceNavItems } from '@/lib/services';

const navItems = [
  { label: 'For Founders', href: '/for/non-technical-founders' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Estimate', href: '/#estimate' },
  { label: 'Contact', href: '/#contact' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="text-lg font-medium tracking-tight">Novative</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-3 w-72"
                  >
                    <div className="bg-[var(--background)] border border-[var(--border)] shadow-sm">
                      {serviceNavItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-[var(--background-secondary)] transition-colors border-b border-[var(--border)] last:border-b-0"
                        >
                          <span className="block text-sm font-medium text-[var(--foreground)]">
                            {service.name}
                          </span>
                          <span className="block text-mono-sm text-[var(--foreground-muted)] mt-0.5">
                            {service.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors underline-animated"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/#estimate">
              <Button size="sm">Start a Project</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[var(--background-secondary)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--border)] bg-[var(--background)] overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {/* Services group */}
              <div>
                <span className="block text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-2">
                  Services
                </span>
                <div className="space-y-2 pl-3 border-l border-[var(--border)]">
                  {serviceNavItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-1 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--border)]">
                <Link href="/#estimate" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Start a Project</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
