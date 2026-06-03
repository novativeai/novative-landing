import Link from 'next/link';
import { FaqSection, type FaqEntry } from '@/components/marketing/faq-section';

const faqItems: FaqEntry[] = [
  {
    question: 'How much does it cost to build an app?',
    answer:
      'Most projects fall into three fixed-price tiers: a Quick Win ($997-$2,500) for a focused tool, a Growth Product ($5,000-$15,000) for a complete launch-ready app, and a Scale Platform ($15,000-$30,000+) for enterprise-grade systems. We give you a fixed quote before any work starts.',
    answerNode: (
      <>
        Most projects fall into three fixed-price tiers: a Quick Win ($997&ndash;$2,500) for a
        focused tool, a Growth Product ($5,000&ndash;$15,000) for a complete launch-ready app, and a
        Scale Platform ($15,000&ndash;$30,000+) for enterprise-grade systems. We give you a fixed
        quote before any work starts &mdash; see the full{' '}
        <Link href="/cost/app-development" className="underline underline-offset-4">
          app development cost breakdown
        </Link>
        .
      </>
    ),
  },
  {
    question: 'How long does it take to build an MVP?',
    answer:
      'We deliver a working MVP in 2-4 weeks and a complete, launch-ready product in 6-8 weeks. Not wireframes — a real app with real users, real data, and production-ready architecture, with progress you can see every week.',
    answerNode: (
      <>
        We deliver a working MVP in 2&ndash;4 weeks and a complete, launch-ready product in 6&ndash;8
        weeks. Not wireframes &mdash; a real app with real users, real data, and production-ready
        architecture, with progress you can see every week. More on our{' '}
        <Link href="/services/mvp-development" className="underline underline-offset-4">
          MVP development process
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do I need a technical co-founder?',
    answer:
      "No — that's what we're for. We handle architecture, design, development, AI integration, deployment, and support so you can focus on your customers and your business. You bring the vision; we bring the engineering team.",
    answerNode: (
      <>
        No &mdash; that&apos;s what we&apos;re for. We handle architecture, design, development, AI
        integration, deployment, and support so you can focus on your customers and your business.
        You bring the vision; we bring the engineering team. See how we work with{' '}
        <Link href="/for/non-technical-founders" className="underline underline-offset-4">
          non-technical founders
        </Link>
        .
      </>
    ),
  },
  {
    question: "What's the difference between hiring a freelancer and a studio?",
    answer:
      'A freelancer is one person with one skill set and no backup. A studio gives you an accountable team, a repeatable process, design plus engineering plus AI in one place, and ongoing support after launch. If a freelancer disappears, your project stalls; with a studio, the work keeps moving.',
  },
  {
    question: 'Do I own the code you build?',
    answer:
      'Yes, 100%. You get full source code handoff with no lock-in. The repositories, infrastructure, and accounts are yours. We build on your stack so you can hire any team to maintain or extend it later.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We build with Next.js, React, and TypeScript on the frontend; Python, FastAPI, Firebase, and PostgreSQL on the backend; Stripe for billing; and Claude AI and OpenAI for AI features. Everything is deployed on Vercel and other modern, scalable infrastructure.',
  },
];

export function FaqHomeSection() {
  return (
    <FaqSection
      items={faqItems}
      eyebrow="FAQ"
      heading="Questions Founders Ask Us"
      className="bg-[var(--background)]"
    />
  );
}
