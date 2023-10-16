import React from "react";
import { motion } from "framer-motion";
import { Languages } from "./Skills/Languages";
import { FrontEnd } from "./Skills/FrontEnd";
import { DesingLibraries } from "./Skills/DesingLibraries";

export const AboutCV = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-14
        flex flex-col mx-auto space-y-6"
      >
        <span className="flex justify-center text-sm">DESCARGAR CV</span>

      </motion.div>
    </>
  );
};
