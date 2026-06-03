/**
 * Knowledge base for the on-site AI assistant.
 * This is stuffed into the system prompt as grounding context (lightweight RAG).
 * Keep it factual and in sync with the site — every claim here should be true
 * and supported by the pages in this repo.
 */
export const KNOWLEDGE_BASE = `
# Novative — AI Product Studio

Novative is an AI product studio that designs and ships production-ready software:
AI-powered SaaS platforms, web apps, mobile apps, chatbots, and business automation.
Founded in 2024. 22+ products shipped to production. Works with clients worldwide.

Positioning: "Your idea, our engine." We work especially with non-technical founders —
plain-English communication, fixed prices, weekly demos, and you own 100% of the code.

## Services (each has a dedicated page)
- MVP Development (/services/mvp-development): a working MVP in 2-4 weeks. From $997.
- AI Chatbot Development (/services/ai-chatbot): custom chatbots trained on your data —
  customer support, lead qualification, internal knowledge bots, voice agents. From $997.
  Benchmarks from production deployments: up to ~73% ticket deflection, ~2s responses, 24/7.
- SaaS Development (/services/saas-development): full-stack SaaS with auth, Stripe billing,
  admin dashboard, analytics, and an API. Launch-ready in 6-8 weeks. From $5,000.
- Business Automation (/services/business-automation): lead gen, email sequences, data
  processing, CRM sync, reporting. Custom AI workflows. From $997.
- Mobile Apps: cross-platform iOS + Android from one codebase.
- For non-technical founders: /for/non-technical-founders

## Pricing (fixed quotes, no hourly billing)
- Quick Win: $997–$2,500, 1-2 weeks. One focused tool/feature, a chatbot, a landing flow,
  one integration, 30 days support.
- Growth Product (most popular): $5,000–$15,000, 4-8 weeks. Custom UI/UX, auth, billing,
  admin dashboard, analytics, advanced AI, 3 months support.
- Scale Platform: $15,000–$30,000+, 8-12 weeks. Multi-tenant, marketplace/platform features,
  advanced security, API, 6 months support.
A detailed cost breakdown lives at /cost/app-development, and a free downloadable
"App Development Cost Checklist" PDF is available on that page and the homepage.

## Process
Discovery call → fixed-price estimate (within 24h) → build in weekly sprints with live demos
→ launch + code handover → included support. You own all source code, repos, and accounts.

## Tech stack
Frontend: Next.js, React, TypeScript, Tailwind CSS.
Backend: Python, FastAPI, Firebase, PostgreSQL, Supabase.
Billing: Stripe (and crypto checkout where it fits). AI: Claude, OpenAI, fal.ai.
Deployment: Vercel.

## Portfolio (selected, at /work)
- Solaris (solaris-entreprise.com): an AI agent ("Helios") that runs your entire business
  stack — connects 9+ tools (CRM, billing, inbox, calendar, Slack, Notion, etc.) and runs
  multi-step workflows from one command center.
- Reelzila (reelzila.studio): AI video platform with 6 models and a creator marketplace;
  40-70% profit margins; shipped in 8 weeks.
- NovaMachine: node-based AI video/image generation platform; 3.2M creations across 47 countries.
- Halo (halo-crm.com): an AI-native CRM with a visual deal pipeline and a REST API.
- Mnemo (mnemo.team): enterprise docs + databases workspace with audit-grade row-level security.
- NovaStudio: pro web-based video editor with a frame-accurate timeline.
- Magnet: autonomous lead generation across 9+ sources, powered by Claude.
- Sonar: B2B buying-signal radar with a 5-stage intelligence pipeline.
- Kubera (kubera-invoice.com): AI invoicing — generate multi-currency invoices from chat.

## How to take the next step
- Free estimate form: /#estimate (reply within 24 hours)
- Book a free 15-min discovery call: /book
- Email: contact@novative.dev
- Free cost checklist PDF: on /cost/app-development and the homepage
`.trim();
