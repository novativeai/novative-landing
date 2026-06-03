export interface ServiceNavItem {
  name: string;
  href: string;
  description: string;
}

/**
 * Dedicated service landing pages. Shared by the navigation dropdown,
 * the footer, and the homepage services section so links stay in sync.
 */
export const serviceNavItems: ServiceNavItem[] = [
  {
    name: 'MVP Development',
    href: '/services/mvp-development',
    description: 'Ship a working MVP in 2-4 weeks',
  },
  {
    name: 'AI Chatbot',
    href: '/services/ai-chatbot',
    description: 'Custom chatbots that work 24/7',
  },
  {
    name: 'SaaS Development',
    href: '/services/saas-development',
    description: 'Launch-ready SaaS in 6-8 weeks',
  },
  {
    name: 'Business Automation',
    href: '/services/business-automation',
    description: 'Workflows that run while you sleep',
  },
];
