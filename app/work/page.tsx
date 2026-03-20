'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="dot" />
                <span className="dot" />
              </div>
              <span className="text-lg font-medium tracking-tight">Novative</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col justify-center pt-20 md:pt-24">
          <div className="absolute top-24 md:top-28 right-6 md:right-8 z-10">
            <span className="page-number">W</span>
          </div>

          <div className="container-custom py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-caption">selected work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display mb-6"
            >
              <span className="block">22+ Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-headline text-[var(--foreground-secondary)] mb-12 max-w-2xl"
            >
              Shipped to Production
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="dot" />
              <span className="dot opacity-60" />
              <span className="dot opacity-30" />
              <span className="dot opacity-10" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-lg text-[var(--foreground-secondary)] max-w-xl"
            >
              From AI platforms generating revenue to fintech apps processing real transactions.
              These aren&apos;t mockups. They&apos;re live products solving real business problems.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="origin-left mt-12"
            >
              <div className="line-h" />
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="pb-24"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              variants={itemVariants}
              className={`${index % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--background-secondary)]'}`}
            >
              <div className="container-custom py-16 md:py-24">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-12 md:mb-16">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="dot" />
                      <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                        {study.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
                        {study.name}
                      </h2>
                      {study.url && (
                        <a
                          href={`https://${study.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-mono-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors mt-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {study.url}
                        </a>
                      )}
                    </div>
                    <p className="text-body-lg text-[var(--foreground-secondary)] max-w-2xl">
                      {study.tagline}
                    </p>
                  </div>
                  <span className="page-number hidden md:block">{study.number}</span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] mb-12 md:mb-16">
                  {study.results.map((result) => (
                    <div
                      key={result.label}
                      className={`${index % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--background-secondary)]'} p-6 md:p-8 text-center`}
                    >
                      <div className="text-display text-3xl md:text-4xl mb-2">
                        {result.value}
                      </div>
                      <div className="text-mono-sm text-[var(--foreground-muted)] uppercase tracking-wider">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Screenshot */}
                <Link href={`/work/${study.id}`}>
                  <div className="relative w-full aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--background-tertiary)] mb-12 md:mb-16 group cursor-pointer">
                    <Image
                      src={study.image}
                      alt={`${study.name} — ${study.category} case study by Novative`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                </Link>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Left: Challenge & Solution */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                        The Challenge
                      </h3>
                      <p className="text-body text-[var(--foreground-secondary)]">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                        Our Solution
                      </h3>
                      <p className="text-body text-[var(--foreground-secondary)]">
                        {study.solution}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <h3 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                        Built With
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span key={tech} className="badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Key Features */}
                  <div>
                    <h3 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-4">
                      What We Delivered
                    </h3>
                    <div className="space-y-4">
                      {study.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-4 p-4 border border-transparent hover:border-[var(--border)] transition-all"
                        >
                          <span className="text-mono-sm text-[var(--foreground-muted)] w-6 flex-shrink-0 mt-0.5">
                            {String(featureIndex + 1).padStart(2, '0')}
                          </span>
                          <p className="text-body text-[var(--foreground-secondary)]">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Full Case Study Link */}
                <div className="mt-8">
                  <Link
                    href={`/work/${study.id}`}
                    className="inline-flex items-center gap-2 text-mono-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <span>View full case study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 md:mt-16">
                  <div className="line-h" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* CTA Section */}
        <section className="bg-[var(--foreground)] text-[var(--background)]">
          <div className="container-custom py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[6px] h-[6px] bg-[var(--background)]" />
                <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                  Your Project
                </span>
              </div>

              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Ready To Build
                <br />
                <span className="text-[var(--background)]/40">Something</span>
                <br />
                <span className="italic">Like This?</span>
              </h2>

              <p className="text-body-lg text-[var(--background)]/80 mb-8">
                Every product above started with a conversation. Tell us what you&apos;re building
                and we&apos;ll tell you exactly what it takes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#estimate">
                  <Button
                    size="lg"
                    className="group bg-[var(--background)] text-[var(--foreground)] hover:opacity-90"
                  >
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[var(--background)]/30 text-[var(--background)] hover:bg-[var(--background)]/10"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Mini */}
        <footer className="bg-[var(--foreground)] text-[var(--background)] border-t border-[var(--background)]/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-mono-sm text-[var(--background)]/50">
                &copy; {new Date().getFullYear()} Novative. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-mono-sm text-[var(--background)]/30">
                <span>automation</span>
                <span>&middot;</span>
                <span>integration</span>
                <span>&middot;</span>
                <span>optimization</span>
                <span>&middot;</span>
                <span>scale</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
