'use client';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { img } from '../../public/images';
import { CiDark } from 'react-icons/ci';
import { ParticlesComponents } from '../server-components/ParticlesComponents';
import { CiBrightnessDown } from 'react-icons/ci';

import { motion } from 'framer-motion';
import { Icons } from './Icons';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'INICIO',
    page: 'home',
  },
  {
    label: 'SOBRE MI',
    page: 'about',
  },
  {
    label: 'PROYECTOS',
    page: 'projects',
  },
  {
    label: 'RECURSOS',
    page: 'resources',
  },
  {
    label: 'CONTACTO',
    page: 'contact',
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const [section, setSection] = useState('home');
  const [showParticles, setShowParticles] = useState(true);

  const handleMenuClick = (page: string) => {
    setNavbar(!navbar);
    setSection(page);
  };

  const handleMenuResposiveParticles = () => {
    setShowParticles(!showParticles)
    setNavbar(!navbar);
  }

  const handleMenuResposiveTheme = (currentTheme:string | undefined) => {
    currentTheme === 'dark'
    ? setTheme('light')
    : setTheme('dark')
    setNavbar(!navbar);
  }

  const hanldeLogoClick = () => {
    window.scrollTo(0, 0);
    setSection('home');
  };

  const show = {
    transition: { duration: 1 },
    y: 0,
    scale: 1,
  };

  const hide = {
    transition: { duration: 1 },
    y: -1000,
    scale: 1,
  };

  return (
    <>
      <Icons section={section} setSection={setSection} />
      {showParticles && (
        <div className='-z-50 absolute h-96'>
          <ParticlesComponents />
        </div>
      )}
      <header
        className='w-full mx-auto fixed top-0 z-30 md:shadow-2xl bg-slate-100/60 dark:bg-BGD/80 
        md:shadow-gray-200 
        md:dark:shadow-stone-700'
      >
        {/* TEXTO MENÚ */}
        <motion.div
          initial={{ scale: 0 }}
          animate={navbar ? show : hide}
          className='h-0'
        >
          <div
            className='flex flex-col items-center space-y-12 cursor-pointer md:pt-32 pt-20 m-0 h-screen
            backdrop-blur-md f bg-slate-100/60 dark:bg-BGD/80'
          >
            <div className='md:hidden flex mt-12 text-xs items-center'>
              <button
                onClick={handleMenuResposiveParticles}
                className='mr-2 text-LM'
              >
                {`${!showParticles ? 'VER FONDO' : 'OCULTAR FONDO'}`}
              </button>
              <span>|</span>
                <button
                  onClick={() => handleMenuResposiveTheme(currentTheme)}
                  className='mr-2 p-2 text-LM'
                >
                  {`${currentTheme === 'dark'? 'MODO CLARO' : 'MODO OSCURO'}`}
                </button>

            </div>
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className={
                    'hover:text-LM font-thin text-lg tracking-wider'
                  }
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => handleMenuClick(item.page)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        <div className='flex items-center justify-between backdrop-blur-md '>
          {/* LOGO */}
          <div className='flex md:mx-auto md:pl-48 ml-7 cursor-pointer pb-2'>
            <Link to='home' onClick={hanldeLogoClick}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ rotate: 360, transition: { duration: 0.25 } }}
              >
                <Image
                  className='md:my-4 my-6 md:w-full w-[30px]'
                  src={img.LM}
                  alt='LM'
                  width={40}
                  height={40}
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* ÍCONOS MENÚ  */}
          <motion.div
            className='relative my-auto cursor-pointer md:px-5'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='flex items-center justify-between py-3 transition-all'>
              {/* FONDO */}
              <div className='md:flex hidden mr-4 relative transition-transform duration-500 hover:scale-90'>
                <button
                 onClick={() => setShowParticles(!showParticles)}
                 className='bg-inherit text-LM text-sm tracking-widest w-[40px] h-[40px]'
                >
                  {`${!showParticles ? 'PLAY' : 'PAUSE'}`}

                </button>
              </div>
              {/* MENÚ HAMBURGESA   */}
              <button
                onClick={() => setNavbar(!navbar)}
                className='relative group'
              >
                <div className='relative flex items-center justify-center rounded-full w-[60px] h-[50px]  transition-transform duration-500 hover:scale-90 '>
                  {/* shadow-md dark:shadow-neutral-600 */}
                  <div
                    className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 
                  ${navbar && 'group-focus:-rotate-[45deg] origin-center'}`}
                  >
                    <div
                      className={`bg-LM h-[1.5px] w-1/2 rounded transform transition-all duration-300
                    ${
                      navbar &&
                      'group-focus:-rotate-90 group-focus:h-[1px] group-focus:-translate-y-[1px]'
                    } origin-right delay-75`}
                    ></div>

                    <div className=' bg-LM h-[1px] rounded'></div>

                    <div
                      className={`bg-LM h-[1.5px] w-1/2 rounded self-end transform transition-all duration-300
                    ${
                      navbar &&
                      'group-focus:-rotate-90 group-focus:h-[1px] group-focus:translate-y-[1px] origin-left delay-75'
                    }`}
                    ></div>
                  </div>
                </div>
              </button>
              {/* SOL Y LUNA   */}
              <div className='md:flex hidden mr-4 relative items-center justify-center rounded-full w-[40px] h-[40px]  transition-transform duration-500 hover:scale-90 '>
                {/* shadow-md dark:shadow-neutral-600 */}
                {currentTheme === 'dark' ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-inherit text-LM  '
                  >
                    <CiBrightnessDown size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-inherit text-LM '
                  >
                    <CiDark size={22} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};
