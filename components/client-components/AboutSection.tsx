'use client';
import { useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';
import { AboutMenu1 } from './AboutSubMenu/AboutMenu1';
import { AboutMenu2 } from './AboutSubMenu/AboutMenu2';
import { AboutMenu3 } from './AboutSubMenu/AboutMenu3';
import { AboutMenu4 } from './AboutSubMenu/AboutMenu4';


export const AboutSection = () => {

  const [currentMenu, setCurrentMenu] = useState('Conoceme');

  const handleClick = (sm: string) => {
    setCurrentMenu(sm)
    console.log(sm)
  };

  const handleArrowClick = () => {
    currentMenu === 'Conoceme' ? setCurrentMenu('Recorrido') :
    currentMenu === 'Recorrido' ? setCurrentMenu('Visión') :
    currentMenu === 'Visión' ? setCurrentMenu('Valores') :
    currentMenu === 'Valores' ? setCurrentMenu('Conoceme')  : null
  };

  const subMenu = ['Conoceme', 'Recorrido', 'Visión', 'Valores'];

  return (
    <section
      id='about'
      className='flex-1 pt-6 md:pt-20 pb-20 relative overflow-hidden'
    >
      <h1 className='z-20 text-center text-2xl md:pb-10 pb-8 '>
        Sobre Mi
        <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
      </h1>

      <div className='h-full md:w-1/2 flex flex-col md:flex-row md:justify-around mt-2 mb-20 mx-10 md:pr-10 md:items-center align-center pb-20'>
        <div className='md:pl-2 md:mr-10 md:ml-60 bg-white dark:bg-BGD md:pt-2 md:pr-2 md:pb-2'>

          <div className='flex justify-between align-center mb-8'>
            {/* SUBMENÚ */}
            <div className='flex'>
              {subMenu.map((sm, i) =>
                <button key={i} onClick={() => handleClick(sm)}>
                  <h1 className='text-left text-LM md:text-xl text-m font-medium pr-4 dark:hover:text-stone-300 hover:text-TX'>
                    {sm}
                  </h1>
                </button>
              )}
            </div>
            
            {/* FLECHA */}
            <div onClick={handleArrowClick}>
              <Image
                className={`hover:scale-90 cursor-pointer -rotate-90 ${currentMenu === 'Valores' && 'rotate-90'} transform transition-transform duration-300 opacity-50 hover:opacity-100`}
                width='30'
                height='30'
                src={img.fl_am}
                alt='img'
                priority
              />
            </div>
          </div>
          {
            currentMenu === 'Conoceme' ? <AboutMenu1 /> :
              currentMenu === 'Recorrido' ? <AboutMenu2 /> :
                currentMenu === 'Visión' ? <AboutMenu3 /> :
                  currentMenu === 'Valores' ? <AboutMenu4 /> : null
          }
        </div>
      </div>

    </section>
  );
};

