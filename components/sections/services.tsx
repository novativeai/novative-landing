'use client';

import { motion } from 'framer-motion';
import { Bot, Rocket, Smartphone, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Products',
    description:
      'Chatbots that answer your customers 24/7. Voice agents that qualify leads. Content generators that save hours of work. We build AI that pays for itself.',
    tags: ['Chatbot', 'Voice AI', 'Automation'],
  },
  {
    icon: Globe,
    title: 'SaaS Platforms',
    description:
      'Complete web applications with user accounts, subscription billing, admin dashboards, and analytics. Launch-ready in 6-8 weeks.',
    tags: ['Subscriptions', 'Dashboard', 'Analytics'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'iOS and Android from one codebase. Offline-capable, fast, and native-feeling. From restaurant POS systems to fintech apps.',
    tags: ['iOS', 'Android', 'Cross-Platform'],
  },
  {
    icon: Rocket,
    title: 'MVP & Rapid Launch',
    description:
      'Validate your idea with a working product in 2-4 weeks. Not a wireframe — a real app with real users and real data.',
    tags: ['Fast', '2-4 Weeks', 'Launch-Ready'],
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description:
      'Connect your tools. Automate your workflows. Lead generation, email sequences, data processing — systems that run while you sleep.',
    tags: ['Workflows', 'Integration', 'Scale'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="section bg-[var(--background-secondary)]">
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
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline"
            >
              What We Build
            </motion.h2>
          </div>
          <span className="page-number hidden md:block">02</span>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-bordered group hover:border-[var(--foreground)] transition-colors"
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon className="h-6 w-6 text-[var(--foreground)]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-title mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-body text-[var(--foreground-secondary)] mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
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
