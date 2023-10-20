import Image from 'next/image';
import { img } from '../../../public/images';
import { motion } from 'framer-motion';

export const FrontEnd = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

    >
      <span className='flex justify-center my-6 md:mt-6 md:mb-10 tracking-wider font-medium dark:font-base dark:text-LM'>Front-End</span>
      <div className='flex flex-row justify-around md:justify-center md:space-x-16 items-end'>
        <div className='flex flex-col relative w-12 justify-center hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.react}
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
                React
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            React
          </span>
        </div>

        {/* REDUX */}
        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.redux}
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
                Redux
              </span>
            </span>
          </motion.div>
          <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
            Redux
          </span>
        </div>

        {/* NEXT */}
        <div className='flex flex-col relative w-16 items-end hover:scale-110 transform transition-transform duration-300'>
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
            NextJs
          </span>
        </div>
      </div>
      <p className='mt-10'>
        Los Frameworks Front-End son herramientas y recursos utilizados en el
        desarrollo de aplicaciones web y móviles para el lado del cliente,
        permitiendo a los desarrolladores crear interfaces de usuario
        interactivas y funcionales.
      </p>
    </motion.div>
  );
};
