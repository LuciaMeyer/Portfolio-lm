import { AboutSection } from "@/components/client-components/AboutSection";
import { Contact } from "@/components/client-components/Contact";
import { HeroSection } from "@/components/client-components/HeroSection";
import { ProjectsSection } from "@/components/server-components/ProjectsSection";
import { Resurces } from "@/components/server-components/Resurces";
// import { Separator1 } from "@/components/server-components/Separator1";



export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Separator1/> */}
      <AboutSection />
      {/* <Separator1/> */}
      <ProjectsSection />
      {/* <Separator1/> */}
      <Resurces/>
      {/* <Separator1/> */}
      <Contact/>
      {/* <Separator1/> */}
    </main>
  );
}
