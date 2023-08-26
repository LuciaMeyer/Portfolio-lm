import React from 'react';
import { AboutImages } from '../client-components/AboutImages';

export const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:flex-row md:justify-around md:mx-40 mx-8'>
        <h1 className='text-center text-2xl md:pb-10'>
          Sobre Mi
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Soy{' '}
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {'Full Stack Developer'}
              </span>
              , con formación en
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {' Diseño Gráfico'}
              </span>
              , y experiencia en
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {' Marketing Digital.'}
              </span>{' '}
              con base en Rosario, ARG.
            </p>
            <br />
            <p>
              Mi mayor interés dentro del mundo IT es la posibilidad de crear
              frente a grandes necesidades, soluciones simples e innovadoras.
            </p>
            <br />
            <p>
              Me gustan los desafíos y el aprendizaje continuo.​ Encontré en la
              programación la conbinación perfecta entre varias de mis pasiones:
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {' creatividad'}
              </span>
              ,
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {' innovación'}
              </span>{' '}
              y
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                {' colaboración.'}
              </span>
            </p>
            <br />
            <p>
              Durante más de 10 años fui deportista profesional, técnica y
              coordinadora de equipos. En este recorrido descubrí mi vocación
              por enseñar y ayudar a las personas, además de formarme en la
              búsqueda de resultados, perseverancia y escucha activa.
            </p>
            <br />
            <p>
              Creo que es muy importante no dejar de buscar el{' '}
              <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                crecimiento profesional y personal
              </span>{' '}
              , es lo que me mantiene en movimiento. Además de la motivación de
              pensar qué nuevos caminos y oportunidades me traerá mi carrera.
            </p>
          </div>
          <AboutImages />
        </div>
      </div>
    </section>
  );
};

