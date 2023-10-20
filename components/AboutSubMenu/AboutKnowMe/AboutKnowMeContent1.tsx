import React, { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { motion } from "framer-motion";


export const AboutKnowMeContent1 = ({ handleShowDiv }: any) => {
  const isMobile = useContext(screenContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}    
      className="space-y-6 md:mt-8 md:mr-7 md:w-1/2 int:w-auto">
      <p className="">
        Hola! Soy{" "}
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {"Lu, "}
        </span>
        creativa e inquieta desde siempre. En mi camino exploré diferentes áreas
        como
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" arquitectura, diseño, comunicación y marketing."}
        </span>{" "}
      </p>

      <p>
        En el último tiempo, descubrí mi pasión por la
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" Tecnología de la Información "}
        </span>
        y me gradué de como
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" Full Stack Developer."}
        </span>
      </p>

      <p className="">
        Mi mayor interés dentro del
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" mundo IT "}
        </span>{" "}
        es la posibilidad de crear frente a grandes necesidades,
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" soluciones simples e innovadoras. "}
        </span>{" "}
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
