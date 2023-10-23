'use client';
import { ParticlesComponents, Icons } from '@/components';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { img } from '@/public/images';
import { CiDark } from 'react-icons/ci';
import { CiBrightnessDown } from 'react-icons/ci';
import { sectionContext } from '@/context/sectionContext';

export const NavPorjects = () => {
  const { theme, setTheme } = useTheme();
  const [showParticles, setShowParticles] = useState(false);
  const objetcContext = useContext(sectionContext);
  const section = objetcContext.section;
  const setSection = objetcContext.setSection;

  return (
    <>
      <Icons section={section} setSection={setSection} />
      {showParticles && (
        <div className='-z-50 absolute h-96'>
          <ParticlesComponents />
        </div>
      )}
      <header className='w-full mx-auto fixed top-0 z-30 md:shadow-2xl md:shadow-neutral-200 dark:shadow-neutral-900 dark:bg-BGD/50'>
        <div className='flex items-center justify-between backdrop-blur-md '>
          {/* LOGO */}
          <div className='flex md:ml-8 ml-4 cursor-pointer '>
            <Link href='/' className='md:h-auto h-16'>
              <div>
                <Image
                  className='md:my-4 md:mt-4 mt-2 md:w-full hover:scale-90 transform transition-all duration-300'
                  src={img.LMb}
                  alt='LM'
                  width={35}
                  height={35}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* ÍCONOS MENÚ  */}
          <div className='relative cursor-pointer md:px-6 pr-2 '>
            <div className='flex items-center justify-between transition-all'>
              {/* SOL Y LUNA */}
              <div className='md:flex hidden mr-2 relative items-center justify-center rounded-full w-[40px] h-[40px] transition-transform duration-500 hover:scale-90 '>
                {theme === 'dark' ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-inherit text-TX dark:text-stone-300'
                  >
                    <CiBrightnessDown size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-inherit text-TX dark:text-stone-300'
                  >
                    <CiDark size={22} />
                  </button>
                )}
              </div>
              {/* FONDO */}
              <div className='md:flex hidden mr-8 relative transition-transform duration-500 hover:scale-90'>
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className='bg-inherit text-TX dark:text-stone-300 text-xs tracking-widest w-[40px] h-[40px]'
                >
                  {`${!showParticles ? 'PLAY' : 'PAUSE'}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
