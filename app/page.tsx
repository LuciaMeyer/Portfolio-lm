import { AboutSection } from "@/components/server-components/AboutSection";
import { Contact } from "@/components/server-components/Contact";
import { HeroSection } from "@/components/server-components/HeroSection";
import { ProjectsSection } from "@/components/server-components/ProjectsSection";
import { Resurces } from "@/components/server-components/Resurces";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Resurces/>
      <Contact/>
    </main>
  );
}
