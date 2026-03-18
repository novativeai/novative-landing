'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    category: 'Web & Frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & API',
    technologies: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL'],
  },
  {
    category: 'AI & Intelligence',
    technologies: ['Claude (Anthropic)', 'OpenAI', 'LangChain', 'Fal.ai', 'Custom Models'],
  },
  {
    category: 'Infrastructure',
    technologies: ['Vercel', 'Cloudflare R2', 'Supabase', 'Firebase', 'Docker'],
  },
  {
    category: 'Payments & Auth',
    technologies: ['Stripe', 'PayTrust', 'NextAuth', 'Firebase Auth', 'JWT'],
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android'],
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

export function TechStackSection() {
  return (
    <section id="tech" className="section bg-[var(--background-secondary)]">
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
                Technologies
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline"
            >
              Built With the Best
            </motion.h2>
          </div>
          <span className="page-number hidden md:block">04</span>
        </div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--border)]">
                <span className="dot" />
                <h3 className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                  {category.category}
                </h3>
              </div>

              {/* Technologies */}
              <ul className="space-y-2">
                {category.technologies.map((tech, index) => (
                  <li
                    key={tech}
                    className="text-body flex items-center gap-3 py-1"
                  >
                    <span className="text-mono-sm text-[var(--foreground-muted)] w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[var(--foreground)]">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 pt-8 border-t border-[var(--border)]"
        >
          <p className="text-body text-[var(--foreground-muted)] text-center max-w-2xl mx-auto">
            We choose the right tool for each job. You don&apos;t need to know what these are —
            just know they&apos;re the same technologies used by the world&apos;s best startups.
          </p>
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
