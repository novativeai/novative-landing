'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Response within 24h',
    action: 'contact@novative.dev',
    href: 'mailto:contact@novative.dev',
  },
  {
    icon: Calendar,
    title: 'Discovery Call',
    description: '15 min, free, no pitch',
    action: 'Book a slot',
    href: '#book',
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    description: 'Available now',
    action: 'Start a conversation',
    href: '#chat',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Contact
              </span>
            </motion.div>
          </div>
          <span className="page-number hidden md:block">07</span>
        </div>

        {/* Main CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready To Build
              <br />
              Something?
            </h2>
            <p className="text-body-lg text-[var(--foreground-secondary)] mb-8 max-w-md">
              Tell us what you&apos;re building. We&apos;ll tell you exactly
              what it takes — timeline, cost, and how AI can make it better.
            </p>
            <Button size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors">
                  <method.icon
                    className="w-5 h-5 text-[var(--foreground)]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-title text-base mb-0.5">{method.title}</h3>
                  <p className="text-mono-sm text-[var(--foreground-muted)]">
                    {method.description}
                  </p>
                </div>
                <div className="text-body-sm text-[var(--foreground-secondary)] group-hover:text-[var(--foreground)] transition-colors hidden md:block">
                  {method.action}
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Keywords Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="tag-row justify-center">
            <span>ai products</span>
            <span className="tag-separator">&middot;</span>
            <span>saas platforms</span>
            <span className="tag-separator">&middot;</span>
            <span>business automation</span>
            <span className="tag-separator">&middot;</span>
            <span>mobile apps</span>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="origin-left mt-12 md:mt-16"
        >
          <div className="line-h" />
        </motion.div>
      </div>
    </section>
  );
}
