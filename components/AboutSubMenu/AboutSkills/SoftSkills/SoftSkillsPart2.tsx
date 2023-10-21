import React, { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { motion } from "framer-motion";

export const SoftSkillsPart2 = ({ handleShowDiv }: any) => {
  const isMobile = useContext(screenContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="space-y-6 md:mt-8 md:mr-7 md:w-1/2 int:w-auto"
    >
      <p>
        una persona con
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" disciplina, escucha activa, empatía, capacidad de liderazgo, adaptabilidad y facilidad para trabajar en equipo."}
        </span>
      </p>
      <p>
        Estas
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {"  cualidades  "}
        </span>
        las apliqué en
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {"  distintos entornos laborales,  "}
        </span>
        me permitieron
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {"  coordinar equipos y proyectos, optimizar procesos "}
        </span>
        y continuar aplicando una mentalidad de
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {"  mejora continua."}
        </span>
      </p>
      <p>
        Cada experiencia, cada grupo de personas y cada espacio aportan siempre
        diferentes aprendizajes. Por eso siento que todavía tengo mucho por
        aprender.
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
