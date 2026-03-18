'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Quick Win',
    price: '997',
    maxPrice: '2,500',
    duration: '1-2 weeks',
    description: 'A focused solution for one specific problem. Perfect for testing the waters.',
    features: [
      'AI chatbot or voice agent',
      'Landing page with lead capture',
      'Workflow automation setup',
      'One integration (CRM, email, etc.)',
      '30 days of support included',
    ],
    popular: false,
  },
  {
    name: 'Growth Product',
    price: '5,000',
    maxPrice: '15,000',
    duration: '4-8 weeks',
    description: 'A complete product ready for users and revenue. Our most popular tier.',
    features: [
      'Custom UI/UX design',
      'Scalable architecture',
      'Advanced AI integration',
      'Payment processing (Stripe, etc.)',
      'Admin dashboard & analytics',
      'User authentication & accounts',
      '3 months of support included',
    ],
    popular: true,
  },
  {
    name: 'Scale Platform',
    price: '15,000',
    maxPrice: '30,000+',
    duration: '8-12 weeks',
    description: 'Enterprise-grade platform with marketplace, multi-tenant, or complex workflows.',
    features: [
      'Everything in Growth, plus:',
      'Multi-tenant architecture',
      'Marketplace or platform features',
      'Advanced security & compliance',
      'API for third-party integrations',
      'Performance optimization',
      '6 months of support included',
    ],
    popular: false,
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function PricingSection() {
  return (
    <section id="pricing" className="section bg-[var(--background-secondary)]">
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
                Pricing
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline mb-6"
            >
              Transparent Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-[var(--foreground-secondary)]"
            >
              Fixed prices. No hourly billing surprises.
              You know the cost before we start.
            </motion.p>
          </div>
          <span className="page-number hidden md:block">06</span>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative border ${
                plan.popular
                  ? 'border-[var(--foreground)] bg-[var(--background)]'
                  : 'border-[var(--border)] bg-[var(--background)]'
              } p-6 md:p-8 flex flex-col`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="badge bg-[var(--foreground)] text-[var(--background)]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-title mb-2">{plan.name}</h3>
                <p className="text-body-sm text-[var(--foreground-muted)] mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
                    ${plan.price}
                  </span>
                  <span className="text-body-sm text-[var(--foreground-muted)]">
                    – ${plan.maxPrice}
                  </span>
                </div>
                <p className="text-mono-sm text-[var(--foreground-muted)] mt-1">
                  {plan.duration}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 text-[var(--foreground)]"
                      strokeWidth={2}
                    />
                    <span className="text-body-sm text-[var(--foreground-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-mono-sm text-[var(--foreground-muted)] mt-8"
        >
          * All prices are fixed quotes. Free detailed estimate within 24 hours.
        </motion.p>

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
