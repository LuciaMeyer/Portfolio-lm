import Image from 'next/image';
import { img } from '../../../public/images';
import { motion } from 'framer-motion';

export const BackEnd = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <span className='flex justify-center my-6 md:mt-6 md:mb-10 tracking-wider font-medium dark:font-base dark:text-LM'>Back-End</span>
      <div className='flex flex-row justify-around md:justify-around items-center'>
        {/* JAVASCRIPT */}
        <div className='flex flex-col relative w-12 justify-center hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.node}
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
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                NodeJS
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            NodeJS
          </span>
        </div>

        {/* TYPESCRIPT */}
        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.ex}
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
                Express
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            Express
          </span>
        </div>

        {/* HTML */}
        <div className='flex flex-col relative w-16 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.next}
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
              <span className='block w-3 h-3 bg-LM transform rotate-45 absolute bottom-[-5px] left-[30%] translate-x-[-50%] '></span>
              <span className='flex justify-center mt-2 dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                NextJS
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            NextJS
          </span>
        </div>

        {/* CSS */}
        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.dk}
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
              <span className='flex justify-center mt-[0.3rem] dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                Docker
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            Docker
          </span>
        </div>
      </div>
      <p className='mt-10'>
        Estas tecnologías se utilizan para gestionar y controlar el
        funcionamiento de un sistema o aplicación de software desde el lado del
        servidor. Son fundamentales la gestión de datos y la comunicación entre
        el Front-End y otros servicios externos. Estas tecnologías son
        esenciales para crear aplicaciones robustas y funcionales.
      </p>
    </motion.div>
  );
};
