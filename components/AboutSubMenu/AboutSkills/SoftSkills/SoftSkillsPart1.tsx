import React, { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { motion } from "framer-motion";

interface SoftSkillsPart1Props {
  handleShowDiv: () => void;
}

export const SoftSkillsPart1: React.FC<SoftSkillsPart1Props> = ({
  handleShowDiv,
}) => {
  const isMobile = useContext(screenContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="space-y-6 md:mt-8 md:mr-7 int:mr-0 md:w-1/2 int:w-auto dark:text-stone-400/80"
    >
      <p>
        Para describir
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" estas habilidades, "}
        </span>
        me gusta contar que soy una
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" deportista apasionada "}
        </span>
        desde los 8 años.
      </p>
      <p>
        Tuve la oportunidad de jugar en
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" selecciones de voley "}
        </span>
        locales, provinciales y en varias ligas nacionales. Más adelante asumí
        el rol de
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" entrenadora "}
        </span>
        durante 9 años, lo que me permitió descubrir cuánto disfruto
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" enseñar y transmitir esta pasión."}
        </span>
      </p>
      <p>
        Todos esos
        <span className="font-semibold dark:font-light text-stone-700 dark:text-stone-300">
          {" años de experiencia en el deporte "}
        </span>
        me formaron como
        {!isMobile ? <span>...</span> : " "}
      </p>
      {!isMobile && (
        <div className="md:mt-6 mt-4 flex items-center justify-between">
          <button onClick={handleShowDiv}>
            <span className="text-sm dark:text-stone-400">1 / 2</span>
          </button>
          <button
            onClick={handleShowDiv}
            className="my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200"
          >
            SEGUIR LEYENDO
          </button>
        </div>
      )}
    </motion.div>
  );
};
