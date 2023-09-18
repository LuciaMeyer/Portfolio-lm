import { AboutSection } from "@/components/AboutSection";
import { Contact } from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Resurces } from "@/components/Resurces";



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
