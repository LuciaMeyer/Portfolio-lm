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
  const [currentMenuWeb, setcurrentWeb] = useState('CONOCEME');
  const [currentMenuMobile, setcurrentMenuMobile] = useState('');
  const [showSection, setShowSection] = useState(false);

  const handleClick = (section: string, platforms: string) => {
    if (platforms === 'web') {
      setcurrentWeb(section);
    } else {
      setcurrentMenuMobile(section);
      section === currentMenuMobile
        ? setShowSection(!showSection)
        : setShowSection(true);
    }
  };

  const handleArrowClick = () => {
    currentMenuWeb === 'CONOCEME'
      ? setcurrentWeb('RECORRIDO')
      : currentMenuWeb === 'RECORRIDO'
      ? setcurrentWeb('HABILIDADES')
      : currentMenuWeb === 'HABILIDADES'
      ? setcurrentWeb('MOTIVACIÓN')
      : currentMenuWeb === 'MOTIVACIÓN'
      ? setcurrentWeb('CV')
      : currentMenuWeb === 'CV'
      ? setcurrentWeb('CONOCEME')
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
              onClick={() => handleClick(sm, 'web')}
            >
              <h4
                className={`md:pr-2 md:pl-2 text-left ml-auto px-[0.5rem] md:px-0 md:font-light font-normal tracking-widest hover:scale-90 transform transition-transform duration-300
                ${
                  sm === currentMenuWeb
                    ? 'text-LM dark:border-LM/30 border-LM border'
                    : ''
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
                currentMenuWeb === 'CV' && 'rotate-90'
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
          {currentMenuWeb === 'CONOCEME' || currentMenuWeb === '' ? (
            <AboutKnowMe />
          ) : currentMenuWeb === 'RECORRIDO' ? (
            <AboutJourney />
          ) : currentMenuWeb === 'HABILIDADES' ? (
            <AboutSkills />
          ) : currentMenuWeb === 'MOTIVACIÓN' ? (
            <AboutMotivation />
          ) : currentMenuWeb === 'CV' ? (
            <AboutCV />
          ) : null}
        </div>

        {/* SUB MENU & SECTION MOBILE */}
        <div className='relative'>
          <button
            onClick={() => handleClick('CONOCEME', 'mobile')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM50 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
            dark:bg-neutral-700'
          >
            CONOCEME
            <div className='absolute top-5 right-6'>
              {showSection && currentMenuMobile === 'CONOCEME' ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </button>
        </div>
        {showSection && currentMenuMobile === 'CONOCEME' && (
          <div className='block md:hidden my-4'>
            <AboutKnowMe />
          </div>
        )}

        <div className='relative'>
          <button
            onClick={() => handleClick('RECORRIDO', 'mobile')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM40 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-neutral-600'
          >
            RECORRIDO
            <div className='absolute top-5 right-6'>
              {showSection && currentMenuMobile === 'RECORRIDO' ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </button>
          {showSection && currentMenuMobile === 'RECORRIDO' && (
            <div className='block md:hidden my-4'>
              <AboutJourney />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('HABILIDADES', 'mobile')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM30 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS1'
          >
            HABILIDADES
            <div className='absolute top-5 right-6'>
              {showSection && currentMenuMobile === 'HABILIDADES' ? (
                <IoIosArrowUp size={22}/>
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </button>
          {showSection && currentMenuMobile === 'HABILIDADES' && (
            <div className='block md:hidden my-4'>
              <AboutSkills />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('MOTIVACIÓN', 'mobile')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM20 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS2'
          >
            MOTIVACIÓN
            <div className='absolute top-5 right-6'>
              {showSection && currentMenuMobile === 'MOTIVACIÓN' ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </button>
          {showSection && currentMenuMobile === 'MOTIVACIÓN' && (
            <div className='block md:hidden my-4'>
              <AboutMotivation />
            </div>
          )}
        </div>

        <div className='relative'>
          <button
            onClick={() => handleClick('CV', 'mobile')}
            className='pl-10 mb-2 py-6 flex flex-col md:hidden bg-LM10 w-full cursor-pointer tracking-widest font-medium text-sm shadow-md
          dark:bg-GRIS3'
          >
            CV
            <div className='absolute top-5 right-6'>
              {showSection && currentMenuMobile === 'CV' ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </button>
          {showSection && currentMenuMobile === 'CV' && (
            <div className='block md:hidden my-4'>
              <AboutCV />
            </div>
          )}
        </div>
      </SlideUp>
    </section>
  );
};
