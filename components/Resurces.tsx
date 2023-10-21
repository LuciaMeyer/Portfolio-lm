"use client";

import SlideUp from "./SlideUp";
import { Link } from 'react-scroll/modules';

interface ResurcesSectionProps {
  refResurces: React.RefObject<HTMLElement>;
};

export const Resurces:React.FC<ResurcesSectionProps> = ({ refResurces }) => {
  
  return (
    <section ref={refResurces} id="resources" className="flex-1 pt-6 md:pt-10 md:mb-[30rem] pb-80 mx-6 md:mx-auto">
      
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="md:hidden flex flex-row items-center my-auto md:pb-10 pb-8">
          <h2 className="text-center text-3xl font-bold text-LM">
            Recursos
          </h2>
        </div>
      </SlideUp>

      <SlideUp offset="-300px 0px -300px 0px">
        <div className="md:w-1/2 flex flex-col space-y-2 justify-center align-top pb-20 md:mx-auto">
          <p>EN PROCESO...</p>
          <br />
          <p className="leading-8 text-justify">
            Para esta sección estoy creando una colección de recursos,
            herramientas, sitios y datos que voy recopilando desde hace un
            tiempo. Son de gran ayuda para consultar, resolver problemas y
            aprender cosas nuevas. Si te interesa saber cuándo estará publicado
            <Link
            to='contact'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='cursor-pointer mx-2 border-solid border pb-2 pt-1.5 px-4 border-TX/30 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-300 dark:hover:bg-neutral-700 hover:bg-neutral-200 '
          >
            escribime
          </Link>
            y te mantengo al tanto.
          </p>
        </div>
      </SlideUp>
    </section>
  );
};
