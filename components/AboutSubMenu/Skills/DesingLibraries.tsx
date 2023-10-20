import Image from 'next/image';
import { img } from '../../../public/images';
import { motion } from 'framer-motion';

export const DesingLibraries = () => {
  return (
    <>
      <span className='mx-auto my-6 md:mt-6 md:mb-10 tracking-wider font-medium dark:font-base dark:text-LM'>
        Librerías y Preprocesadores CSS
      </span>
      <div className='flex flex-row justify-around md:justify-center md:space-x-16 items-end'>
        {/* Tailwind */}
        <div className='flex flex-col relative w-12  justify-center hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.tail}
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
              <span className='flex justify-center  mt-[0.2rem] dark:text-TX text-black text-xs tracking-widest text-center font-medium '>
                Tailwind
              </span>
            </span>
          </motion.div>
        </div>

        {/* Material-UI */}
        <div className='flex flex-col relative w-12 hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.mu}
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
                Material UI
              </span>
            </span>
          </motion.div>
        </div>

        {/* Bootstrap */}
        <div className='flex flex-col relative w-12 items-end hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.boo}
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
                Bootstrap
              </span>
            </span>
          </motion.div>
        </div>
      </div>

      <div className='flex flex-row justify-around'>
        <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
          Tailwind
        </span>
        <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
          Material-UI
        </span>
        <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
          Bootstrap
        </span>
      </div>

      <div className='mt-6 flex flex-row justify-around md:justify-center md:space-x-16 items-end'>
        {/* Less */}
        <div className='flex flex-col relative w-12 items-end hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.less}
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
                Less
              </span>
            </span>
          </motion.div>
        </div>

        {/* Sass */}
        <div className='flex flex-col relative w-12 items-end hover:scale-110 transform transition-transform duration-300'>
          <Image
            width={200}
            height={200}
            src={img.sass}
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
                Sass
              </span>
            </span>
          </motion.div>
        </div>
      </div>
      <div className='flex flex-row justify-around'>
        <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
          Less
        </span>
        <span className='flex justify-center mt-2 md:hidden text-xs tracking-widest text-center font-medium '>
          Sass
        </span>
      </div>
      <p className='mt-10'>

      Los Frameworks de CSS proporcionan reglas y estilos predefinidos para crear diseños web coherentes. Los Preprocesadores CSS extienden CSS con variables y anidamiento, simplificando la escritura del código CSS. Ambas tecnologías son valiosas en la UI (interfaz de usuario)
      </p>
    </>
  );
};
