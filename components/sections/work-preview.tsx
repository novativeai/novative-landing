'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Clapperboard, Landmark, Magnet, Palette, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    icon: Bot,
    name: 'NovaMachine',
    slug: 'novamachine',
    category: 'AI Video Generation SaaS',
    metric: '3.2M',
    metricLabel: 'creations',
    description: 'Node-based AI video and image generation platform with 7 node types, multi-model support, and a credit-based billing system.',
    image: '/portfolio/PF-NovaMachine.png',
  },
  {
    icon: Palette,
    name: 'NovaStudio',
    slug: 'novastudio',
    category: 'AI Video Editor',
    metric: '30',
    metricLabel: 'fps timeline',
    description: 'Professional web-based video editor with AI generation, frame-accurate multi-track timeline, and backend rendering via FFmpeg.',
    image: '/portfolio/PF-NOVASTUDIO.png',
  },
  {
    icon: Clapperboard,
    name: 'Reelzila',
    slug: 'reelzila',
    category: 'AI SaaS',
    metric: '40-70%',
    metricLabel: 'profit margin',
    description: 'AI video platform with 6 models and a creator marketplace.',
    image: '/portfolio/PF-Reelzila.png',
  },
  {
    icon: Magnet,
    name: 'Magnet',
    slug: 'magnet',
    category: 'AI Sales Intelligence',
    metric: '9+',
    metricLabel: 'lead sources',
    description: 'Autonomous lead generation that discovers and contacts prospects while you sleep.',
    image: '/portfolio/PF-Magnet.png',
  },
  {
    icon: Radar,
    name: 'Sonar',
    slug: 'sonar',
    category: 'B2B Intelligence',
    metric: '10+',
    metricLabel: 'signal sources',
    description: 'Buying signal radar that detects companies ready to buy before competitors do.',
    image: '/portfolio/PF-Sonar.png',
  },
  {
    icon: Landmark,
    name: 'Heritage Vault',
    slug: 'heritage',
    category: 'Digital Archive',
    metric: '5',
    metricLabel: 'verification stages',
    description: 'AI-powered authenticity verification for cultural preservation.',
    image: '/portfolio/PF-Heritage.png',
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

export function WorkPreviewSection() {
  return (
    <section id="work" className="section bg-[var(--background-secondary)]">
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
                Selected Work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline"
            >
              22+ Products. Live. Generating Revenue.
            </motion.h2>
          </div>
          <span className="page-number hidden md:block">04</span>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {projects.map((project) => (
            <Link key={project.name} href={`/work/${project.slug}`}>
              <motion.div
                variants={itemVariants}
                className="card-bordered group hover:border-[var(--foreground)] transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden bg-[var(--background-tertiary)] border border-[var(--border)]">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.category} built by Novative`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <project.icon className="w-5 h-5 text-[var(--foreground)]" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-title text-base">{project.name}</h3>
                      <span className="text-mono-sm text-[var(--foreground-muted)]">{project.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-display text-2xl">{project.metric}</div>
                    <div className="text-mono-sm text-[var(--foreground-muted)]">{project.metricLabel}</div>
                  </div>
                </div>
                <p className="text-body text-[var(--foreground-secondary)]">
                  {project.description}
                </p>

                {/* View arrow */}
                <div className="mt-4 flex items-center gap-2 text-mono-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
                  <span>View case study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link href="/work">
            <Button variant="outline" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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
