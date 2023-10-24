'use client';
import { AboutKnowMePart1, AboutKnowMePart2 } from '@/components';
import Image from 'next/image';
import { img } from '@/public/images';
import { useState, useContext } from 'react';
import { screenContext } from '@/context/screenContext';

export const AboutKnowMe = () => {
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  // const images = [img.aux1, img.aux2, img.aux3];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <div className='flex md:hidden int:flex justify-center'>
        <Image width={400} height={400} src={img.auxlu} alt='img' priority />
      </div>
      <div
        className='
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto'
      >
        {!isMobile && !showDiv ? (
          <AboutKnowMePart1 handleShowDiv={handleShowDiv} />
        ) : !isMobile && showDiv ? (
          <AboutKnowMePart2 handleShowDiv={handleShowDiv} />
        ) : isMobile ? (
          <>
            <AboutKnowMePart1 handleShowDiv={handleShowDiv} />
            <AboutKnowMePart2 handleShowDiv={handleShowDiv} />
          </>
        ) : (
          <></>
        )}
        <div className='md:flex int:hidden hidden mt-8 ml-7 md:w-1/2'>
          <div>
            <Image
              width={600}
              height={600}  
              src={img.aux1}
              alt='Img'
              priority
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
};
