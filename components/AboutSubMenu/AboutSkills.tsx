'use client'
import { Languages } from './Skills/Languages';
import { FrontEnd } from './Skills/FrontEnd';
import { DesingLibraries } from './Skills/DesingLibraries';
import { useState } from 'react';
import Image from 'next/image';
import { img } from '../../public/images';

interface SectionContent {
  [key: string]: JSX.Element;
};

export const AboutSkills = () => {

  const [currentTab, setCurrentTab] = useState(0)

    // 'BACKEND',
    // 'DATABASE',
    // 'CONTROL DE VERSIONES',
    // 'DISEÑO',
    // 'OTRAS HERRAMIENTAS',
    // 'METODOLOGÍAS'


  const menu = {
    order: ['LENGUAJES','FRONTEND','DESING_LIBRARIES'],
    name:['Lenguaje de Programación', 'Fron-End', 'Librerías de Diseño'  ]
  };

  const sections: SectionContent = {
    LENGUAJES: <Languages />,
    FRONTEND: <FrontEnd />,
    DESING_LIBRARIES: <DesingLibraries />,
  };

  const handleArrowNext = () => {
    if (currentTab < menu.order.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handleArrowPrev = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };


  return (
    <>
      <div
        className='
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:my-5
        flex flex-col mx-auto space-y-6'
      >
        {menu.order.map((menuItem, index) => (
          index === currentTab && (
            <div key={menuItem} className='relative w-full h-full py-10 md:py-10 px-10 shadow-lg shadow-neutral-400 dark:shadow-black'>

              <div className='flex justify-between items-center pb-24'>
                <span className='text-sm tracking-wider'>Habilidades Técnicas</span>
                <span className='text-sm tracking-wider'>{menu.name[index]}</span>
              </div>

              <div className='absolute top-10 right-0 left-0 flex justify-center items-center'>
                <Image
                  className={`rotate-90 ${currentTab === 0
                    ? 'opacity-30 scale-75'
                    : 'mx-1 w-auto h-7 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30'                  
                  }`}
                  width='30'
                  height='30'
                  src={img.fl_tr}
                  alt='img'
                  priority
                  onClick={handleArrowPrev}
                />
                <Image
                  className={`-rotate-90 ${currentTab === menu.order.length - 1
                    ? 'opacity-30 scale-75'
                    : 'mx-1 w-auto h-7 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30'
                  }`}
                  width='30'
                  height='30'
                  src={img.fl_tr}
                  alt='img'
                  priority
                  onClick={handleArrowNext}
                />
              </div>
              <div className='flex flex-col justify-center'>
                {sections[menuItem]}
              </div>
            </div>
          )
        ))}
      </div>
    </>
  );
};
