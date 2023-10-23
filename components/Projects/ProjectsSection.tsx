'use client';
import { useState, useContext } from 'react';
import { SlideUp } from '@/components';
import videgames from '@/public/videogames.gif';
import letsgo from '@/public/letsgo.gif';
import gpt from '@/public/gpt.gif';
import portfolio from '@/public/portfolio.gif';
import Atropos from 'atropos/react';
import { motion } from 'framer-motion';
import { screenContext } from '@/context/screenContext';
import { ProjectsContent } from '@/components';
import { Link } from 'react-scroll';

interface ProjectsSectionProps {
  refProjects: React.RefObject<HTMLElement>;
}

const projects = [
  {
    name: 'E-COMMERCE',
    description:
      'E-Commerce que ofrece el servicio de alquiler de bicicletas, accesorios y packs de aventuras según calendario y stock disponible. Desarrollado con PERN stack',
    image: letsgo,
    github: 'https://github.com/LetTeam22/lets-GO',
    link: 'https://pf-let.vercel.app/',
  },
  {
    name: 'VIDEOGAMES',
    description:
      'SPA de videojuegos que consume datos de una api externa e incluye filtros y ordenamientos acumulativos, búsquedas por nombre, creación y edición de videojuegos. Desarrollado con PERN stack',
    image: videgames,
    github: 'https://github.com/LuciaMeyer/Videogames_app',
    link: 'https://cliente-videogames.onrender.com/',
  },
  {
    name: 'API GPT OPEN AI',
    description:
      'Inclusión de las funcionalidades de API en un proyecto de e-Commerce para optimizar el dashboard del administrador, a través de ciertos prompt estratégicos.',
    image: gpt,
    github: '',
    link: '',
  },
  {
    name: 'PORTFOLIO',
    description:
      'Aplicación web con el objetivo de incorporar nuevas tecnologías como Next.js 13, TaildwindCC y Framer Motion ',
    image: portfolio,
    github: '',
    link: '',
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  refProjects,
}) => {
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  const handleShowDiv = () => {
    setShowDiv(true);
    setTimeout(() => {
      setShowDiv(false);
    }, 10000);
  };

  const show = {
    transition: { duration: 1 },
    opacity: 1,
  };

  const hide = {
    transition: { duration: 1 },
    opacity: 0,
  };

  return (
    <section
      ref={refProjects}
      id='projects'
      className='flex-1 pt-4 md:pt-10 md:mb-[30rem] pb-60 mx-6 md:mx-auto'
    >
      <SlideUp offset='-300px 0px -300px 0px'>
        <Link
          to='projects'
          smooth={true}
          offset={-100}
          duration={1000}
          className='md:hidden flex flex-row items-center my-auto md:pb-10 pb-9'
        >
          <h2 className='text-center text-3xl font-bold text-LM'>Proyectos</h2>
        </Link>
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
        <div className='relative flex flex-col'>
          <button
            onClick={handleShowDiv}
            className='cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300/90 text-[.7rem] tracking-wider 
            w-36 h-10 px-4 
            border-solid border border-TX/50 dark:border-stone-300/30
            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
          >
            MÁS PROYECTOS
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={showDiv ? show : hide}
            className='absolute top-16'
          >
            <h4 className='mb-4'>En construcción...</h4>
            <span>
              Estoy trabajando en la presentación de varios proyectos,
              incluyendo los de diseño. Volvé dentro de poco para verlos!
              &#128522;{' '}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
