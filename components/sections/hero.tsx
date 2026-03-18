'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PointGeometry } from '@/components/point-geometry';
import Link from 'next/link';

const keywords = ['ai products', 'saas platforms', 'business automation', 'mobile apps'];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 md:pt-24 overflow-hidden">
      {/* Page Number */}
      <div className="absolute top-24 md:top-28 right-6 md:right-8 z-10">
        <span className="page-number">01</span>
      </div>

      <div className="container-custom flex-1 flex flex-col justify-center py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="z-10">
            {/* Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <span className="text-caption">AI Product Studio</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-display">
                <span className="block">Your Idea.</span>
                <span className="block text-[var(--foreground-secondary)]">Our Engine.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 md:mb-16"
            >
              <p className="text-body-lg text-[var(--foreground-secondary)] max-w-md">
                We build AI-powered products that generate revenue.
                Not mockups. Not MVPs that break. Production systems
                that work from day one.
              </p>
            </motion.div>

            {/* Decorative Dots Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-12 md:mb-16"
            >
              <span className="dot" />
              <span className="dot opacity-60" />
              <span className="dot opacity-30" />
              <span className="dot opacity-10" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
            >
              <a href="#estimate">
                <Button size="lg" className="group">
                  Get a Free Estimate
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  See Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Horizontal Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="origin-left"
            >
              <div className="line-h max-w-md" />
            </motion.div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <div className="tag-row">
                {keywords.map((keyword, index) => (
                  <span key={keyword} className="flex items-center gap-4">
                    {index > 0 && <span className="separator">·</span>}
                    <span>{keyword}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Point Geometry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] hidden md:flex items-center justify-center"
          >
            <PointGeometry />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
