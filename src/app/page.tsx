import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
