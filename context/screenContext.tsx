"use client";
import React, { createContext, useState, useEffect } from "react";

export const screenContext = createContext<boolean>(false);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => {
        window.innerWidth < 768
        ? setIsMobile(true)
        : setIsMobile(false)
      };
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  }, []);

  return (
    <screenContext.Provider value={isMobile}>
      {children}
    </screenContext.Provider>
  );
};
