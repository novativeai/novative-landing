import { content as appDevCostContent } from './blog/app-development-cost';
import { content as buildVsBuyContent } from './blog/build-vs-buy-software';
import { content as customAiContent } from './blog/custom-ai-tools';
import { content as realTimeAutomationContent } from './blog/real-time-automation';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  relatedCaseStudies?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-it-cost-to-build-an-app',
    title: 'How Much Does It Cost to Build an App in 2026? Real Numbers From a Studio That Has Built 22+',
    description:
      'Actual project budgets, AI-assisted development savings, Year 1 true cost breakdowns, and a decision framework for choosing between agencies, freelancers, no-code, and AI-assisted studios.',
    publishedAt: '2026-03-20',
    author: 'Novative',
    category: 'Cost & Planning',
    tags: [
      'app development cost',
      'MVP cost',
      'custom app development pricing',
      'hire a developer',
      'AI-powered development',
      'app development cost 2026',
    ],
    readingTime: '14 min read',
    content: appDevCostContent,
    relatedCaseStudies: ['reelzila', 'novamachine', 'magnet', 'heritage'],
  },
  {
    slug: 'custom-ai-tools-for-business',
    title: 'Custom AI Tools for Business: What They Actually Cost, How Long They Take, and When They Are Not Worth It',
    description:
      'Concrete cost estimates for 5 types of AI tools, real timelines, off-the-shelf vs custom comparison with break-even math, and an honest framework for when custom AI is a waste of money.',
    publishedAt: '2026-03-20',
    author: 'Novative',
    category: 'AI & Automation',
    tags: [
      'custom AI tools for business',
      'AI chatbot for business',
      'custom AI development cost',
      'AI automation for small business',
      'AI agent development',
      'build vs buy AI',
    ],
    readingTime: '12 min read',
    content: customAiContent,
    relatedCaseStudies: ['magnet', 'novamachine', 'reelzila'],
  },
  {
    slug: 'build-vs-buy-software',
    title: 'Build vs. Buy Software in 2026: Why 35% of Companies Are Ditching SaaS for Custom Tools',
    description:
      'Retool reports 35% of enterprises have replaced SaaS with custom builds. Real 5-year TCO comparison, the AI development cost factor, vendor lock-in quantified, and a 10-question scorecard to decide.',
    publishedAt: '2026-03-20',
    author: 'Novative',
    category: 'Strategy',
    tags: [
      'build vs buy software',
      'custom software vs SaaS',
      'SaaS vs custom development',
      'total cost of ownership software',
      'custom software development cost',
      'when to build custom software',
    ],
    readingTime: '13 min read',
    content: buildVsBuyContent,
    relatedCaseStudies: ['sonar', 'magnet', 'heritage'],
  },
  {
    slug: 'real-time-automation-competitive-advantage',
    title: 'Real-Time Automation: How Crawling + Conditional Alerts Give You a 19-Hour Head Start Over Competitors',
    description:
      'How real-time crawling with AI classification and conditional email notifications turns information speed into a competitive moat. Real stats from systems processing 4,300+ signals across 10 sources.',
    publishedAt: '2026-03-20',
    author: 'Novative',
    category: 'AI & Automation',
    tags: [
      'real-time automation',
      'web crawling',
      'lead generation automation',
      'competitive intelligence',
      'business automation',
      'AI-powered notifications',
      'market monitoring',
      'sales automation',
    ],
    readingTime: '11 min read',
    content: realTimeAutomationContent,
    relatedCaseStudies: ['magnet', 'sonar'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
