'use client';
import { AboutSection, Contact, HeroSection, ProjectsSection, Resurces, ClosingMessage } from '@/components';
import React, { useContext } from 'react';
import { sectionContext } from '@/context/sectionContext';


export default function Home() {

  const objetcContext = useContext(sectionContext);

  const { refHero, refAbout, refProjects, refResurces, refContact, refEnd, useIsInViewport  } = objetcContext.sectionsRef;
  const setSection = objetcContext.setSection;


  const hero = useIsInViewport(refHero);
  const about = useIsInViewport(refAbout);
  const project = useIsInViewport(refProjects);
  const resurces = useIsInViewport(refResurces);
  const contact = useIsInViewport(refContact);
  const end = useIsInViewport(refEnd)

  !!hero && setSection('home')
  !!about && setSection('about')
  !!project && setSection('projects')
  !!resurces && setSection('resources')
  !!contact && setSection('contact')
  !!end && setSection('end')

  return (
    <main>
      <HeroSection refHero={refHero} />
      <AboutSection refAbout={refAbout} />
      <ProjectsSection refProjects={refProjects} />
      <Resurces refResurces={refResurces} />
      <Contact refContact={refContact} />
      <ClosingMessage refEnd={refEnd} />
    </main>
  );
}
