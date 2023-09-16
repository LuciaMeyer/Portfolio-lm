'use client';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { img } from '../../public/images';
import { BsSun } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';
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

  const handleMenuClick = (page: string) => {
    setNavbar(!navbar);
    setSection(page);
  };

  const hanldeLogoClick = () => {
    window.scrollTo(0, 0);
    setSection('home');
  };

  const show = {
    transition: { duration: 1 },
    y:0
  };
  
  const hide = {
    transition: { duration: 1 },
      y: -1000,
  };


  return (
    <>
      <Icons section={section} setSection={setSection} />
      <header
        className='w-full mx-auto px-4 md:px-5 fixed top-0 z-30 shadow-2xl bg-slate-100/60 dark:bg-BGD/80 shadow-gray-200 dark:shadow-stone-700  
        dark:border-stone-600 backdrop-blur-md'
      >
        
        <div className='flex items-center justify-between'>

          {/* LOGO */}
          <div className='flex md:mx-auto md:pl-28 ml-7 cursor-pointer pb-2'>
            <Link to='home' onClick={hanldeLogoClick}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ rotate: 360, transition: { duration: 0.25 } }}
              >
                <Image
                  className='md:my-4 md:w-full'
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
            className='relative my-auto cursor-pointer'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='flex items-center justify-between py-3 transition-all'>
              {/* MENÚ HAMBURGESA   */}
              <button
                onClick={() => setNavbar(!navbar)}
                className='relative group'
              >
                <div className='mr-4 relative flex items-center justify-center rounded-full w-[40px] h-[40px] shadow-md dark:shadow-neutral-500 transition-transform duration-500 hover:scale-90'>

                  <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 
                  ${navbar && 'group-focus:-rotate-[45deg] origin-center'}`}>

                    <div className={`bg-LM h-[2px] w-1/2 rounded transform transition-all duration-300
                    ${navbar && 'group-focus:-rotate-90 group-focus:h-[2px] group-focus:-translate-y-[1px]'} origin-right delay-75`}></div>

                    <div className=' bg-LM h-[2px] rounded'></div>

                    <div className={`bg-LM h-[2px] w-1/2 rounded self-end transform transition-all duration-300
                    ${navbar && 'group-focus:-rotate-90 group-focus:h-[2px] group-focus:translate-y-[1px] origin-left delay-75'}`}></div>
                    
                  </div>
                </div>
              </button>
              {/* SOL Y LUNA   */}
              <div className='mr-4 relative flex items-center justify-center rounded-full w-[40px] h-[40px] shadow-md dark:shadow-neutral-500 transition-transform duration-500 hover:scale-90'>
                {currentTheme === 'dark' ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-inherit text-LM  '
                  >
                    <BsSun size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-inherit text-LM '
                  >
                    <HiOutlineMoon size={22} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* TEXTO MENÚ */}
        
        <motion.div 
            animate={navbar ? show : hide }
            className='h-0'>
            <div
              className='backdrop-blur-md flex flex-col items-center space-y-12 cursor-pointer pt-20 h-screen bg-slate-100/80 dark:bg-BGD/80'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={'hover:text-LM font-thin text-lg tracking-wider'}
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
      </header>
    </>
  );
};
