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
    id: 'solaris',
    number: '01',
    name: 'Solaris',
    tagline:
      'An AI agent that runs your entire business stack — reading your CRM, billing, inbox, and calendar, then taking action across all of them.',
    category: 'AI Business Operations Platform',
    iconName: 'Orbit',
    url: 'solaris-entreprise.com',
    image: '/portfolio/solaris-4.png',
    challenge:
      'Operators waste their days bouncing between a dozen disconnected tools — CRM, billing, email, calendar, docs — manually copying context from one to the next. No single system sees the whole business, so nothing acts on it.',
    solution:
      'We built Solaris, an AI agent ("Helios") that sits on top of the entire stack. It connects to 9+ tools (Halo CRM, HubSpot, Stripe, Slack, Notion, Gmail, Google Calendar, Kubera, Mnemo), keeps a live "Orbit" activity feed, and runs multi-step tool chains from a single command center — drafting emails, moving deals, and surfacing what needs attention in real time.',
    results: [
      { label: 'Connected Tools', value: '9+' },
      { label: 'Tool Chains', value: 'Multi-step' },
      { label: 'Pricing Tiers', value: '4' },
      { label: 'Live Feed', value: 'Real-time' },
    ],
    features: [
      'Helios AI agent that reads and acts across CRM, billing, inbox, and calendar',
      'Live Orbit feed streaming every action across the connected stack in real time',
      '9+ native integrations: Halo, HubSpot, Stripe, Slack, Notion, Gmail, Calendar, Kubera, Mnemo',
      'Multi-step tool chains that complete real workflows hands-free',
      'Command center with slash commands and natural-language requests',
      'Four-tier pricing (Solo, Starter, Pro, Enterprise) with usage-based message limits',
    ],
    techStack: ['Next.js', 'React', 'FastAPI', 'Claude AI', 'PostgreSQL', 'WebSocket'],
    color: 'var(--foreground)',
  },
  {
    id: 'reelzila',
    number: '02',
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
    id: 'novamachine',
    number: '03',
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
    id: 'halo',
    number: '04',
    name: 'Halo',
    tagline:
      'The warm CRM your team actually wants to open — a visual deal pipeline with a built-in AI assistant and a REST API your stack can build on.',
    category: 'AI-Native CRM',
    iconName: 'Users',
    url: 'halo-crm.com',
    image: '/portfolio/halo-1.png',
    challenge:
      'Sales teams avoid their CRM because it feels like data entry for management. Pipelines go stale, context lives in inboxes, and the tool that should drive revenue becomes the one nobody opens.',
    solution:
      'We built Halo, a CRM designed to feel calm and fast: a visual drag-and-drop deal pipeline; unified contacts, companies, deals, tickets, and tasks; and an AI assist that reads the room and drafts the next step. A clean REST API lets the rest of the stack build on top of it.',
    results: [
      { label: 'Core Modules', value: '6' },
      { label: 'Integrations', value: '4+' },
      { label: 'AI Assist', value: 'Native' },
      { label: 'API', value: 'REST' },
    ],
    features: [
      'Visual drag-and-drop deal pipeline with board and table views',
      'Unified workspace: contacts, companies, deals, tickets, tasks, and reporting',
      'AI assist that reads context and drafts the next action',
      'Slash commands (/pipeline, /contacts, /deals) for keyboard-fast navigation',
      'Native integrations with HubSpot, Stripe, Notion, and Google Calendar',
      'REST API with contact enrichment and lifecycle and lead-status tracking',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'REST API'],
    color: 'var(--foreground)',
  },
  {
    id: 'mnemo',
    number: '05',
    name: 'Mnemo',
    tagline:
      "Your team's working memory — a docs-plus-databases workspace for enterprise, with audit-grade row-level security and an API-first core.",
    category: 'Docs & Databases Platform',
    iconName: 'Database',
    url: 'mnemo.team',
    image: '/portfolio/mnemo-1.png',
    challenge:
      "Teams start every doc tool with a blank page and a promise. Knowledge scatters across wikis and spreadsheets, security is an afterthought, and the editor can't talk to the scripts and agents that actually run the business.",
    solution:
      'We built Mnemo, a block-based docs and databases workspace that ships with eight production-ready templates instead of empty pages. Every record is protected by audit-grade row-level security, and the same public REST API that powers the in-app editor also powers your scripts and agents.',
    results: [
      { label: 'Templates', value: '8' },
      { label: 'Security', value: 'RLS' },
      { label: 'API', value: 'REST' },
      { label: 'Editor', value: 'Block-based' },
    ],
    features: [
      'Block-based editor with linked docs and structured databases',
      'Eight production templates: meeting notes, project plan, OKRs, hiring pipeline, and more',
      'Audit-grade row-level security — every row authorized, API keys hashed at rest',
      'API-first design: one public REST API for the editor, scripts, and agents',
      'Built-in databases (Tasks, Campaign assets) with table and board views',
      'Enterprise-ready workspace with roles and granular access control',
    ],
    techStack: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'REST API'],
    color: 'var(--foreground)',
  },
  {
    id: 'novastudio',
    number: '06',
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
    id: 'magnet',
    number: '07',
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
      '4-email automated sequence: initial → day 3 → day 7 → day 14 follow-ups',
      'Self-improving classifier via training loop with AI feedback',
      'macOS daemon: runs at 6am & 3pm daily with catch-up logic',
    ],
    techStack: ['FastAPI', 'Playwright', 'Claude AI', 'Resend', 'WebSocket', 'Python'],
    color: 'var(--foreground)',
  },
  {
    id: 'sonar',
    number: '08',
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
    id: 'kubera',
    number: '09',
    name: 'Kubera',
    tagline:
      'Professional invoices in seconds — generate, send, and track multi-currency invoices, or just ask the AI to create one from chat.',
    category: 'Invoicing & Billing SaaS',
    iconName: 'Receipt',
    url: 'kubera-invoice.com',
    image: '/portfolio/kubera-1.png',
    challenge:
      "Freelancers and small studios lose hours to clunky invoicing — wrestling with templates, currencies, and tax math just to get paid, then losing track of what's outstanding.",
    solution:
      'We built Kubera, a fast invoicing tool that turns a chat message into a polished, downloadable PDF invoice. It handles multi-currency, tax and discount math, a client directory, and invoice tracking — with a free tier for the first 10 invoices a month.',
    results: [
      { label: 'Currencies', value: 'Multi' },
      { label: 'PDF Export', value: 'Instant' },
      { label: 'AI Invoicing', value: 'Chat' },
      { label: 'Free Tier', value: '10/mo' },
    ],
    features: [
      'Generate complete invoices from a chat prompt with the Helios AI assistant',
      'Multi-currency support with automatic tax and discount calculation',
      'Instant, branded PDF export with live preview',
      'Line-item editor with per-item quantity, price, tax, and discount',
      'Client directory and invoice tracking with paid/outstanding status',
      'Free tier for the first 10 invoices per month, no card required',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Claude AI'],
    color: 'var(--foreground)',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((s) => s.id);
}
