'use client';
import Image from 'next/image';
import { img } from '../../public/images';
import { Link } from 'react-scroll/modules';
import { useEffect, useState } from 'react';

interface IconsProps {
  section: string;
  setSection: Function;
}

export const Icons: React.FC<IconsProps> = ({ section, setSection }) => {
  const [endPage, setEndPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const threshold = 100;
      if (scrollY + windowHeight >= pageHeight - threshold) {
        console.log('final de la página');
        setEndPage(true);
      } else setEndPage(false)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (current: string) => {
    if (current === 'home') setSection('about');
    if (current === 'about') setSection('projects');
    if (current === 'projects') setSection('resources');
    if (current === 'resources') setSection('contact');
    if (current === 'contact') setSection('home');
  };

  return (
    <div className='z-50 fixed bottom-0 flex w-full justify-center
    md:top-40
    md:right-20
    md:justify-end
    bg-white dark:bg-BGD backdrop-blur-md md:backdrop-blur-none md:bg-transparent dark:md:bg-transparent'>
      <div className='md:h-screen flex flex-col'>
        <div className='md:w-6 w-40 mx-auto dark:opacity-80 md:block flex flex-row my-2 items-center'>
          <a
            href='https://www.linkedin.com/in/lucia-meyer-65633a143/'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              width='60'
              height='60'
              className='md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75'
              src={img.in}
              alt='img'
              priority
            />
          </a>
          <a
            href='https://github.com/LuciaMeyer'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              width='60'
              height='60'
              className='md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75'
              src={img.gh}
              alt='img'
              priority
            />
          </a>
          <a
            href='mailto:luciameyer1603@gmail.com'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              width='60'
              height='60'
              className='md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75'
              src={img.mail}
              alt='img'
              priority
            />
          </a>
          <a
            href='https://www.instagram.com/luciameyer_/'
            rel='noreferrer'
            target='_blank'
          >
            <Image
              width='60'
              height='60'
              className='md:mb-9 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75'
              src={img.ig}
              alt='img'
              priority
            />
          </a>
          <hr className="hidden md:block rotate-180 w-px h-40 mx-auto border-0 bg-zinc-400 dark:bg-zinc-300 mb-1"></hr>
        </div>
      </div>

      <Link
        to={
          section === 'home'
            ? 'about'
            : section === 'about'
            ? 'projects'
            : section === 'projects'
            ? 'resources'
            : section === 'resources'
            ? 'contact'
            : 'home'
        }
        smooth={true}
        duration={500}
        onClick={() => handleClick(section)}
        className='cursor-pointer'
      >
        <Image
          className={`w-10 fixed bottom-10 right-4 md:-right-2 md:bottom-40 
          opacity-40 dark:invert dark:opacity-80 transform transition-transform duration-300 hover:scale-75
          ${section === 'contact' && 'rotate-180'}
          ${!!endPage ? 'rotate-180' : 'rotate-0'}
          `}
          width='60'
          height='60'
          src={img.flecha}
          alt='img'
          priority
        />
      </Link>
    </div>
  );
};
