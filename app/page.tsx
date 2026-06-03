import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { WorkPreviewSection } from '@/components/sections/work-preview';
import { ExpertiseSection } from '@/components/sections/expertise';
import { AdvantagesSection } from '@/components/sections/advantages';
import { MissionSection } from '@/components/sections/mission';
import { PricingSection } from '@/components/sections/pricing';
import { ProjectFormSection } from '@/components/sections/project-form';
import { FaqHomeSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { TrustBar } from '@/components/trust-bar';
import { LeadMagnet } from '@/components/lead-magnet';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WorkPreviewSection />
        <TestimonialsSection />
        <ExpertiseSection />
        <AdvantagesSection />
        <MissionSection />
        <PricingSection />
        <ProjectFormSection />
        <LeadMagnet className="bg-[var(--background-secondary)]" />
        <FaqHomeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
