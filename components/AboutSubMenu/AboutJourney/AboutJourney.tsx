'use client';
import { AboutJourneyPart1, AboutJourneyPart2 } from '@/components';
import { useContext, useState } from 'react';
import Image from 'next/image';
import { img } from '@/public/images';
import { screenContext } from '@/context/screenContext';

export const AboutJourney = () => {
  // const images = [img.aux1, img.aux2, img.aux3];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  const show = {
    transition: { duration: 1 },
    opacity: 1,
  };

  const hide = {
    transition: { duration: 1 },
    opacity: 0,
  };

  return (
    <>
      <div className='flex int:flex md:hidden justify-center'>
        <Image
          width={400}
          height={400}
          src={img.auxfondo4}
          alt='img'
          priority
        />
      </div>
      <div
        className='bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
         md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto'
      >
        {!isMobile && !showDiv ? (
          <AboutJourneyPart1 handleShowDiv={handleShowDiv} />
        ) : !isMobile && showDiv ? (
          <AboutJourneyPart2 handleShowDiv={handleShowDiv} />
        ) : isMobile ? (
          <>
            <AboutJourneyPart1 handleShowDiv={handleShowDiv} />
            <AboutJourneyPart2 handleShowDiv={handleShowDiv} />
          </>
        ) : (
          <></>
        )}
        <div className='md:flex int:hidden hidden mt-8 ml-7 md:w-1/2'>
          <Image
            width={600}
            height={600}
            src={img.auxfondo4}
            alt='Img'
            priority
            className='object-cover'
          />
        </div>
      </div>
    </>
  );
};
