import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { Machines } from '@/components/sections/Machines';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <div className="gold-separator" />
      <AboutPreview />
      <Machines />
      <div className="gold-separator" />
      <Services />
      <WhyUs />
      <PartnersSection />
      <div className="gold-separator" />
      <ContactCTA />
    </>
  );
}