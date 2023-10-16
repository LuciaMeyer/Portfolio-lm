"use client";
import { useState } from "react";
import Image from "next/image";
import { img } from "../public/images";
import { AboutKnowMe } from "./AboutSubMenu/AboutKnowMe";
import { AboutJourney } from "./AboutSubMenu/AboutJourney";
import { AboutSkills } from "./AboutSubMenu/AboutSkills";
import { AboutMotivation } from "./AboutSubMenu/AboutMotivation";
import { AboutCV } from "./AboutSubMenu/AboutCV";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SlideUp from "./SlideUp";

interface SectionContent {
  [key: string]: JSX.Element;
}

interface AboutSectionProps {
  refAbout: React.RefObject<HTMLElement>;
}


export const AboutSection: React.FC<AboutSectionProps> = ({ refAbout }) => {
  
  const [currentMenuWeb, setCurrentMenuWeb] = useState("CONOCEME");
  const [currentMenuMobile, setCurrentMenuMobile] = useState("");
  const [showSection, setShowSection] = useState(false);

  const menuOrder = [
    "CONOCEME",
    "RECORRIDO",
    "HABILIDADES",
    "MOTIVACIÓN",
    "CV",
  ];

  const sections: SectionContent = {
    CONOCEME: <AboutKnowMe />,
    RECORRIDO: <AboutJourney />,
    HABILIDADES: <AboutSkills />,
    MOTIVACIÓN: <AboutMotivation />,
    CV: <AboutCV />,
  };

  const handleClick = (section: string, platform: string) => {
    if (platform === "web") {
      setCurrentMenuWeb(section);
    } else {
      setCurrentMenuMobile((prevSection) =>
        prevSection === section ? "" : section
      );
      setShowSection(true);
    }
  };

  const handleArrowClick = () => {
    const currentIndex = menuOrder.indexOf(currentMenuWeb);
    const nextIndex = (currentIndex + 1) % menuOrder.length;
    setCurrentMenuWeb(menuOrder[nextIndex]);
  };

  
  return (
    <section
      ref={refAbout}
      id="about"
      className="flex-1 pt-6 md:pt-10 md:pb-60 pb-60 relative overflow-hidden md:mx-auto mx-10 h-full "
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="z-20 text-center text-2xl md:pb-10 pb-8 ">
          Sobre Mi
          <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
        </h1>
      </SlideUp>

      <SlideUp offset="-300px 0px -300px 0px ">
        {/* SUBMENÚ WEB & SECTION WEB*/}
          <div className="md:flex hidden justify-center">
            {menuOrder.map((sm, i) => (
              <button
                className="w-auto "
                key={i}
                onClick={() => handleClick(sm, "web")}
              >
                <h4
                  className={`py-2 w-36 tracking-widest mx-2
                shadow-lg shadow-neutral-400 dark:shadow-black
                hover:scale-90 hover:bg-neutral-300 hover:font-medium dark:hover:bg-neutral-400 dark:hover:text-black 
                transform transition-transform duration-300
                ${
                  sm === currentMenuWeb
                    ? "bg-neutral-300 font-medium dark:bg-neutral-400 scale-75 dark:text-black"
                    : "bg-white dark:bg-neutral-600"
                } `}
                >
                  {sm}
                </h4>
              </button>
            ))}
            <div className="my-auto pl-2" onClick={handleArrowClick}>
              <Image
                className={`ml-2 w-auto h-7 hover:scale-90 cursor-pointer -rotate-90 dark:invert ${
                  currentMenuWeb === "CV" && "rotate-90"
                } transform transition-transform duration-300 opacity-40 hover:opacity-20 `}
                width="30"
                height="30"
                src={img.flecha}
                alt="img"
                priority
              />
            </div>
          </div>
          
          <div className="md:flex flex-col hidden justify-center mx-auto h-full">
            {currentMenuWeb === "CONOCEME" || currentMenuWeb === ""
              ? sections.CONOCEME
              : currentMenuWeb === "RECORRIDO"
              ? sections.RECORRIDO
              : currentMenuWeb === "HABILIDADES"
              ? sections.HABILIDADES
              : currentMenuWeb === "MOTIVACIÓN"
              ? sections.MOTIVACIÓN
              : currentMenuWeb === "CV"
              ? sections.CV
              : null}
          </div>

        {/* SUB MENU & SECTION MOBILE */}
        {menuOrder.map((section, index) => (
          <div className="relative" key={index}>
            <button
              onClick={() => handleClick(section, "mobile")}
              className={`pl-10 mb-6 py-6 flex flex-col md:hidden bg-LM30 ${
                50 - index * 10
              } w-full cursor-pointer tracking-widest font-medium text-sm shadow-md shadow-neutral-400 dark:shadow-black ${
                currentMenuMobile === section
                  ? "dark:bg-neutral-400 dark:text-black"
                  : "dark:bg-neutral-600"
              }`}
            >
              {section}
              <div className="absolute top-5 right-6">
                {showSection && currentMenuMobile === section ? (
                  <IoIosArrowUp size={22} />
                ) : (
                  <IoIosArrowDown size={22} />
                )}
              </div>
            </button>
            {showSection && currentMenuMobile === section && (
              <div className="block md:hidden my-4">{sections[section]}</div>
            )}
          </div>
        ))}
      </SlideUp>
    </section>
  );
};
