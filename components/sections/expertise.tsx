'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Mic, Brain, BarChart3, Sparkles, Zap } from 'lucide-react';

const expertiseAreas = [
  {
    icon: MessageSquare,
    title: 'AI Customer Support',
    description: 'Chatbots trained on your business knowledge. Answer questions 24/7 without hiring.',
  },
  {
    icon: Mic,
    title: 'Voice AI Agents',
    description: 'AI that calls leads, qualifies prospects, and books meetings. Replaces an SDR team.',
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'Systems that learn what your customers want and suggest the right product at the right time.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Turn your business data into actionable forecasts. See trends before your competitors.',
  },
  {
    icon: Sparkles,
    title: 'Content Generation',
    description: 'AI that creates videos, images, and text tailored to your brand. Faster than any freelancer.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Connect your tools and eliminate repetitive tasks. Your team focuses on what matters.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
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
                Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline"
            >
              AI That Works For You
            </motion.h2>
          </div>
          <span className="page-number hidden md:block">03</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body-lg text-[var(--foreground-secondary)] mb-8">
              We don&apos;t sell AI hype. We build AI that solves specific business
              problems and generates measurable ROI.
            </p>
            <p className="text-body text-[var(--foreground-muted)] mb-8">
              Every solution is tailored to your business. We explain everything
              in plain English, not tech jargon. You tell us the problem — we
              build the machine that fixes it.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)]">
              <div>
                <div className="text-display text-3xl md:text-4xl mb-2">22+</div>
                <div className="text-mono-sm text-[var(--foreground-muted)]">Products Shipped</div>
              </div>
              <div>
                <div className="text-display text-3xl md:text-4xl mb-2">6</div>
                <div className="text-mono-sm text-[var(--foreground-muted)]">AI Models Integrated</div>
              </div>
              <div>
                <div className="text-display text-3xl md:text-4xl mb-2">0</div>
                <div className="text-mono-sm text-[var(--foreground-muted)]">Critical Vulnerabilities</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Expertise Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {expertiseAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 border border-transparent hover:border-[var(--border)] hover:bg-[var(--background-secondary)] transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors">
                  <area.icon className="w-5 h-5 text-[var(--foreground)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-title text-base mb-1">{area.title}</h3>
                  <p className="text-body-sm text-[var(--foreground-muted)]">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
