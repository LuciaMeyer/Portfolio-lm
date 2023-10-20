"use client";
import { Languages } from "./Skills/Languages";
import { FrontEnd } from "./Skills/FrontEnd";
import { DesingLibraries } from "./Skills/DesingLibraries";
import { useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";
import { BackEnd } from "./Skills/BackEnd";

interface SectionContent {
  [key: string]: JSX.Element;
}

export const AboutSkills = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // 'BACKEND',
  // 'DATABASE',
  // 'CONTROL DE VERSIONES',
  // 'DISEÑO',
  // 'OTRAS HERRAMIENTAS',
  // 'METODOLOGÍAS'

  const menuOrder = ["LENGUAJES", "FRONTEND", "DESING_LIBRARIES", 'BACKEND'];

  const sections: SectionContent = {
    LENGUAJES: <Languages />,
    FRONTEND: <FrontEnd />,
    DESING_LIBRARIES: <DesingLibraries />,
    BACKEND: <BackEnd/>,
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
      <div className="flex md:hidden justify-center">
        <Image width={400} height={400} src={img.auxfondo3} alt="img" priority />
      </div>
      <div
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto "
      >
        {menuOrder.map(
          (menuItem, index) =>
            index === currentTab && (
              <div key={menuItem} className="space-y-6 md:mt-8 md:mr-7 md:w-1/2 ">

                <div className="flex justify-center items-center">
                  <Image
                    className={`rotate-90 ${
                      currentTab === 0
                        ? "opacity-30 scale-90 dark:invert"
                        : "mr-2 w-auto md:h-8 h-10 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30"
                    }`}
                    width="30"
                    height="30"
                    src={img.fl_tr}
                    alt="img"
                    priority
                    onClick={handleArrowPrev}
                  />
                  <Image
                    className={`-rotate-90 ${
                      currentTab === menuOrder.length - 1
                        ? "opacity-30 scale-90 dark:invert"
                        : "ml-2 w-auto md:h-8 h-10 hover:scale-90 cursor-pointer dark:invert transform transition-transform duration-300 opacity-40 hover:opacity-30"
                    }`}
                    width="30"
                    height="30"
                    src={img.fl_tr}
                    alt="img"
                    priority
                    onClick={handleArrowNext}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  {sections[menuItem]}
                </div>
              </div>
            )
        )}
        <div className="md:flex hidden mt-8 ml-7 md:w-1/2">
          <Image
            width={600}
            height={600}
            src={img.auxfondo3}
            alt="Img"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};
