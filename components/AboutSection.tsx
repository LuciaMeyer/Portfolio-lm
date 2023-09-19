'use client';
import { useState } from 'react';
import Image from 'next/image';
import { img } from '../public/images';
import { AboutMenu1 } from './AboutSubMenu/AboutMenu1';
import { AboutMenu2 } from './AboutSubMenu/AboutMenu2';
import { AboutMenu3 } from './AboutSubMenu/AboutMenu3';
import { AboutMenu4 } from './AboutSubMenu/AboutMenu4';

export const AboutSection = () => {
  const [currentMenu, setCurrentMenu] = useState('CONOCEME');

  const handleClick = (sm: string) => {
    setCurrentMenu(sm);
    console.log(sm);
  };

  const handleArrowClick = () => {
    currentMenu === 'CONOCEME'
      ? setCurrentMenu('RECORRIDO')
      : currentMenu === 'RECORRIDO'
      ? setCurrentMenu('HERRAMIENTAS')
      : currentMenu === 'HERRAMIENTAS'
      ? setCurrentMenu('MOTIVACIÓN')
      : currentMenu === 'MOTIVACIÓN'
      ? setCurrentMenu('CONOCEME')
      : null;
  };

  console.log(currentMenu)
  const subMenu = ['CONOCEME', 'RECORRIDO', 'HERRAMIENTAS', 'MOTIVACIÓN'];

  return (
    <section id='about' className='flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto mx-10'>

      <h1 className='z-20 text-center text-2xl md:pb-10 pb-8 '>
        Sobre Mi
        <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
      </h1>

      {/* SUBMENÚ */}
      <div className='flex justify-center '>
        {subMenu.map((sm, i) => (
          <button key={i} onClick={() => handleClick(sm)}>
            <h1
              className={`pr-4 ${
                sm === currentMenu ? 'text-TX dark:text-stone-300 text-xl' : 'text-LM text-sm tracking-widest'
              } dark:hover:text-stone-300 hover:text-TX`}
              
              >
              {sm}
            </h1>
          </button>
        ))}
        {/* FLECHA */}
        <div onClick={handleArrowClick}>
          <Image
            className={`hover:scale-90 cursor-pointer -rotate-90 ${
              currentMenu === 'MOTIVACIÓN' && 'rotate-90'
            } transform transition-transform duration-300 opacity-50 hover:opacity-100`}
            width='30'
            height='30'
            src={img.fl_am}
            alt='img'
            priority
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:w-2/3 justify-center mx-auto mt-10'>
        {currentMenu === 'CONOCEME' ? <AboutMenu1 />
         : currentMenu === 'RECORRIDO' ? <AboutMenu2 />
         : currentMenu === 'HERRAMIENTAS' ? <AboutMenu3 />
         : currentMenu === 'MOTIVACIÓN' ? <AboutMenu4 />
         : null
         }
      </div>
    </section>
  );
};
