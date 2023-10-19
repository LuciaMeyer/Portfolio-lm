import Image from "next/image";
import { img } from "../../../public/images";
import { motion } from "framer-motion";

export const FrontEnd = () => {
  return (
    <>
      <span className='mx-auto my-6 font-thin'>Front-End</span>
      <div className="flex flex-row justify-around md:justify-center md:space-x-16 items-end">
        <div className="flex flex-col relative w-12 justify-center">
          <Image width={200} height={200} src={img.react} alt="img" priority className='filter grayscale' />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="dark:text-TX text-stone-300 text-xs tracking-widest text-center ml-2 font-medium ">
                React
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            React
          </span>
        </div>

        {/* REDUX */}
        <div className="flex flex-col relative w-12  ">
          <Image width={200} height={200} src={img.redux} alt="img" priority className='filter grayscale' />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="dark:text-TX text-stone-300 text-xs tracking-widest text-center ml-2 font-medium ">
                Redux
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            Redux
          </span>
        </div>

        {/* NEXT */}
        <div className="flex flex-col relative w-12  items-end">
          <Image width={200} height={200} src={img.next} alt="img" priority className='filter grayscale' />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className="absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100"
          >
            <span className="md:block hidden absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black">
              <span className="block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%] "></span>
              <span className="flex justify-center mt-2 dark:text-TX text-stone-300 text-xs tracking-widest text-center font-medium ">
                NextJs{" "}
              </span>
            </span>
          </motion.div>
          <span className="flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium ">
            NextJs
          </span>
        </div>
      </div>
      <p className='mt-20 text-sm'>
        Los frameworks y librerías frontend son herramientas y recursos utilizados en el desarrollo de aplicaciones web y aplicaciones móviles para el lado del cliente, es decir, en el navegador web o en la interfaz de usuario de una aplicación móvil. Estas herramientas ayudan a los desarrolladores a crear interfaces de usuario interactivas, atractivas y funcionales.
      </p>
    </>
  );
};
