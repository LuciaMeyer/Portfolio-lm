'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';
import { motion } from 'framer-motion';

export const AboutKnowMe = () => {
  const images = [img.aux1, img.aux2, img.aux3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='bg-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20 md:text-base text-sm'
      >
        <div className='md:h-[25rem] space-y-6'>
          <p className=''>
            Soy{' '}
            <span className=' font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {'Full Stack Developer'}
            </span>
            , con formación en
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' Diseño Gráfico '}
            </span>
             y experiencia en
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' Marketing Digital.'}
            </span>{' '}
            Con base en Rosario, Argentina.
          </p>
          <p className=''>
            Mi mayor interés dentro del
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' mundo IT '}
            </span>{' '}
            es la posibilidad de crear frente a grandes necesidades,
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' soluciones simples e innovadoras. '}
            </span>{' '}
          </p>
          <p className=''>
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' Encuentro en la programación '}
            </span>
            la combinación perfecta entre varias de mis pasiones:
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' creatividad'}
            </span>
            ,
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' innovación'}
            </span>{' '}
            y
            <span className='font-semibold dark:font-light text-stone-700 dark:text-LM'>
              {' colaboración.'}
            </span>
          </p>
          <br />
        </div>
      </motion.div>
      <div className='flex justify-center'>
        <Image
          width='500'
          height='500'
          // src={images[currentImageIndex]}
          src={img.auxlu}
          alt='img'
          priority
          // style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          className='border-2 border-solid'
        />
      </div>
    </>
  );
};
