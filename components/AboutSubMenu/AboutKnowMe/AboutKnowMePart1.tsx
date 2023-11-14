import React, { useContext } from 'react';
import { screenContext } from '@/context/screenContext';
import { motion } from 'framer-motion';
import Link from 'next/link'

interface AboutKnowMePart1Props {
  handleShowDiv: () => void;
}

export const AboutKnowMePart1: React.FC<AboutKnowMePart1Props> = ({ handleShowDiv }) => {
  const isMobile = useContext(screenContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='space-y-6 md:mt-8 md:mr-7 int:mr-0 md:w-1/2 int:w-auto dark:text-stone-400/80'>
      <p >
        Soy{' '}
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {'Lu, '}
        </span>
        creativa e inquieta desde siempre. En mi camino exploré diferentes áreas
        como
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' arquitectura, diseño, comunicación y marketing.'}
        </span>{' '}
      </p>

      <p>
        En el último tiempo, descubrí mi pasión por la
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' Tecnología de la Información '}
        </span>
        y me gradué de como{' '}
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300 border-b-stone-700 dark:border-b-stone-400 border-b-[0.2px]'>
          <Link href='https://bit.ly/3s5TTBj' target='_blank'>
            {'Full Stack Developer.'}
          </Link>
        </span>
      </p>

      <p >
        Mi mayor interés dentro del
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' mundo IT '}
        </span>{' '}
        es la posibilidad de crear frente a grandes necesidades,
        <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' soluciones simples e innovadoras. '}
        </span>{' '}
      </p>
      {!isMobile && (
        <div className='md:mt-6 mt-4 flex items-center justify-between'>
          <button onClick={handleShowDiv}>
            <span className='text-sm dark:text-stone-400'>1 / 2</span>
          </button>
          <button
            onClick={handleShowDiv}
            className='my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
          >
            SEGUIR LEYENDO
          </button>
        </div>
      )}
    </motion.div>
  );
};
