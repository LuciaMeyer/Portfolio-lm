"use client";

import SlideUp from "./SlideUp";
import { Link } from 'react-scroll/modules';

export const Resurces = () => {
  return (
    <section id="resources" className="flex-1 pt-6 md:pt-10 md:pb-60 pb-28">
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="text-center text-2xl md:pb-16 pb-8">
          Recursos Dev
          <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
        </h1>
      </SlideUp>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="ml-10 mr-10 md:mx-auto md:w-1/2 flex flex-col space-y-2 justify-center align-top pb-20">
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
            className='cursor-pointer mx-2 border-solid border pb-2 pt-1.5 px-4 border-TX/30 dark:border-stone-300/30 transition duration-200 ease hover:text-LM '
          >
            escribime
          </Link>
            <button className="cursor-pointer mx-2 border-solid border px-4 border-TX/30 dark:border-stone-300/30 transition duration-200 ease hover:text-LM ">
              escribime
            </button>
            y te mantengo al tanto.
          </p>
        </div>
      </SlideUp>
    </section>
  );
};
