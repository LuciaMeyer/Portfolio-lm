import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '../client-components/SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { img } from '@/public/images';


const projects = [
  {
    name: "let's GO",
    description: 'E-Commerce que ofrece el servicio de alquiler de bicicletas, accesorios y packs de aventuras según calendario y stock disponible. Desarrollado con PERN stack',
    image: img.p1,
    github: 'https://github.com/LetTeam22/lets-GO',
    link: 'https://pf-let.vercel.app/',
  },
  {
    name: 'VideoGames',
    description: 'SPA de videojuegos que consume datos de una api externa e incluye filtros y ordenamientos acumulativos, búsquedas por nombre, creación y edición de videojuegos. Desarrollado con PERN stack',
    image: img.p2,
    github: 'https://github.com/LuciaMeyer/Videogames_app',
    link: 'https://cliente-videogames.onrender.com/',
  },
  {
    name: 'API GPT OpenAI',
    description:
      'Inclusión de las funcionalidades de API en un proyecto de e-Commerce para optimizar el dashboard del administrador, a través de ciertos prompt estratégicos.',
    image: img.p3,
    github: '',
    link: '',
  },
  {
    name: 'Portfolio',
    description:
      'Aplicación web con el objetivo de incorporar nuevas tecnologías como Next.js 13, TaildwindCC y Framer Motion ',
    image: img.p4,
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

      <div className='flex flex-col space-y-16 pb-20 mx-10 md:mx-60'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 align-center'>
                  <div className=' md:w-1/2'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70 transform transition-transform duration-500 hover:scale-x-95'
                      />
                    </Link>
                  </div>
                  <div className='md:w-1/2'>
                    <h1 className='text-2xl font-bold mb-6 md:mt-0 mt-8'>{project.name}</h1>
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
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};
