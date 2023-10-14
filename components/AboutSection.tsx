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

interface SectionContent {
  [key: string]: JSX.Element; 
}

export const AboutSection = () => {
  const [currentMenuWeb, setCurrentMenuWeb] = useState('CONOCEME');
  const [currentMenuMobile, setCurrentMenuMobile] = useState('');
  const [showSection, setShowSection] = useState(false);

  const menuOrder = ['CONOCEME', 'RECORRIDO', 'HABILIDADES', 'MOTIVACIÓN', 'CV'];

  const sections: SectionContent = {
    CONOCEME: <AboutKnowMe />,
    RECORRIDO: <AboutJourney />,
    HABILIDADES: <AboutSkills />,
    MOTIVACIÓN: <AboutMotivation />,
    CV: <AboutCV />,
  };

  const handleClick = (section: string, platform: string) => {
    if (platform === 'web') {
      setCurrentMenuWeb(section);
    } else {
      setCurrentMenuMobile((prevSection) =>
        prevSection === section ? '' : section
      );
      setShowSection(true);
    }
  };

  // const handleArrowClick = () => {
  //   const currentIndex = menuOrder.indexOf(currentMenuWeb);
  //   const nextIndex = (currentIndex + 1) % menuOrder.length;
  //   setCurrentMenuWeb(menuOrder[nextIndex]);
  // };

  return (
    <section
      id='about'
      className='flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto mx-10'
    >
      <SlideUp offset='-300px 0px -300px 0px'>
        <h1 className='z-20 text-center text-2xl md:pb-16 pb-8 '>
          Sobre Mi
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>
      </SlideUp>

      {/* SUBMENÚ WEB */}
      <SlideUp offset='-300px 0px -300px 0px'>
        <div className='md:flex hidden justify-center '>

          {menuOrder.map((sm, i) => (
            <button
              className='md:w-auto '
              key={i}
              onClick={() => handleClick(sm, 'web')}
            >
              <h4
                className={`py-2 w-36 mx-4 tracking-widest 
                shadow-md shadow-neutral-400 dark:shadow-black
                hover:scale-90 hover:bg-LM30 dark:hover:bg-LM dark:hover:text-TX 
                transform transition-transform duration-300
                ${
                  sm === currentMenuWeb
                    ? 'bg-LM30 dark:bg-LM scale-90 dark:text-TX border border-neutral-400 dark:border-black shadow-none'
                    : 'dark:bg-stone-700 bg-neutral-100'
                } `}
              >
                {sm}
              </h4>
            </button>
          ))}
          {/* FLECHA */}
          {/* <div className='md:block pl-2' onClick={handleArrowClick}>
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
          </div> */}
        </div>

        {/* SECTION WEB */}
        <div className='md:flex hidden flex-col md:flex-row md:w-2/3 justify-center mx-auto mt-10'>
          {currentMenuWeb === 'CONOCEME' || currentMenuWeb === '' ? (
            sections.CONOCEME
          ) : currentMenuWeb === 'RECORRIDO' ? (
            sections.RECORRIDO
          ) : currentMenuWeb === 'HABILIDADES' ? (
            sections.HABILIDADES
          ) : currentMenuWeb === 'MOTIVACIÓN' ? (
            sections.MOTIVACIÓN
          ) : currentMenuWeb === 'CV' ? (
            sections.CV
          ) : null}
        </div>

        {/* SUB MENU & SECTION MOBILE */}
        {menuOrder.map((section, index) => (
          <div className='relative' key={index}>
            <button
              onClick={() => handleClick(section, 'mobile')}
              className={`pl-10 mb-6 py-4 flex flex-col md:hidden bg-LM30 ${
                50 - index * 10
              } w-full cursor-pointer tracking-widest font-medium text-sm shadow-md shadow-neutral-400 dark:shadow-black ${
                currentMenuMobile === section ? 'dark:bg-neutral-700' : 'dark:bg-neutral-600'
              }`}
            >
              {section}
              <div className='absolute top-5 right-6'>
                {showSection && currentMenuMobile === section ? (
                  <IoIosArrowUp size={22} />
                ) : (
                  <IoIosArrowDown size={22} />
                )}
              </div>
            </button>
            {showSection && currentMenuMobile === section && (
              <div className='block md:hidden my-4'>{sections[section]}</div>
            )}
          </div>
        ))}
      </SlideUp>
    </section>
  );
};