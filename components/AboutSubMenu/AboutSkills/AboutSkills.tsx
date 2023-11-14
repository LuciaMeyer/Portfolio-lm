'use client';
import { TechnicalSkills, SoftSkills } from '@/components';
import { useState } from 'react';

export const AboutSkills = () => {
  const [showSection, setShowSection] = useState('tech');

  const handleChange = (section: string) => {
  setShowSection(section);
  };

  return (
    <>
      <div className='flex mt-8 items-center justify-center mb-8'>
        <button
          onClick={() => handleChange('tech')}
          className={`mr-4 w-56 h-10 cursor-pointer bg-white dark:bg-BGD tracking-wider
          shadow-md shadow-neutral-400 dark:shadow-black
          ${
            showSection !== 'tech'
              ? 'text-[.7rem] text-stone-500 dark:text-stone-400 hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM transition duration-200 ease'
              : 'text-LM border-none font-bold md:text-x1 text-[0.9rem] '
          }`}
        >
          Tech Skills
        </button>
        <button
          onClick={() => handleChange('soft')}
          className={`ml-4 w-56 h-10 cursor-pointer bg-white dark:bg-BGD tracking-wider
          shadow-md shadow-neutral-400 dark:shadow-black
          ${
            showSection !== 'soft'
              ? 'text-[.7rem] text-stone-500 dark:text-stone-400 hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM transition duration-200 ease'
              : 'text-LM border-none font-bold md:text-x1 text-[0.9rem]'
          }`}
        >
          Soft Skills
        </button>
      </div>

      {showSection === 'tech' ? (
        <TechnicalSkills />
      ) : showSection === 'soft' ? (
        <SoftSkills />
      ) : (
        <></>
      )}
    </>
  );
};
