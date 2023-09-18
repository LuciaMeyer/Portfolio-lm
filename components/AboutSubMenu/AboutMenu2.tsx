'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';

export const AboutMenu2 = () => {
  const images = [img.auxfondo1, img.auxfondo2, img.auxfondo3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className='mt-auto text-justify md:text-justify'>
        <p>
          TEXTO
        </p>
      </div>
      <div className='md:hidden flex justify-center'>
        <Image
          width='350'
          height='350'
          src={images[currentImageIndex]}
          alt='img'
          priority
        />
      </div>
      <div className='-z-50 h-full w-1/2 md:absolute md:block hidden top-0 right-0 bg-right'>
        <Image
          src={images[currentImageIndex]}
          alt='Background Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </>
  )
}


