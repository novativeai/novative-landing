'use client';

import { motion } from 'framer-motion';
import { Target, Clock, Wallet, Shield, TrendingUp, Users } from 'lucide-react';

const advantages = [
  {
    icon: Target,
    number: '01',
    title: '22+ Products Shipped',
    description:
      'Not concepts. Not pitches. Live, revenue-generating products. Visit reelzila.studio right now and see for yourself.',
  },
  {
    icon: Wallet,
    number: '02',
    title: 'Premium Quality, Fair Pricing',
    description:
      'Global-standard quality without the Silicon Valley price tag. Starting at $997 for focused projects.',
  },
  {
    icon: Clock,
    number: '03',
    title: 'Launch in 2-8 Weeks',
    description:
      'Working MVP in 2-4 weeks. Full production app in 6-8 weeks. You see progress every week, not every quarter.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'AI Built In, Not Bolted On',
    description:
      'AI is part of the architecture from day one. Not an afterthought. Your product is smarter by design.',
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Built to Scale',
    description:
      'Architectures designed to grow from 10 to 10 million users. No expensive rewrites when you succeed.',
  },
  {
    icon: Users,
    number: '06',
    title: 'Plain English, No Jargon',
    description:
      'We explain everything in terms you understand. You own the code, you know how it works, no lock-in.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function AdvantagesSection() {
  return (
    <section id="advantages" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Why Us
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline mb-6"
            >
              Why Business Owners Choose Novative
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-[var(--foreground-secondary)]"
            >
              We&apos;re not freelancers. We&apos;re a product studio that treats
              your project like our own business.
            </motion.p>
          </div>
          <span className="page-number hidden md:block">05</span>
        </div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]"
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.number}
              variants={itemVariants}
              className="bg-[var(--background)] p-6 md:p-8 group hover:bg-[var(--background-secondary)] transition-colors"
            >
              {/* Number & Icon Row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-mono-sm text-[var(--foreground-muted)]">
                  {advantage.number}
                </span>
                <advantage.icon
                  className="w-6 h-6 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className="text-title mb-3">{advantage.title}</h3>
              <p className="text-body text-[var(--foreground-secondary)]">
                {advantage.description}
              </p>
            </motion.div>
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
          <div className="line-h" />
        </motion.div>
      </div>
    </section>
  );
}
