import Image from "next/image";
import { img } from "../../../../public/images";
import { motion } from "framer-motion";

export const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <span className="flex justify-center my-6 md:mt-6 md:mb-10 tracking-wider font-medium dark:font-base dark:text-LM">
        Otras Herramientas
      </span>
      <div className="flex flex-row justify-around md:justify-center md:space-x-16 items-end">
        <div className="flex flex-col relative w-12 justify-center hover:scale-110 transform transition-transform duration-300">
          <Image
            width={200}
            height={200}
            src={img.vs}
            alt="img"
            priority
            className="opacity-50 dark:invert-0 invert"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium ">
                Visual
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            Visual
          </span>
        </div>

        <div className="flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300">
          <Image
            width={200}
            height={200}
            src={img.psm}
            alt="img"
            priority
            className="opacity-50 dark:invert-0 invert"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium ">
                Postman
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            Postman
          </span>
        </div>

        <div className="flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300">
          <Image
            width={200}
            height={200}
            src={img.im}
            alt="img"
            priority
            className="opacity-50 dark:invert-0 invert"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100"
          >
            <span className="md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium ">
                Insomnia
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            Insomnia
          </span>
        </div>
      </div>
      <p className="mt-10">
        Visual Studio Code es un editor de código fuente altamente personalizable y
        compatible con una amplia variedad de lenguajes de programación. Postman e Insomnia son dos herramientas, también conocidas como clientes REST, con características diferentes que permiten y facilitan la interacción y el diseño de API basadas en HTTP.
      </p>
    </motion.div>
  );
};
