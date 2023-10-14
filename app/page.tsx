'use client';
import { AboutSection } from '@/components/AboutSection';
import { Contact } from '@/components/Contact';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Resurces } from '@/components/Resurces';
import React, { useContext } from 'react';
import { sectionContext } from '../context/sectionContext';

export default function Home() {
  const sections = useContext(sectionContext);
  const { refHero, refAbout, refProjects, refResurces, refContact, useIsInViewport  } = sections;

  const hero = useIsInViewport(refHero);
  const about = useIsInViewport(refAbout);
  const project = useIsInViewport(refProjects);
  const resurces = useIsInViewport(refResurces);
  const contact = useIsInViewport(refContact);

  return (
    <main>
      <HeroSection refHero={refHero} hero={hero ? 'home' : ''} />
      <AboutSection refAbout={refAbout} about={about ? 'about' : ''} />
      <ProjectsSection refProjects={refProjects} project={project ? 'project' : ''} />
      <Resurces refResurces={refResurces} resurces={resurces ? 'resurces' : ''} />
      <Contact refContact={refContact} contact={contact ? 'contact' : ''} />
    </main>
  );
}
