'use client';
import { AboutSection } from '@/components/AboutSection';
import { Contact } from '@/components/Contact';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Resurces } from '@/components/Resurces';
import React, { useContext, useEffect } from 'react';
import { sectionContext } from '../context/sectionContext';

export default function Home() {

  const objetcContext = useContext(sectionContext);

  const { refHero, refAbout, refProjects, refResurces, refContact, useIsInViewport  } = objetcContext.sectionsRef;
  const setSection = objetcContext.setSection;


  const hero = useIsInViewport(refHero);
  const about = useIsInViewport(refAbout);
  const project = useIsInViewport(refProjects);
  const resurces = useIsInViewport(refResurces);
  const contact = useIsInViewport(refContact);

  !!hero && setSection('home')
  !!about && setSection('about')
  !!project && setSection('projects')
  !!resurces && setSection('resources')
  !!contact && setSection('contact')

  return (
    <main>
      <HeroSection refHero={refHero} />
      <AboutSection refAbout={refAbout} />
      <ProjectsSection refProjects={refProjects} />
      <Resurces refResurces={refResurces} />
      <Contact refContact={refContact} />
    </main>
  );
}
