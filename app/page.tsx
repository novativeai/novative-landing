import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { WorkPreviewSection } from '@/components/sections/work-preview';
import { ExpertiseSection } from '@/components/sections/expertise';
import { AdvantagesSection } from '@/components/sections/advantages';
import { MissionSection } from '@/components/sections/mission';
import { PricingSection } from '@/components/sections/pricing';
import { ProjectFormSection } from '@/components/sections/project-form';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to build a SaaS app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Novative, SaaS development starts at $5,000 for a growth product (4-8 weeks) and goes up to $30,000+ for enterprise-grade platforms with marketplace features, multi-tenant architecture, and advanced security. All prices are fixed quotes — no hourly billing surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an MVP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver working MVPs in 2-4 weeks. Not wireframes or mockups — real apps with real users, real data, and production-ready architecture. You see progress every week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build an AI chatbot for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom AI chatbots trained on your business knowledge that answer customer questions 24/7. We also build voice AI agents that qualify leads and book meetings. Our AI products integrate with Claude, OpenAI, and other LLMs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use for web app development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily use Next.js, React, TypeScript, and Tailwind CSS for frontend development. For backends, we use FastAPI (Python), Supabase, Firebase, and PostgreSQL. For AI integration, we work with Claude AI, OpenAI, fal.ai, and LangChain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build mobile apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build cross-platform iOS and Android apps from a single codebase. Our mobile apps are offline-capable, fast, and native-feeling — from restaurant POS systems to fintech apps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many products have you shipped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have shipped 22+ products to production, including AI video platforms (Reelzila, NovaMachine, NovaStudio), autonomous lead generation engines (Magnet, Sonar), and digital archive platforms (Heritage Vault). Visit our portfolio at novative.dev/work to see them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help me build a SaaS platform with subscription billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We build complete SaaS platforms with user accounts, Stripe subscription billing, admin dashboards, analytics, and scalable architecture. Launch-ready in 6-8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Novative and hiring a freelance developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Novative is a product studio, not a freelancer. We handle the entire product lifecycle: architecture, UI/UX design, development, AI integration, deployment, and ongoing support. You get a team with 22+ shipped products, fixed pricing, and no surprises.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\u003c'),
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkPreviewSection />
        <ExpertiseSection />
        <AdvantagesSection />
        <MissionSection />
        <PricingSection />
        <ProjectFormSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
