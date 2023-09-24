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
  const [currentMenu, setCurrentMenu] = useState('');
  const [showSection, setShowSection] = useState(false);

  const handleClick = (section: string) => {
    setCurrentMenu(section);
    section === currentMenu
      ? setShowSection(!showSection)
      : setShowSection(true);
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
      className='flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto mx-10'
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
                className={`md:pr-2 md:pl-2 text-left ml-auto px-[0.5rem] md:px-0 md:font-light font-normal tracking-widest hover:scale-90 transform transition-transform duration-300
                ${
                  sm === currentMenu
                    ? 'text-LM dark:border-LM/30 border-LM border'
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
          {currentMenu === 'CONOCEME' || currentMenu === '' ? (
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
            onClick={() => handleClick('CONOCEME')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM50 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
            dark:bg-neutral-700'
          >
            CONOCEME
          </button>
          <div className='absolute top-5 right-6'>
            {showSection && currentMenu === 'CONOCEME' ? (
              <IoIosArrowUp size={22} />
            ) : (
              <IoIosArrowDown size={22} />
            )}
          </div>
        </div>
        {showSection && currentMenu === 'CONOCEME' && (
          <div className='block md:hidden my-4'>
            <AboutKnowMe />
          </div>
        )}

        <div className='relative'>
          <button
            onClick={() => handleClick('RECORRIDO')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM40 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-neutral-600'
          >
            RECORRIDO
          </button>
          <div className='absolute top-5 right-6'>
            {showSection && currentMenu === 'RECORRIDO' ? (
              <IoIosArrowUp size={22} />
            ) : (
              <IoIosArrowDown size={22} />
            )}
          </div>
          {showSection && currentMenu === 'RECORRIDO' && (
            <div className='block md:hidden my-4'>
              <AboutJourney />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('HABILIDADES')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM30 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS3'
          >
            HABILIDADES
          </button>
          <div className='absolute top-5 right-6'>
            {showSection && currentMenu === 'HABILIDADES' ? (
              <IoIosArrowUp size={22} />
            ) : (
              <IoIosArrowDown size={22} />
            )}
          </div>
          {showSection && currentMenu === 'HABILIDADES' && (
            <div className='block md:hidden my-4'>
              <AboutSkills />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('MOTIVACIÓN')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM20 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS2'
          >
            MOTIVACIÓN
          </button>
          <div className='absolute top-5 right-6'>
            {showSection && currentMenu === 'MOTIVACIÓN' ? (
              <IoIosArrowUp size={22} />
            ) : (
              <IoIosArrowDown size={22} />
            )}
          </div>
          {showSection && currentMenu === 'MOTIVACIÓN' && (
            <div className='block md:hidden my-4'>
              <AboutMotivation />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('CV')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM10 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS3'
          >
            CV
          </button>

          <div className='absolute top-5 right-6'>
            {showSection && currentMenu === 'CV' ? (
              <IoIosArrowUp size={22} />
            ) : (
              <IoIosArrowDown size={22} />
            )}
          </div>
          {showSection && currentMenu === 'CV' && (
            <div className='block md:hidden my-4'>
              <AboutCV />
            </div>
          )}
        </div>
      </SlideUp>
    </section>
  );
};
