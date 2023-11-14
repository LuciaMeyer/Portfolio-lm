import Image from 'next/image';
import { img } from '@/public/images';
import { motion } from 'framer-motion';

export const Languages = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <span className='flex justify-center mb-6 mt-20 tracking-wider font-medium dark:font-base text-LM'>
        Lenguajes de Programación
      </span>

      <div className='flex flex-row justify-around md:justify-around items-center'>
        <div className='flex flex-col relative w-12 justify-center hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.js}
            alt='img'
            priority
            className='opacity-50 dark:invert-0 invert'
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className='absolute border border-transparent rounded-full w-14 h-14'
          >
            <span className='md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black'>
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                JavaScript
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            JavaScipt
          </span>
        </div>

        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.ts}
            alt='img'
            priority
            className='opacity-50 dark:invert-0 invert'
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className='absolute z-10 border border-transparent rounded-full w-14 h-14'
          >
            <span className='md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black'>
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                TypeScript
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            TypeScript
          </span>
        </div>

        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.html}
            alt='img'
            priority
            className='opacity-50 dark:invert-0 invert'
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className='absolute z-10 border border-transparent rounded-full w-14 h-14 opacity-0 hover:opacity-100'
          >
            <span className='md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black'>
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5.5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                HTML
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            HTML
          </span>
        </div>

        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.css}
            alt='img'
            priority
            className='opacity-50 dark:invert-0 invert'
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 1 } }}
            className='absolute z-10 border border-transparent rounded-full w-14 h-14'
          >
            <span className='md:block hidden absolute -top-7 left-[-10px] w-20 h-7 bg-LM rounded-full shadow-md shadow-black'>
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                CSS
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            CSS
          </span>
        </div>
      </div>
      <p className='mt-20 dark:text-stone-400/80'>
        Un Lenguaje de Programación es una herramienta formal y estructurada que
        permite escribir conjuntos de instrucciones,
        denominados algoritmos, para controlar el comportamiento de un sistema
        informático y realizar tareas específicas.
      </p>
    </motion.div>
  );
};
