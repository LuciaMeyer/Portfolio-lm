'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';

export const AboutJourney = () => {
  const images = [img.aux1, img.aux2, img.aux3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => {
      clearInterval(interval)
    };
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      if(showDiv) setShowDiv(false)
    },30000)
  },[showDiv]);

  const handleShowDiv = () => {
    setShowDiv(!showDiv)
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='bg-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20 md:text-base text-sm'
      >
        {!showDiv ? (
          <div className='md:h-[25rem] space-y-6'>
            <p className=''>
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
            
            <p className=''>
              Me capacité en
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' diseño, comunicación, marketing y edición audiovisual. '}
              </span>
            </p>
            
            <p className='pace-y-2'>
              Desarrollé éstas habilidades en varias empresas donde además
              aprendí a
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {
                  ' optimizar procesos, liderar proyectos, coordinar equipos y trabajar con metodologías ágiles...  '
                }{' '}
              </span>
              <br/>
              <button
                onClick={handleShowDiv}
                className='cursor-pointer tracking-wider md:mt-2 my-2 text-xs px-2 py-[5px] border-solid border border-TX/30 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200 '
              >
                seguir leyendo
              </button>
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='space-y-6'
          >
            <p className=''>
              ...Siguiendo por este camino, me lancé como
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' freelance  '}
              </span>
              para acompañar a PyMEs y emprendedores en el proceso de
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' creación y difusión de su identidad visual y corporativa. '}
              </span>
            </p>
            <br className='md:block hidden'/>
            <p className=''>
              En 2018, en mi búsqueda constante de desafíos y aprendizaje,
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {' me apasioné con el mundo IT.  '}
              </span>
              En este espacio encontré el
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {'  punto de convergencia '}
              </span>
              de todo lo aprendido en mi recorrido.
            </p>
            <br className='md:block hidden'/>
            <p className=''>
              Hoy disfruto programando, diseñando, buscando soluciones simples y
              creativas, y aprendiendo todos los días en equipo;
              <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
                {
                  ' ya que estoy convencida de que el conocimiento se construye colectivamente. '
                }
              </span>
              <br/>
              <button
                onClick={handleShowDiv}
                className='cursor-pointer md:mt-2 my-2 text-xs tracking-wider px-2 py-[5px] border-solid border border-TX/30 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200 '
              >
                volver al inicio
              </button>
            </p>
          </motion.div>
        )}
      </motion.div>

      <div className='flex justify-center'>
        <Image
          width='500'
          height='500'
          src={images[currentImageIndex]}
          alt='img'
          priority
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
    </>
  );
};
