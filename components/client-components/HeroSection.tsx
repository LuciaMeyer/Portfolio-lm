'use client'
import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


export const HeroSection = () => {

  const particlesInit = async (main:any) => {
    await loadFull(main);
  };

  return (
    <section id='home' className='flex-1 pt-36 md:pt-44'>
      {/* <Particles
             init={particlesInit}
             options={{
              //  background: {
              //    color: {
              //      value: 'white',
              //    },
              //  },
               fpsLimit: 150,
               interactivity: {
                 events: {
                   onClick: {
                     enable: true,
                     mode: 'push',
                   },
                   onHover: {
                     enable: true,
                     mode: 'repulse',
                   },
                   resize: true,
                 },
                 modes: {
                   push: {
                     quantity: 4,
                   },
                   repulse: {
                     distance: 200,
                     duration: 0.4,
                   },
                 },
               },
               particles: {
                 color: {
                   value: '#f9b621',
                 },
                 links: {
                   color: '#f9b621',
                   distance: 150,
                   enable: true,
                   opacity: 0.3,
                   width: 1,
                 },
                 collisions: {
                   enable: true,
                 },
                 move: {
                   direction: 'none',
                   enable: true,
                   outModes: {
                     default: 'bounce',
                   },
                   random: false,
                   speed: 6,
                   straight: false,
                 },
                 number: {
                   density: {
                     enable: true,
                     area: 700,
                   },
                   value: 80,
                 },
                 opacity: {
                   value: 0.3,
                 },
                 shape: {
                   type: 'circle',
                 },
                 size: {
                   value: { min: 0.5, max: 3 },
                 },
               },
               detectRetina: true,
             }}
      /> */}
      <div className='flex flex-col h-full md:flex-row md:justify-around md:mx-60 mx-10 md:items-center pb-20 '>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.6, transition: { duration: 0.25 } }}
        >
          <h1
            className='leading-snug tracking-wide md:text-4xl text-2xl md:mb-2 '

          >Lucía Meyer
          </h1>

          <motion.h1
            className='leading-snug tracking-wide font-bold md:text-5xl text-3xl text-LM'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: 'spring' }}

          >
            <Typewriter
              options={{ cursor: '' }}
              onInit={(typewriter) => {
                typewriter.changeDelay(50).typeString('Full Stack Developer').start();
              }}
            />
          </motion.h1>

          <hr className='w-12 h-px my-6 bg-stone-300  dark:bg-stone-400 border-0' />

          <p className='relative -z-10 pb-9'>
            Frase slogan frase slogan frase slogan 
            <br />
            Frase slogan frase slogan frase slogan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image width='350' height='350' src={img.imglu} alt='img' priority className='transform transition-transform duration-1000 hover:scale-110'/>
        </motion.div>

      </div>
    </section>
  );
};
