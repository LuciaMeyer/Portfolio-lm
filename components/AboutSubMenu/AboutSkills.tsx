import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';


export const AboutSkills = () => {


  return (
    <>
      <div className="mt-0 text-justify md:text-justify md:w-2/3 md:mr-20">
        <div className=" md:h-[25rem] overflow-y-auto max-h-[25rem]">
        <div className='relative'>
  <div>
    <h4>Lenguajes</h4>
  </div>
  <div className='relative w-12 ml-6 mt-6'>
    <Image
      width='200'
      height='200'
      className=''
      src={img.js}
      alt='img'
      priority
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, transition: { duration: 1 } }}
      className='opacity-0 absolute -top-4 left-[-10px] w-20 h-7 dark:bg-white bg-neutral-700 rounded-full shadow-md shadow-black
    
    '>
      <span className='block w-3 h-3 dark:bg-white bg-neutral-700 transform rotate-45 absolute bottom-[-8px] left-[30%] translate-x-[-50%]  '></span>
      <span className='dark:text-TX text-stone-300 text-xs tracking-widest text-center ml-2 font-medium '>JavaScript</span>
    </motion.div>
  </div>
</div>


        </div>
      </div>
      <div className="flex justify-center">
        ESPACIO PARA IMAGEN
      </div>
    </>
  );
}
