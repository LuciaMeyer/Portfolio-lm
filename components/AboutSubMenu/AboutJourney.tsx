'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { screenContext } from '@/context/screenContext';

export const AboutJourney = () => {
  // const images = [img.aux1, img.aux2, img.aux3];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      if (showDiv) setShowDiv(false);
    }, 50000);
  }, [showDiv]);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
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
    <>
      <div
        className='flex md:hidden justify-center'

      >
        <Image width={400} height={400} src={img.auxfondo4} alt='img' priority />
      </div>
      <div
        className='bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
         md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto'
      >
        {!showDiv ? (
          <div className='space-y-6 md:mt-14 md:mr-7 md:w-1/2'>
            <p>
              Estudié
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' Arquitectura '}
              </span>
              y después de 5 años descubrí que lo que más me gustaba de la
              carrera era
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' proyectar y crear '}
              </span>
              a través de
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' herramientas digitales.'}
              </span>
            </p>

            <p>
              Me capacité en
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' diseño, comunicación, marketing y edición audiovisual. '}
              </span>
            </p>

            <p>
              Desarrollé éstas habilidades en varias empresas donde además
              aprendí a
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {
                  ' optimizar procesos, liderar proyectos, coordinar equipos y trabajar con metodologías ágiles...  '
                }{' '}
              </span>
              <br />
              <div className='md:mt-6 mt-4 flex items-center justify-between'>
              <button
                onClick={handleShowDiv}
                className='my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                {/* border-solid border border-TX/50 dark:border-stone-300/30  */}
                SEGUIR LEYENDO
              </button>
              <span className='text-sm dark:text-stone-400'>1 / 2</span>
            </div>
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='space-y-6 md:mt-14 md:mr-7 md:w-1/2'
          >
            <p>
              más adelante, me lancé como
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' freelance  '}
              </span>
              para acompañar a PyMEs y emprendedores en el proceso de
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' creación y difusión de su identidad visual y corporativa. '}
              </span>
            </p>
            <p>
              Por una persona inquieta, en búsqueda de desafíos y nuevos
              conocimientos, en 2022
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' me apasioné con el mundo IT.  '}
              </span>
              En este espacio encontré el
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {'  punto de convergencia '}
              </span>
              de todo lo que fui aprendiendo en mi recorrido.
            </p>
            <p>
              Hoy disfruto programando, diseñando, buscando nuevas soluciones y
              aprendiendo en equipo;
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {
                  ' ya que estoy convencida de que el conocimiento se construye colectivamente. '
                }
              </span>
              <br />
              <div className='md:mt-6 mt-4 flex items-center justify-between'>
              <button
                onClick={handleShowDiv}
                className='my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                {/* border-solid border border-TX/50 dark:border-stone-300/30  */}
                VOLVER
              </button>
              <span className='text-sm dark:text-stone-400'>2 / 2</span>
            </div>
            </p>
          </motion.div>
        )}
        <div className='md:flex hidden mt-14 ml-7 md:w-1/2 h-96'>
          <Image
            width={600}
            height={600}
            src={img.auxfondo4}
            alt='Img'
            priority
            className='object-cover'
          />
        </div>
      </div>
    </>
  );
};
