'use client'
import { motion } from "framer-motion";
import { Languages } from "./Skills/Languages";
import { FrontEnd } from "./Skills/FrontEnd";
import { DesingLibraries } from "./Skills/DesingLibraries";
import { useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";

interface SectionContent {
  [key: string]: JSX.Element;
};

export const AboutSkills = () => {

  const [currentTab, setCurrentTab] = useState(0)

  const menuOrder = [
    "LENGUAJES",
    "FRONTEND",
    "DESING_LIBRARIES",
    // "BACKEND",
    // 'DATABASE',
    // 'CONTROL DE VERSIONES',
    // 'DISEÑO',
    // 'OTRAS HERRAMIENTAS',
    // 'METODOLOGÍAS'
  ];

  const sections: SectionContent = {
    LENGUAJES: <Languages />,
    FRONTEND: <FrontEnd />,
    HABILIDADES: <DesingLibraries />,
    DESING_LIBRARIES: <DesingLibraries />,
  };

  const handleArrowNext = () => {
    if (currentTab < menuOrder.length - 1) {
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
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:my-14
        flex flex-col mx-auto space-y-6"
      >
        {menuOrder.map((menuItem, index) => (
          index === currentTab && (
            <div key={menuItem} className="w-full h-full pb-10 md:py-10 px-10 shadow-lg shadow-neutral-400 dark:shadow-black">
              <span className="flex justify-center text-sm">{menuItem}</span>
              <div className="flex justify-center mb-10 mt-2">
                <Image
                  className={`rotate-90 mx-1 w-auto h-7 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30
                  ${currentTab === 0 && 'hidden'}`}
                  width="30"
                  height="30"
                  src={img.fl_tr}
                  alt="img"
                  priority
                  onClick={handleArrowPrev}
                />
                <Image
                  className={`-rotate-90 mx-1 w-auto h-7 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30
                  ${currentTab === menuOrder.length -1 && 'hidden'}`}
                  width="30"
                  height="30"
                  src={img.fl_tr}
                  alt="img"
                  priority
                  onClick={handleArrowNext}
                />
              </div>
              {sections[menuItem]}
            </div>
          )
        ))}
      </div>
    </>
  );
};
