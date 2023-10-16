import Image from "next/image";
import { img } from "../../../public/images";
import { motion } from "framer-motion";

export const DesingLibraries = () => {
  return (
    <>
      <div className="flex flex-row justify-around md:justify-center md:space-x-16 items-end">
        {/* Tailwind */}
        <div className="flex flex-col relative w-12 mt-6 justify-center">
          <Image width={200} height={200} src={img.tail} alt="img" priority />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="dark:text-TX text-stone-300 text-xs tracking-widest text-center ml-2 font-medium ">
                Tailwind
              </span>
            </span>
          </motion.div>
        </div>

        {/* Material-UI */}
        <div className="flex flex-col relative w-12  mt-6">
          <Image width={200} height={200} src={img.mu} alt="img" priority />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="dark:text-TX text-stone-300 text-xs tracking-widest text-center ml-2 font-medium ">
                Material-UI
              </span>
            </span>
          </motion.div>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col relative w-12  mt-6 items-end">
          <Image width={200} height={200} src={img.boo} alt="img" priority />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-stone-300 text-xs tracking-widest text-center font-medium ">
                Bootstrap
              </span>
            </span>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row justify-around">
        <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
          Tailwind
        </span>
        <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
          Material-UI
        </span>
        <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
          Bootstrap
        </span>
      </div>

      <div className="flex flex-row justify-around md:justify-center md:space-x-16 items-end">
        {/* Less */}
        <div className="flex flex-col relative w-12  mt-6 items-end">
          <Image width={200} height={200} src={img.less} alt="img" priority />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-stone-300 text-xs tracking-widest text-center font-medium ">
                Less
              </span>
            </span>
          </motion.div>
        </div>

        {/* Sass */}
        <div className="flex flex-col relative w-12  mt-6 items-end">
          <Image width={200} height={200} src={img.sass} alt="img" priority />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-stone-300 text-xs tracking-widest text-center font-medium ">
                Sass
              </span>
            </span>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
          Less
        </span>
        <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
          Sass
        </span>
      </div>
    </>
  );
};
