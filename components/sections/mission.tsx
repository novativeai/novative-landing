'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, DollarSign } from 'lucide-react';

const visionPoints = [
  {
    icon: DollarSign,
    label: 'ROI Focus',
    value: '3-10x',
    description: 'Average return on investment',
  },
  {
    icon: TrendingUp,
    label: 'Efficiency',
    value: '+40%',
    description: 'Operational efficiency gain',
  },
  {
    icon: Zap,
    label: 'Speed',
    value: '-60%',
    description: 'Time to market reduction',
  },
  {
    icon: Target,
    label: 'Satisfaction',
    value: '95%',
    description: 'Client satisfaction rate',
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="section bg-[var(--foreground)] text-[var(--background)]">
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
              <span className="w-[6px] h-[6px] bg-[var(--background)]" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                Mission & Vision
              </span>
            </motion.div>
          </div>
          <span className="text-mono-sm text-[var(--background)]/40 hidden md:block">08</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
              We Don&apos;t Build
              <br />
              <span className="text-[var(--background)]/40">Software.</span>
              <br />
              We Engineer
              <br />
              <span className="italic">Growth.</span>
            </h2>

            <div className="h-px bg-[var(--background)]/20 my-8" />

            <p className="text-body-lg text-[var(--background)]/80 mb-6">
              Our mission isn&apos;t to deliver code. It&apos;s to create
              technology assets that generate measurable revenue for your business.
            </p>
            <p className="text-body text-[var(--background)]/60">
              Every project is designed as a strategic investment.
              We measure our success by your growth, not by
              the number of lines of code produced.
            </p>
          </motion.div>

          {/* Right: Vision & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-[var(--background)]/20 p-6 md:p-8 mb-8">
              <h3 className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60 mb-4">
                Our Approach
              </h3>
              <p className="text-title text-xl md:text-2xl mb-6">
                Solution Provider
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-[var(--background)] mt-2 flex-shrink-0" />
                  <span className="text-body text-[var(--background)]/80">
                    Deep analysis of your business needs before writing a single line of code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-[var(--background)] mt-2 flex-shrink-0" />
                  <span className="text-body text-[var(--background)]/80">
                    Custom solutions aligned with your growth objectives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-[var(--background)] mt-2 flex-shrink-0" />
                  <span className="text-body text-[var(--background)]/80">
                    Continuous ROI measurement and result optimization
                  </span>
                </li>
              </ul>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[var(--background)]/40 pl-6">
              <p className="text-body-lg text-[var(--background)]/80 italic mb-4">
                &ldquo;Technology should be a profit center, not a cost center.
                Every dollar invested should generate measurable returns.&rdquo;
              </p>
              <p className="text-mono-sm text-[var(--background)]/40">
                — Novative Philosophy
              </p>
            </div>
          </motion.div>
        </div>

        {/* ROI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--background)]/10"
        >
          {visionPoints.map((point) => (
            <div
              key={point.label}
              className="bg-[var(--foreground)] p-6 md:p-8 text-center group"
            >
              <point.icon
                className="w-6 h-6 mx-auto mb-4 text-[var(--background)]/40 group-hover:text-[var(--background)] transition-colors"
                strokeWidth={1.5}
              />
              <div className="text-display text-3xl md:text-4xl mb-2">
                {point.value}
              </div>
              <div className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60 mb-1">
                {point.label}
              </div>
              <div className="text-body-sm text-[var(--background)]/40">
                {point.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="origin-left mt-12 md:mt-16"
        >
          <div className="h-px bg-[var(--background)]/20" />
        </motion.div>
      </div>
    </section>
  );
}
