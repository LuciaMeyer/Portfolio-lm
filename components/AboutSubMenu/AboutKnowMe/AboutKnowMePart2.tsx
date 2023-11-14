import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkR} from 'react-scroll/modules';
import { screenContext } from '@/context/screenContext';
import Link from 'next/link'


interface AboutKnowMePart2Props {
  handleShowDiv: () => void;
}

export const AboutKnowMePart2:React.FC<AboutKnowMePart2Props> = ({ handleShowDiv }) => {
  const isMobile = useContext(screenContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='space-y-6 md:mt-8 md:mr-7 int:mr-0 md:w-1/2 int:w-auto dark:text-stone-400/80'
    >
      <p> 
        Podés conocer alguno de{' '}
        <LinkR
          to={'projects'}
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className='cursor-pointer border-b-stone-700 dark:border-b-stone-400 border-b-[0.2px] font-semibold dark:font-light text-stone-700 dark:text-stone-300'
        >
          mis proyectos
        </LinkR>.
      </p>
      <p>
        Si querés saber cuáles son las herramientas
        {/* <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' herramientas '}
        </span> */}
        que manejo, mi recorrido
        {/* <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' mi recorrido '}
        </span> */}
        y qué es lo que me motiva,
        {/* <span className='font-semibold dark:font-light text-stone-700 dark:text-stone-300'>
          {' me motiva, '}
        </span> */}
        seguí explorando esta sección.
      </p>
      <p>
        Tenés dudas o te gustaría que trabajemos en equipo?{' '}
        <LinkR
          to={'contact'}
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className='cursor-pointer border-b-stone-700 dark:border-b-stone-400 border-b-[0.2px] font-semibold dark:font-light text-stone-700 dark:text-stone-300'
        >
          escribime
        </LinkR>.
      </p>
      {!isMobile && (
        <div className='md:mt-6 mt-4 flex items-center justify-between'>
          <button onClick={handleShowDiv}>
            <span className='text-sm dark:text-stone-400'>2 / 2</span>
          </button>
          <button
            onClick={handleShowDiv}
            className='my-2 px-2 cursor-pointer text-black text-[.7rem] placeholder:tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
          >
            VOLVER
          </button>
        </div>
      )}
    </motion.div>
  );
};
