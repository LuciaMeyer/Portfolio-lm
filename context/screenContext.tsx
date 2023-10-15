"use client";
import React, { createContext, useState, useEffect } from "react";

type ContextValueType = {
  screenWidth: number;
};

const initialContextValue: ContextValueType = {
  screenWidth: 0,
};

export const screenContext =
  createContext<ContextValueType>(initialContextValue);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => {
        setScreenSize({
          screenWidth: window.innerWidth,
        });
      };
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  }, []);

  return (
    <screenContext.Provider value={screenSize}>
      {children}
    </screenContext.Provider>
  );
};
