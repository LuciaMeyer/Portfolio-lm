'use client';
import { useState } from 'react';
import Image from 'next/image';
import { img } from '../public/images';
import { AboutKnowMe } from './AboutSubMenu/AboutKnowMe';
import { AboutJourney } from './AboutSubMenu/AboutJourney';
import { AboutSkills } from './AboutSubMenu/AboutSkills';
import { AboutMotivation } from './AboutSubMenu/AboutMotivation';
import { AboutCV } from './AboutSubMenu/AboutCV';

import SlideUp from './SlideUp';

export const AboutSection = () => {
  const [currentMenu, setCurrentMenu] = useState('CONOCEME');

  const handleClick = (sm: string) => {
    setCurrentMenu(sm);
  };

  const handleArrowClick = () => {
    currentMenu === 'CONOCEME'
      ? setCurrentMenu('RECORRIDO')
      : currentMenu === 'RECORRIDO'
      ? setCurrentMenu('HABILIDADES')
      : currentMenu === 'HABILIDADES'
      ? setCurrentMenu('MOTIVACIÓN')
      : currentMenu === 'MOTIVACIÓN'
      ? setCurrentMenu('CV')
      : currentMenu === 'CV'
      ? setCurrentMenu('CONOCEME')
      : null;
      
  };

  const subMenu = ['CONOCEME', 'RECORRIDO', 'HABILIDADES', 'MOTIVACIÓN', 'CV'];

  return (
    <section
      id='about'
      className='flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto mx-10 '
    >
      <SlideUp offset='-300px 0px -300px 0px'>
        <h1 className='z-20 text-center text-2xl md:pb-10 pb-8 '>
          Sobre Mi
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>
      </SlideUp>

      {/* SUBMENÚ */}
      <SlideUp offset='-300px 0px -300px 0px'>
        <div className='flex justify-center mx-10'>
          {subMenu.map((sm, i) => (
            <button
              className='md:w-auto'
              key={i}
              onClick={() => handleClick(sm)}
            >
              <h1
                className={`md:pr-2 md:pl-2 text-left ml-auto md:text-base px-[0.5rem] md:px-0 md:font-light font-normal tracking-widest hover:scale-90 transform transition-transform duration-300
                ${
                  sm === currentMenu
                    ? 'text-LM dark:border-LM/30 border-LM border md:text-base text-base'
                    : 'text-[0.5rem] '
                } `}
              >
                {sm}
              </h1>
            </button>
          ))}
          {/* FLECHA */}
          <div className='md:block pl-2' onClick={handleArrowClick}>
            <Image
              className={`md:ml-2 ml-1 md:w-auto md:h-auto w-6 hover:scale-90 cursor-pointer -rotate-90 ${
                currentMenu === 'CV' && 'rotate-90'
              } transform transition-transform duration-300 opacity-100 hover:opacity-50 `}
              width='30'
              height='30'
              src={img.fl_am}
              alt='img'
              priority
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:w-2/3 justify-center mx-auto mt-10'>
          {currentMenu === 'CONOCEME' ? (
            <AboutKnowMe />
          ) : currentMenu === 'RECORRIDO' ? (
            <AboutJourney />
          ) : currentMenu === 'HABILIDADES' ? (
            <AboutSkills />
          ) : currentMenu === 'MOTIVACIÓN' ? (
            <AboutMotivation />
            ) : currentMenu === 'CV' ? (
              <AboutCV />
            ) : null}
        </div>
      </SlideUp>
    </section>
  );
};
