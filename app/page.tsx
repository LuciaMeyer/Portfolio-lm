import { AboutSection } from "@/components/client-components/AboutSection";
import { Contact } from "@/components/client-components/Contact";
import { HeroSection } from "@/components/client-components/HeroSection";
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
