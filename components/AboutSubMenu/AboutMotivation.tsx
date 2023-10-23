'use client';
import Image from 'next/image';
import { img } from '@/public/images';
import { useState, useEffect } from 'react';

export const AboutMotivation = () => {
  const [showDiv, setShowDiv] = useState(false);

  // const images = [img.aux1, img.aux2, img.aux3];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      if (showDiv) setShowDiv(false);
    }, 50000);
  }, [showDiv]);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <div className='flex md:hidden justify-center'>
        <Image
          width={400}
          height={400}
          src={img.auxfondo2}
          alt='img'
          priority
        />
      </div>
      <div
        className='bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
         md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto '
      >
        <div className='space-y-6 md:mt-8 md:mr-7 int:mr-0 md:w-1/2 int:w-auto'>
          <p>falta texto</p>
        </div>
        <div className='md:flex hidden mt-8 ml-7 md:w-1/2'>
          <Image
            width={600}
            height={600}
            src={img.auxfondo2}
            alt='Img'
            priority
            className='object-cover'
          />
        </div>
      </div>
    </>
  );
};
