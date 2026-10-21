import Hero from "@/components/Hero";
import PersonaFeaturedSection from "@/components/PersonaFeaturedSection";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PersonaFeaturedSection />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
    </>
  );
}
