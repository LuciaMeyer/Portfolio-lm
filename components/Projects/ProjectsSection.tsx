'use client';
import { useContext } from 'react';
import { SlideUp, ProjectsContent } from '@/components';
import videgames from '@/public/videogames.gif';
import letsgo from '@/public/letsgo.gif';
import gpt from '@/public/gpt.gif';
import portfolio from '@/public/portfolio.gif';
import Atropos from 'atropos/react';
import { screenContext } from '@/context/screenContext';
import { Link as LinkR } from 'react-scroll';
import Link from 'next/link';

interface ProjectsSectionProps {
  refProjects: React.RefObject<HTMLElement>;
}

const projects = [
  {
    name: 'E-COMMERCE',
    image: letsgo,
    url: '/projects#lestgo'
  },
  {
    name: 'VIDEOGAMES',
    image: videgames,
    url:'/projects#videogames'
  },
  {
    name: 'API GPT OPEN AI',
    image: gpt,
    url:'/projects#gpt'
  },
  {
    name: 'PORTFOLIO',
    image: portfolio,
    url:'/projects#portfolio'
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  refProjects,
}) => {
  const isMobile = useContext(screenContext);


  return (
    <section
      ref={refProjects}
      id='projects'
      className='flex-1 pt-4 md:pt-10 md:mb-[30rem] pb-60 mx-6 md:mx-auto'
    >
      <SlideUp offset='-300px 0px -300px 0px'>
        <LinkR
          to='projects'
          smooth={true}
          offset={-100}
          duration={1000}
          className='md:hidden flex flex-row items-center my-auto md:pb-10 pb-9'
        >
          <h2 className='text-center text-3xl font-bold text-LM'>Proyectos</h2>
        </LinkR>
      </SlideUp>

      <div className='relative flex flex-col md:grid md:grid-cols-2 md:gap-4 pb-20 md:w-2/3 md:mx-auto'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                {!isMobile ? (
                  <Atropos className='flex flex-col md:space-x-12 align-center hover:scale-90 transform transition-transform duration-300 '>
                    <ProjectsContent project={project} />
                  </Atropos>
                ) : (
                  <div className='relative flex flex-col pb-8 align-center'>
                    <ProjectsContent project={project} />
                  </div>
                )}
              </SlideUp>
            </div>
          );
        })}
        <Link
          href='/projects'
          // target='_blank'
          className='flex items-center justify-center
            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300/90 text-[.7rem] tracking-wider 
            w-36 h-10 px-4 
            border-solid border border-TX/50 dark:border-stone-300/30
            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
        >
          VER TODOS
        </Link>
      </div>
    </section>
  );
};
