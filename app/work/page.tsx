'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Bot, Clapperboard, ExternalLink, Landmark, Magnet, Palette, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

// Note: metadata must be in a server component or a separate metadata export.
// Since this is 'use client', we handle metadata via the parent layout or a
// generateMetadata in a separate file. JSON-LD is embedded inline below.

interface CaseStudy {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  icon: React.ElementType;
  url?: string;
  image: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'novamachine',
    number: '01',
    name: 'NovaMachine',
    tagline: 'Node-based AI video and image generation platform with multi-model support and a credit-based billing system.',
    category: 'AI Video Generation SaaS',
    icon: Bot,
    image: '/portfolio/PF-NovaMachine.png',
    challenge:
      'Content creators needed access to AI video generation without technical barriers. Existing tools were limited to single models, offered no visual workflow, and had no way to chain outputs or control cinematic parameters like camera angles and lighting.',
    solution:
      'We built a node-based canvas editor with 7 node types (Prompt, Image, Video, Element, Camera, Lighting, Output) where users visually connect inputs to generate AI videos and images. Supports multiple AI models via fal.ai, with a tag system (@Image1, @Video1) for multi-prompt workflows, real-time cost estimation, and Stripe-powered credit billing.',
    results: [
      { label: 'Total Creations', value: '3.2M' },
      { label: 'Node Types', value: '7' },
      { label: 'Countries', value: '47' },
      { label: 'Uptime', value: '99.9%' },
    ],
    features: [
      '7-node canvas editor: Prompt, Image, Video, Element, Camera, Lighting, Output',
      'Multi-model AI generation via fal.ai (Kling, Nano Banana Pro)',
      'Per-prompt tag system with @-mention autocomplete and visual highlighting',
      'Camera node with 14 angles, 9 lens lengths, 11 color grades',
      'Credit-based pricing with 3 Stripe tiers (Free, Pro $29, Enterprise $99)',
      'Canvas persistence, drag-and-drop, fullscreen viewer with keyboard shortcuts',
    ],
    techStack: ['Next.js 15', 'React 19', 'React Flow', 'Firebase', 'Stripe', 'fal.ai'],
    color: 'var(--foreground)',
  },
  {
    id: 'novastudio',
    number: '02',
    name: 'NovaStudio',
    tagline: 'Professional web-based video editor with integrated AI generation, frame-accurate timeline, and backend rendering.',
    category: 'AI Video Editor',
    icon: Palette,
    image: '/portfolio/PF-NOVASTUDIO.png',
    challenge:
      'Video creators needed a browser-based editor with desktop-class precision. Existing web editors lacked frame-accurate timelines, multi-track compositing, and had no integrated AI generation — forcing creators to switch between multiple tools.',
    solution:
      'We built a professional video editor with a frame-based timeline (no floating-point precision errors), multi-track compositing with color-coded tracks, and integrated Kling 2.5 AI video generation. Backend rendering via FastAPI + MoviePy + FFmpeg handles heavy processing, while the frontend delivers industry-standard J/K/L shuttle controls and non-destructive editing.',
    results: [
      { label: 'Timeline FPS', value: '30' },
      { label: 'Undo History', value: '1000' },
      { label: 'Auto-Save', value: '30s' },
      { label: 'Quality', value: '92%' },
    ],
    features: [
      'Frame-accurate timeline with HH:MM:SS:FF timecode and 29.97fps drop-frame support',
      'Multi-track compositing with color-coded tracks (green/yellow/purple)',
      'Integrated Kling 2.5 AI video generation with direct timeline insertion',
      'Industry-standard J/K/L shuttle controls matching Premiere Pro workflow',
      'EDL-based export with backend FFmpeg rendering (H.264/H.265)',
      'Auto-save every 30 seconds with .novastudio project format and crash recovery',
    ],
    techStack: ['Next.js 15', 'React 19', 'FastAPI', 'MoviePy', 'FFmpeg', 'fal.ai'],
    color: 'var(--foreground)',
  },
  {
    id: 'reelzila',
    number: '03',
    name: 'Reelzila',
    tagline: 'AI video platform with a creator marketplace that generates 40-70% profit margins.',
    category: 'AI SaaS Platform',
    icon: Clapperboard,
    url: 'reelzila.studio',
    image: '/portfolio/PF-Reelzila.png',
    challenge:
      'Content creators needed access to cutting-edge AI video generation without paying enterprise prices. Existing tools were either too expensive, limited to one model, or had no way for creators to monetize their generations.',
    solution:
      'We built a complete AI video platform with 6 generation models (Google VEO, OpenAI Sora, Kling, LTX, Hailuo, Nano Banana), a credit-based pricing system, and a peer-to-peer marketplace where creators sell their AI-generated content to buyers.',
    results: [
      { label: 'AI Models', value: '6' },
      { label: 'Profit Margin', value: '40-70%' },
      { label: 'API Endpoints', value: '50+' },
      { label: 'Time to Market', value: '8 weeks' },
    ],
    features: [
      'Multi-model AI generation engine with per-model pricing',
      'Creator marketplace with seller dashboards and payout system',
      'Dynamic credit system ($0.05/credit) with transparent pricing',
      'Admin panel with user management, seller verification, and analytics',
      'PayTrust payment gateway with webhook verification',
      'Security audit: 0 critical vulnerabilities',
    ],
    techStack: ['Next.js 16', 'React 19', 'FastAPI', 'Firebase', 'Fal.ai', 'Vercel'],
    color: 'var(--foreground)',
  },
  {
    id: 'magnet',
    number: '04',
    name: 'Magnet',
    tagline: 'Autonomous lead generation that discovers, qualifies, and contacts prospects while you sleep.',
    category: 'AI Sales Intelligence',
    icon: Magnet,
    image: '/portfolio/PF-Magnet.png',
    challenge:
      'Sales teams waste 60-70% of their time on manual prospecting — browsing job boards, scanning forums, copy-pasting emails. By the time they reach a lead, competitors have already made contact. The process doesn\'t scale.',
    solution:
      'We built an autonomous lead generation engine that scrapes 9+ sources (Upwork, Reddit, Hacker News, Indeed, RemoteOK, and more), classifies signals with a multi-layer confidence scorer, and generates personalized outreach sequences via Claude AI — all running hands-free on a daily schedule.',
    results: [
      { label: 'Lead Sources', value: '9+' },
      { label: 'Service Verticals', value: '12' },
      { label: 'Daily Schedule', value: '2x' },
      { label: 'Email Sequence', value: '4-step' },
    ],
    features: [
      '9-source scraper engine: Upwork CDP, Reddit, HN, Indeed, RemoteOK, Freelancer, and more',
      'Multi-layer confidence scoring (source + keywords + budget + urgency + signal type)',
      'Claude-powered personalized email generation with case study matching',
      '4-email automated sequence: initial → day 3 → day 7 → day 14 follow-ups',
      'Self-improving classifier via training loop with AI feedback',
      'macOS daemon: runs at 6am & 3pm daily with catch-up logic',
    ],
    techStack: ['FastAPI', 'Playwright', 'Claude AI', 'Resend', 'WebSocket', 'Python'],
    color: 'var(--foreground)',
  },
  {
    id: 'sonar',
    number: '05',
    name: 'Sonar',
    tagline: 'B2B buying signal radar. Detects companies ready to buy before your competitors do.',
    category: 'B2B Intelligence Platform',
    icon: Radar,
    image: '/portfolio/PF-Sonar.png',
    challenge:
      'B2B sales teams rely on LinkedIn and outdated databases to find leads. They miss buying signals — funding rounds, leadership changes, tech migrations, expansion announcements — that indicate a company is actively ready to purchase. By the time they find out, the deal is already in motion.',
    solution:
      'We built a 5-stage intelligence pipeline: Discover (10+ sources), Classify (6 signal types), Connect (entity resolution), Score (AI-powered lead ranking), and Act (automated outreach with tracking). A Clay-style enrichment waterfall extracts contacts and emails automatically.',
    results: [
      { label: 'Signal Sources', value: '10+' },
      { label: 'Signal Types', value: '6' },
      { label: 'API Endpoints', value: '75+' },
      { label: 'Enrichment Steps', value: '5' },
    ],
    features: [
      '10-source monitoring: Google News, Indeed, Crunchbase, HN, Product Hunt, GitHub, LinkedIn, G2',
      '5-stage pipeline: Discover → Classify → Connect → Score → Act',
      'Claude-powered lead scoring with rule-based fallback (24h cache, 40% cost reduction)',
      'Clay-style enrichment waterfall: website → team → contacts → emails → scoring',
      'Multi-step outreach sequences with Resend email tracking (opens, clicks, replies)',
      'Real-time WebSocket dashboard with live signal feed',
    ],
    techStack: ['FastAPI', 'Playwright', 'Claude AI', 'Resend', 'aiohttp', 'Python'],
    color: 'var(--foreground)',
  },
  {
    id: 'heritage',
    number: '06',
    name: 'Heritage Vault',
    tagline: 'AI-powered authenticity verification for cultural preservation. Trusted by institutions.',
    category: 'Digital Archive Platform',
    icon: Landmark,
    image: '/portfolio/PF-Heritage.png',
    challenge:
      'Cultural institutions needed a trusted repository to preserve historical media while combating deepfakes and AI-generated forgeries. Existing platforms had no way to cryptographically verify that content was authentic and untampered.',
    solution:
      'We built a digital archive platform with multi-stage verification: SHA-256 hashing, ECDSA digital signatures, perceptual fingerprinting, and AI-generated content detection. Role-based access for archivists, curators, and researchers across 3 languages.',
    results: [
      { label: 'Verification Stages', value: '5' },
      { label: 'Languages', value: '3' },
      { label: 'Cultural Categories', value: '14' },
      { label: 'API Endpoints', value: '50+' },
    ],
    features: [
      'AI detection engine: identifies Stable Diffusion, DALL-E, Midjourney, RunwayML content',
      'Cryptographic verification: SHA-256 + ECDSA-P256 digital signatures',
      'Perceptual hashing with deduplication (Hamming distance similarity search)',
      'Complete audit trail for institutional compliance',
      'Role-based access: Admin, Curator, Contributor, Viewer',
      'Trilingual: English, French, Malagasy with 22 region mappings',
    ],
    techStack: ['Next.js 16', 'PostgreSQL', 'Prisma', 'Cloudflare R2', 'NextAuth', 'Sharp'],
    color: 'var(--foreground)',
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
                <div className="relative w-full aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--background-tertiary)] mb-12 md:mb-16">
                  <Image
                    src={study.image}
                    alt={`${study.name} — ${study.category} case study by Novative`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>

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
