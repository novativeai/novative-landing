export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  iconName: string;
  url?: string;
  image: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  features: string[];
  techStack: string[];
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'novamachine',
    number: '01',
    name: 'NovaMachine',
    tagline: 'Node-based AI video and image generation platform with multi-model support and a credit-based billing system.',
    category: 'AI Video Generation SaaS',
    iconName: 'Bot',
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
    iconName: 'Palette',
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
    iconName: 'Clapperboard',
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
    iconName: 'Magnet',
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
      '4-email automated sequence: initial \u2192 day 3 \u2192 day 7 \u2192 day 14 follow-ups',
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
    iconName: 'Radar',
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
      '5-stage pipeline: Discover \u2192 Classify \u2192 Connect \u2192 Score \u2192 Act',
      'Claude-powered lead scoring with rule-based fallback (24h cache, 40% cost reduction)',
      'Clay-style enrichment waterfall: website \u2192 team \u2192 contacts \u2192 emails \u2192 scoring',
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
    iconName: 'Landmark',
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

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((s) => s.id);
}
