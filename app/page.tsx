import { AboutSection } from '@/components/server-components/AboutSection'
import { HeroSection } from '@/components/client-components/HeroSection'
import { ProjectsSection } from '@/components/server-components/ProjectsSection'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
