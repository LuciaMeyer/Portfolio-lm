import React, { createContext, useState, useEffect } from 'react';

type ContextValueType = {
  screenWidth: number;
  scrollY: number;
};

const initialContextValue: ContextValueType = {
  screenWidth: 0,
  scrollY: 0,
};

export const screenContext = createContext<ContextValueType>(initialContextValue);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    scrollY: window.scrollY,
  });

  const updateScreenSize = () => {
    setScreenSize({
      screenWidth: window.innerWidth,
      scrollY: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    window.addEventListener('scroll', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('scroll', updateScreenSize);
    };
  }, []);

  return (
    <screenContext.Provider value={screenSize}>
      {children}
    </screenContext.Provider>
  );
};
