import React, { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { motion } from "framer-motion";

export const SoftSkillsPart1 = ({ handleShowDiv }: any) => {
  const isMobile = useContext(screenContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="space-y-6 md:mt-8 md:mr-7 md:w-1/2 int:w-auto"
    >
      <p>
        Para describir
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" estas habilidades, "}
        </span>
        me gusta contar que soy una
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" deportista apasionada "}
        </span>
        desde los 8 años. 
      </p>
      <p>
        Tuve la oportunidad de jugar en
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" selecciones de voley "}
        </span>
        a nivel local, provincial y en varias ligas nacionales. Más adelante,
        durante 9 años, asumí el rol de
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" entrenadora, "}
        </span>
        lo que me permitió descubrir cuánto disfruto
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" enseñar y transmitir esta pasión."}
        </span>
      </p>
      <p>
        Agradezco todos esos
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" años de experiencia en el deporte, "}
        </span>
        ya que me
        formaron como... 
      </p>
      {!isMobile && (
        <div className="md:mt-6 mt-4 flex items-center justify-between">
          <button
            onClick={handleShowDiv}
            className="my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200"
          >
            SEGUIR LEYENDO
          </button>
          <button onClick={handleShowDiv}>
            <span className="text-sm dark:text-stone-400">1 / 2</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};
