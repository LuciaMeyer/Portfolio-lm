import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
// import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
// import { img } from '@/public/images';
import videgames from '@/public/videogames.gif'
import letsgo from '@/public/letsgo.gif'
import gpt from '@/public/gpt.gif'
import portfolio from '@/public/portfolio.gif'




const projects = [
  {
    name: "E-COMMERCE",
    description: 'E-Commerce que ofrece el servicio de alquiler de bicicletas, accesorios y packs de aventuras según calendario y stock disponible. Desarrollado con PERN stack',
    image: letsgo,
    github: 'https://github.com/LetTeam22/lets-GO',
    link: 'https://pf-let.vercel.app/',
  },
  {
    name: 'VIDEOGAMES',
    description: 'SPA de videojuegos que consume datos de una api externa e incluye filtros y ordenamientos acumulativos, búsquedas por nombre, creación y edición de videojuegos. Desarrollado con PERN stack',
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

export const ProjectsSection = () => {


  return (
    <section id='projects' className='flex-1 pt-6 md:pt-20 pb-20'>
      <div className='md:pb-10 pb-8'>
        <h1 className='text-center text-2xl'>
          Proyectos
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 pb-20 mx-10 md:mx-auto md:w-2/3'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:space-x-12 align-center shadow-2xl'>
                  <div className='relative'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='shadow-xl hover:opacity-70 transform transition-transform duration-500 hover:scale-x-95'
                      />
                    </Link>
                    <h1
                      style={{ 'letterSpacing': '0.3em' }}
                      className='text-white text-lg font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>{project.name}</h1>
                  </div>

                  {/* <div className='md:w-1/2'>
              <span className='leading-7'>
                {project.description}...
              </span>
              <span className='ml-2 font-bold dark:font-normal dark:text-LM'>
                saber más
              </span>
              <div className='flex flex-row align-bottom space-x-4 mt-4'>
                <Link href={project.github} target='_blank'>
                  <BsGithub
                    size={25}
                    className='text-TX/60 dark:text-stone-300/60 hover:-translate-y-1 dark:hover:text-LM hover:text-LM transition-transform cursor-pointer'
                  />
                </Link>
                <Link href={project.link} target='_blank'>
                  <BsArrowUpRightSquare
                    size={25}
                    className='text-TX/60 dark:text-stone-300/60 hover:-translate-y-1 dark:hover:text-LM hover:text-LM transition-transform cursor-pointer'
                  />
                </Link>
              </div>
            </div> */}
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>

    </section>
  );
};
