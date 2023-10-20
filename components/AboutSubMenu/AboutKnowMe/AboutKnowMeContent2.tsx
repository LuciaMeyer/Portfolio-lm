import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";
import { screenContext } from "@/context/screenContext";

export const AboutKnowMeContent2 = ({ handleShowDiv }: any) => {
  const isMobile = useContext(screenContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="space-y-6 md:mt-8 md:mr-7 md:w-1/2 "
    >
      <p className={`${isMobile && 'mt-6'}`}>
        Entrar en este sector me impulsó a estar en
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" constante proceso de aprendizaje. "}
        </span>
        Actualmente, estoy sumando conocimientos sobre
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" UX/UI"}
        </span>{" "}
        y explorando los nuevos paradigmas y evolución que trae la
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" Inteligencia Artificial."}
        </span>
      </p>

      <p>
        Podés conocer alguno de{' '}
        <Link
          to={"projects"}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className='cursor-pointer border-b-LM border-b-2 text-LM font-medium'
        >
          mis proyectos
        </Link>.
      </p>
      <p>
        Si querés saber cuáles son las
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" herramientas "}
        </span>
        que manejo,
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" mi recorrido "}
        </span>
        y qué es lo que
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" me motiva, "}
        </span>
        seguí explorando esta sección.
      </p>
      <p>
        Tenés dudas o te gustariía que trabajemos en equipo?{' '}
        <Link
          to={"contact"}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className='cursor-pointer border-b-LM border-b-2 text-LM font-medium'
        >
          escribime
        </Link>.
      </p>
      {!isMobile && (
        <div className="md:mt-6 mt-4 flex items-center justify-between">
          <button
            onClick={handleShowDiv}
            className="my-2 px-2 cursor-pointer text-black text-[.7rem] placeholder:tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200"
          >
            VOLVER
          </button>
          <button onClick={handleShowDiv}>
            <span className="text-sm dark:text-stone-400">2 / 2</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};
