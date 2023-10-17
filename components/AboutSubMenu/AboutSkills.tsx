import { motion } from "framer-motion";
import { Languages } from "./Skills/Languages";
import { FrontEnd } from "./Skills/FrontEnd";
import { DesingLibraries } from "./Skills/DesingLibraries";

export const AboutSkills = () => {

  
  return (
    <>
      <div
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-14
        flex flex-col mx-auto space-y-6"
      >
        <div className="w-full py-4 px-4">
        {/* bg-neutral-200/60 dark:bg-neutral-700/60  */}
          <span className="flex justify-center text-sm">LENGUAJES</span>
          <Languages />
        </div>

        <div className="w-full py-4 px-4">
          <span className="flex justify-center text-sm">FRONTEND</span>
          <FrontEnd />
        </div>

        <div className="w-full py-4 px-4">
          <span className="flex justify-center text-sm">DESING LIBRARIES</span>
          <DesingLibraries />
        </div>
      </div>
    </>
  );
};
