'use client';
import { AboutSection } from '@/components';
import { Contact } from '@/components';
import { HeroSection } from '@/components';
import { ProjectsSection } from '@/components';
import { Resurces } from '@/components';
import React, { useContext } from 'react';
import { sectionContext } from '@/context/sectionContext';

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
