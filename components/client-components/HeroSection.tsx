'use client'
import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll/modules';
import { ParticlesComponents } from '../server-components/ParticlesComponents';

export const HeroSection = () => {
  return (
    <>
      <div className='-z-50 absolute h-96'>    
       <ParticlesComponents />
      </div>
    <section id='home' className='flex-1 pt-36 md:pt-44 pb-60 '>
      <div className='flex flex-col h-full md:flex-row md:justify-around md:mx-40 mx-10 md:items-center content-center'>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='md:mx-0  mx-auto'
        >
          <h1
            className='leading-snug tracking-wide md:text-3xl text-2xl md:mb-2 '

          >Lucía Meyer
          </h1>

          <motion.h1
            className='leading-snug tracking-wide font-bold md:text-4xl text-3xl text-LM'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: 'spring' }}

          >
            <Typewriter
              options={{ cursor: '|', delay:75 }}
              onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .typeString('Digital Design').pauseFor(600)
                .deleteAll(20)
                .typeString('Dev Frontend').pauseFor(600)
                .deleteChars(8)
                .typeString('Backend').pauseFor(600)
                .deleteChars(7)
                .typeString('Full Stack').pauseFor(600)
                .pauseFor(1000)
                .start()
              }}
            />
          </motion.h1>

          <hr className='w-12 h-px my-10 bg-stone-300  dark:bg-stone-400 border-0' />

          <p className='relative -z-10 pb-4'>
            Desarrollo aplicacones web y mobile, tengo  
            <br />
            formación en Diseño y Marketing Digital.
            <br />
          </p>
          <Link
            to='about'
            className='text-TX/50 dark:text-stone-300/60 text-xs border-solid border border-TX/40 dark:border-stone-300/30 px-2 py-1 hover:opacity-70 cursor-pointer'>
            SABER MÁS
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            width='300'
            height='300'  
            src={img.imglu}
            alt='img'
            priority
            className='transform transition-transform duration-1000 hover:scale-110 md:mx-0 mx-auto'
            />
        </motion.div>

      </div>
    </section>
    </>

    
  );
};
