import { HeroSection } from "@/components/sections/hero-section";
import { OurServicesSection } from "@/components/sections/our-services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <OurServicesSection />
      <PortfolioSection />
      {/* <ContactSection /> */}
    </>
  );
}
