"use client";
import { useState } from "react";
import Image from "next/image";
import { Languages } from "./Languages";
import { FrontEnd } from "./FrontEnd";
import { DesingLibraries } from "./DesingLibraries";
import { BackEnd } from "./BackEnd";
import { DataBase } from "./DataBase";
import { VersionControl } from "./VersionControl";
import { DesignTools } from "./DesignTools";
import { Tools } from "./Tools";
import { Methodologies } from "./Methodologies";
import { img } from "../../../../public/images";

interface SectionContent {
  [key: string]: JSX.Element;
}

export const TechnicalSkills = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuOrder = [
    "LENGUAJES",
    "FRONTEND",
    "DESING_LIBRARIES",
    "BACKEND",
    "DATABASE",
    "VERSION_CONTROL",
    "DESIGN_TOOLS",
    "TOOLS",
    "METHODOLOGIES",
  ];

  const sections: SectionContent = {
    LENGUAJES: <Languages />,
    FRONTEND: <FrontEnd />,
    DESING_LIBRARIES: <DesingLibraries />,
    BACKEND: <BackEnd />,
    DATABASE: <DataBase />,
    VERSION_CONTROL: <VersionControl />,
    DESIGN_TOOLS: <DesignTools />,
    TOOLS: <Tools />,
    METHODOLOGIES: <Methodologies />,
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
      {/* <div className="flex int:flex md:hidden justify-center">
        <Image
          width={400}
          height={400}
          src={img.auxfondo3}
          alt="img"
          priority
        />
      </div> */}
      <div
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-auto int:w-auto int:justify-center
        flex flex-col md:flex-row mx-auto "
      >
        {menuOrder.map(
          (menuItem, index) =>
            index === currentTab && (
              <div
                key={menuItem}
                className="space-y-6 md:mt-8 md:mr-7"
              >
                <div className="flex justify-center items-center">
                  <Image
                    className={`rotate-90 mr-2 w-auto md:h-8 h-10 dark:invert ${
                      currentTab === 0
                        ? "opacity-30 dark:invert"
                        : "hover:scale-90 cursor-pointer transform transition-transform duration-300 opacity-60 hover:opacity-30"
                    }`}
                    width="30"
                    height="30"
                    src={img.fl_tr}
                    alt="img"
                    priority
                    onClick={handleArrowPrev}
                  />
                  <span className="text-sm dark:text-stone-400 mx-2">
                    {currentTab + 1} / {menuOrder.length}
                  </span>
                  <Image
                    className={`-rotate-90 ml-2 w-auto md:h-8 h-10 dark:invert ${
                      currentTab === menuOrder.length - 1
                        ? "opacity-30 dark:invert"
                        : "hover:scale-90 cursor-pointer transform transition-transform duration-300 opacity-60 hover:opacity-30"
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
        {/* <div className="md:flex int:hidden hidden mt-8 ml-7 md:w-1/2">
          <div>
            <Image
              width={600}
              height={600}
              src={img.auxfondo3}
              alt="Img"
              priority
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};
