import React, { useContext } from 'react'
import { screenContext } from '@/context/screenContext';
import { motion } from "framer-motion";

interface AboutJourneyPart2Props {
  handleShowDiv: () => void;
}


export const AboutJourneyPart2: React.FC<AboutJourneyPart2Props> = ({ handleShowDiv }) => {
  const isMobile = useContext(screenContext);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="space-y-6 md:mt-8 md:mr-7 int:mr-0 md:w-1/2 int:w-auto dark:text-stone-400/80"
  >
    <p className={`${isMobile && 'mt-6'}`}>
      Más adelante, como
      <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
        {" freelance,  "}
      </span>
      comencé a acompañar a PyMEs y emprendedores en el proceso de
      <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
        {" creación y difusión de su identidad visual y corporativa. "}
      </span>
    </p>
    <p>
      A fines del 2021 me apasioné con el mundo de la 
      <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
        {" Tecnologías de la Información,  "}
      </span>
      donde encontré el
      <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
        {"  punto de convergencia "}
      </span>
      de todo lo que fui aprendiendo en mi recorrido.
    </p>
      <button className="mt-4 py-1 px-4 cursor-pointer text-black text-[.7rem] tracking-wider border-solid border border-TX/50 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-300
      hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
      >
        DESCARGAR CV
      </button>
      {!isMobile && (
        <>  
          <br />
          <div className="md:mt-6 mt-4 flex items-center justify-between">
            <button onClick={handleShowDiv}>
              <span className="text-sm dark:text-stone-400">2 / 2</span>
            </button>
            <button
              onClick={handleShowDiv}
              className="my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200"
            >
              VOLVER
            </button>
          </div>
        </>
      )}
  </motion.div>
  )
}
