'use client';
import { useState } from 'react';
import Image from 'next/image';
import { img } from '../public/images';
import { AboutKnowMe } from './AboutSubMenu/AboutKnowMe';
import { AboutJourney } from './AboutSubMenu/AboutJourney';
import { AboutSkills } from './AboutSubMenu/AboutSkills';
import { AboutMotivation } from './AboutSubMenu/AboutMotivation';
import { AboutCV } from './AboutSubMenu/AboutCV';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import SlideUp from './SlideUp';

export const AboutSection = () => {
  const [currentMenu, setCurrentMenu] = useState('CONOCEME');
  const [showSection, setShowSection] = useState(false);

  const handleClick = (section: string) => {
    setCurrentMenu(section);
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

  const handleShowSection = (section: string) => {
    setShowSection(!showSection);
    setCurrentMenu(section);
  };

  const subMenu = ['CONOCEME', 'RECORRIDO', 'HABILIDADES', 'MOTIVACIÓN', 'CV'];

  return (
    <section
      id='about'
      className='flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto'
    >
      <SlideUp offset='-300px 0px -300px 0px'>
        <h1 className='z-20 text-center text-2xl md:pb-10 pb-8 '>
          Sobre Mi
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>
      </SlideUp>

      {/* SUBMENÚ WEB*/}
      <SlideUp offset='-300px 0px -300px 0px'>
        <div className='md:flex hidden justify-center mx-10'>
          {subMenu.map((sm, i) => (
            <button
              className='md:w-auto'
              key={i}
              onClick={() => handleClick(sm)}
            >
              <h4
                className={`md:pr-2 md:pl-2 text-left ml-auto md:text-base px-[0.5rem] md:px-0 md:font-light font-normal tracking-widest hover:scale-90 transform transition-transform duration-300
                ${
                  sm === currentMenu
                    ? 'text-LM dark:border-LM/30 border-LM border md:text-base text-base'
                    : 'text-[0.5rem] '
                } `}
              >
                {sm}
              </h4>
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

        {/* SECTION WEB */}
        <div className='md:flex hidden flex-col md:flex-row md:w-2/3 justify-center mx-auto mt-10'>
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

        {/* SUB MENU & SECTION MOBILE */}
        <div className='relative'>  
          <button
            onClick={() => handleShowSection('CONOCEME')}
            className='pl-10 py-3 flex flex-col md:hidden bg-LM w-full cursor-pointer tracking-widest font-medium text-sm'
          >
            CONOCEME
          </button>
          <div className='absolute top-4 right-6'>
            <IoIosArrowDown />
          </div>
        </div>
        {showSection && currentMenu === 'CONOCEME' && (
          <div className='block md:hidden my-4 mx-10'>
            <AboutKnowMe />
          </div>
        )}
        <button
          onClick={() => handleShowSection('RECORRIDO')}
          className='pl-10 py-3 flex flex-col md:hidden bg-LM80 w-full cursor-pointer tracking-widest font-medium text-sm'
        >
          RECORRIDO
        </button>
        {showSection && currentMenu === 'RECORRIDO' && (
          <div className='block md:hidden my-4 mx-10'>
            <AboutJourney />
          </div>
        )}
        <button
          onClick={() => handleShowSection('HABILIDADES')}
          className='pl-10 py-3 flex flex-col md:hidden bg-LM60 w-full cursor-pointer tracking-widest font-medium text-sm'
        >
          HABILIDADES
        </button>
        {showSection && currentMenu === 'HABILIDADES' && (
          <div className='block md:hidden my-4 mx-10'>
            <AboutSkills />
          </div>
        )}
        <button
          onClick={() => handleShowSection('MOTIVACIÓN')}
          className='pl-10 py-3 flex flex-col md:hidden bg-LM/40 w-full cursor-pointer tracking-widest font-medium text-sm'
        >
          MOTIVACIÓN
        </button>
        {showSection && currentMenu === 'MOTIVACIÓN' && (
          <div className='block md:hidden my-4 mx-10'>
            <AboutMotivation />
          </div>
        )}
        <button
          onClick={() => handleShowSection('CV')}
          className='pl-10 py-3 flex flex-col md:hidden bg-LM20 w-full cursor-pointer tracking-widest font-medium text-sm'
        >
          CV
        </button>
        {showSection && currentMenu === 'CV' && (
          <div className='block md:hidden my-4 mx-10'>
            <AboutCV />
          </div>
        )}
      </SlideUp>
    </section>
  );
};
