'use client';
import React, { createContext, useState, useEffect } from 'react';

type ContextValueType = {
  screenWidth: number;
  scrollY: number;
};

const initialContextValue: ContextValueType = {
  screenWidth: 0,
  scrollY: 0,
};

export const screenContext =
  createContext<ContextValueType>(initialContextValue);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateScreenSize = () => {
        if (typeof window !== 'undefined') {
          setScreenSize({
            screenWidth: window.innerWidth,
            scrollY: window.scrollY,
          });
        }
      };
      window.addEventListener('resize', updateScreenSize);
      window.addEventListener('scroll', updateScreenSize);
      updateScreenSize();
      return () => {
        window.removeEventListener('resize', updateScreenSize);
        window.removeEventListener('scroll', updateScreenSize);
      };
    }
  }, []);

  return (
    <screenContext.Provider value={screenSize}>
      {children}
    </screenContext.Provider>
  );
};
