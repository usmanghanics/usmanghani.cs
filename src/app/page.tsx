import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { AppsSection } from "@/components/sections/AppsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { StackSection } from "@/components/sections/StackSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <AppsSection />
        <FeaturedWork />
        <ProjectsSection />
        <StackSection />
        <CertificationsSection />
        <ExperienceSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
