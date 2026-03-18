'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clapperboard, Magnet, Radar, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    icon: Clapperboard,
    name: 'Reelzila',
    slug: 'reelzila',
    category: 'AI SaaS',
    metric: '40-70%',
    metricLabel: 'profit margin',
    description: 'AI video platform with 6 models and a creator marketplace.',
    screenshots: [
      { src: '/screenshots/reelzila-home.png', label: 'Homepage' },
      { src: '/screenshots/reelzila-explore.png', label: 'AI Models' },
    ],
  },
  {
    icon: Magnet,
    name: 'Magnet',
    slug: 'magnet',
    category: 'AI Sales Intelligence',
    metric: '9+',
    metricLabel: 'lead sources',
    description: 'Autonomous lead generation that discovers and contacts prospects while you sleep.',
    screenshots: [
      { src: '/screenshots/magnet-pipeline.png', label: 'Pipeline' },
      { src: '/screenshots/magnet-dashboard.png', label: 'Dashboard' },
    ],
  },
  {
    icon: Radar,
    name: 'Sonar',
    slug: 'sonar',
    category: 'B2B Intelligence',
    metric: '10+',
    metricLabel: 'signal sources',
    description: 'Buying signal radar that detects companies ready to buy before competitors do.',
    screenshots: [
      { src: '/screenshots/sonar-companies.png', label: 'Companies' },
    ],
  },
  {
    icon: Landmark,
    name: 'Heritage Vault',
    slug: 'heritage',
    category: 'Digital Archive',
    metric: '5',
    metricLabel: 'verification stages',
    description: 'AI-powered authenticity verification for cultural preservation.',
    screenshots: [
      { src: '/screenshots/heritage-home.png', label: 'Homepage' },
      { src: '/screenshots/heritage-verify.png', label: 'Verify' },
    ],
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

interface ScreenshotGalleryProps {
  screenshots: { src: string; label: string }[];
  name: string;
  icon: React.ElementType;
}

function ScreenshotGallery({ screenshots, name, icon: Icon }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (screenshots.length === 0) {
    return (
      <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden bg-[var(--background-tertiary)] border border-[var(--border)] flex items-center justify-center">
        <Icon className="w-12 h-12 text-[var(--foreground-muted)]" strokeWidth={1} />
      </div>
    );
  }

  return (
    <div className="mb-4">
      {/* Main Screenshot */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--background-tertiary)] border border-[var(--border)]">
        {screenshots.map((shot, i) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={`${name} — ${shot.label}`}
            fill
            className={`object-cover object-top transition-opacity duration-300 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Thumbnails */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 mt-2">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={(e) => { e.preventDefault(); setActiveIndex(i); }}
              className={`relative flex-1 aspect-[16/9] overflow-hidden border transition-all duration-200 ${
                i === activeIndex
                  ? 'border-[var(--foreground)] opacity-100'
                  : 'border-[var(--border)] opacity-50 hover:opacity-80'
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.label}
                fill
                className="object-cover object-top"
                sizes="150px"
              />
              <div className={`absolute bottom-0 left-0 right-0 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-center transition-colors ${
                i === activeIndex
                  ? 'bg-[var(--foreground)] text-[var(--background)]'
                  : 'bg-[var(--background)]/80 text-[var(--foreground-muted)]'
              }`}>
                {shot.label}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
            <Link key={project.name} href={`/work#${project.slug}`}>
              <motion.div
                variants={itemVariants}
                className="card-bordered group hover:border-[var(--foreground)] transition-all cursor-pointer overflow-hidden"
              >
                <ScreenshotGallery
                  screenshots={project.screenshots}
                  name={project.name}
                  icon={project.icon}
                />

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
