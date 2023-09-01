import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '../client-components/SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { img } from '@/public/images';

const projects = [
  {
    name: "let's GO",
    description:
      'Aplicación web eCommerce.',
    features: 'autenticación, pasarela de pagos, notificación, mailing, reviews, perfil de usuario y administrador, filtros y ordenamientos combinados, persistencia de datos, Chatbots.',
    tecnologías: 'Javascript, React, Redux, NodeJS, Express, PostgreSQL, Sequelize, Scrum, Git-GitHub',
    image: img.let,
    github: 'https://github.com/LetTeam22/lets-GO',
    link: 'https://pf-let.vercel.app/',
  },
  {
    name: 'PlatoIO',
    description: 'PlatoIO is a to do list app that built using the PERN stack.',
    image: '/platoio.png',
    github: 'https://github.com/hqasmei/platoio',
    link: 'https://platoio.com/register',
  },
  {
    name: 'Kator Family Photos',
    description:
      'Kator Family Photos is a photos and video digitization service in the LA area.',
    image: '/familyphotos.png',
    github: 'https://github.com/hqasmei/katorfamilyphotos',
    link: 'https://katorfamilyphotos.com/',
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
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='md:w-1/2'>
                    <h1 className='text-3xl font-bold mb-6'>{project.name}</h1>
                    <span className='font-semibold text-xl dark:font-normal text-stone-700 dark:text-LM'>
                      {project.description}
                    </span>
                    <br />
                    <span className='font-semibold text-xl dark:font-normal text-stone-700 dark:text-LM md:pr-2 pr-2'>
                      Features:
                    </span>
                    <span className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.features}
                    </span>
                    <br />
                    <span className='font-semibold text-xl dark:font-normal text-stone-700 dark:text-LM md:pr-2 pr-2'>
                      Tecnologías:
                    </span>
                    <span className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.tecnologías}
                    </span>
                    <div className='flex flex-row align-bottom space-x-4 md:mt-2'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
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
