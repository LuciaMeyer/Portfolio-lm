"use client";
import { useState } from "react";
import Image from "next/image";
import { img } from "../public/images";
import { AboutKnowMe } from "./AboutSubMenu/AboutKnowMe";
import { AboutJourney } from "./AboutSubMenu/AboutJourney";
import { AboutSkills } from "./AboutSubMenu/AboutSkills";
import { AboutMotivation } from "./AboutSubMenu/AboutMotivation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SlideUp from "./SlideUp";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface SectionContent {
  [key: string]: JSX.Element;
}

interface AboutSectionProps {
  refAbout: React.RefObject<HTMLElement>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ refAbout }) => {
  const [currentMenuWeb, setCurrentMenuWeb] = useState("Conoceme");
  const [currentMenuMobile, setCurrentMenuMobile] = useState("");

  const menuOrder = ["Conoceme", "Recorrido", "Habilidades", "Motivación"];

  const sections: SectionContent = {
    Conoceme: <AboutKnowMe />,
    Recorrido: <AboutJourney />,
    Habilidades: <AboutSkills />,
    Motivación: <AboutMotivation />,
  };

  const handleClick = (section: string, platform: string) => {
    if (platform === "web") {
      setCurrentMenuWeb("");
      setTimeout(() => {
        setCurrentMenuWeb(section);
      }, 500);
    } else {
      if (section === currentMenuMobile) {
        setCurrentMenuMobile("");
      } else {
        setCurrentMenuMobile("");
        setTimeout(() => {
          setCurrentMenuMobile(section);
        }, 500);
      }
    }
  };

  const handleArrowClick = () => {
    const currentIndex = menuOrder.indexOf(currentMenuWeb);
    const nextIndex = (currentIndex + 1) % menuOrder.length;
    setCurrentMenuWeb(menuOrder[nextIndex]);
  };

  const show = {
    transition: { duration: 1 },
    x: 0,
    scale: 1,
    height: "auto",
  };

  const hide = {
    transition: { duration: 0.5 },
    x: -500,
    scale: 1,
    height: 0,
    overflow: "hidden",
  };

  const showW = {
    transition: { duration: 1, delay: 0.2 },
    height: "auto",
  };

  const hideW = {
    transition: { duration: 0.5 },
    height: 0,
    overflow: "hidden",
    opacity: 0,
  };

  return (
    <section
      ref={refAbout}
      id="about"
      className="flex-1 pt-6 md:pt-10 md:mb-[30rem] pb-60 relative overflow-hidden md:mx-auto mx-6 h-full "
    >
      <div className="block md:hidden">
        <SlideUp offset=" -300px 0px -300px 0px">
          <h1 className="text-center text-2xl md:pb-10 pb-8">
            Sobre Mi
            <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
          </h1>
        </SlideUp>
      </div>

      <SlideUp offset="-300px 0px -300px 0px ">
        {/* SUBMENÚ WEB & SECTION WEB*/}
        <div
          className="md:flex hidden w-1/2 mx-auto justify-around
          py-4 mb-4
          shadow-lg shadow-neutral-400 dark:shadow-black"
        >
          {menuOrder.map((sm, i) => (
            <Link
              key={i}
              to="about"
              smooth={true}
              offset={-100}
              duration={1000}
              spy={true}
            >
              <button key={i} onClick={() => handleClick(sm, "web")}>
                <h4
                  className={`                 
                    hover:text-LM tracking-wide text-lg dark:hover:text-LM transform transition-transform duration-300"
                   ${sm === currentMenuWeb ? " font-medium text-LM" : ""}`}
                >
                  {sm}
                </h4>
              </button>
            </Link>
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

        <div className="md:block hidden justify-center mx-auto h-96">
          {menuOrder.map((section, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1, height: 0, overflow: "hidden" }}
              animate={currentMenuWeb === section ? showW : hideW}
            >
              {sections[section]}
            </motion.div>
          ))}
        </div>

        {/* SUB MENU & SECTION MOBILE */}
        {menuOrder.map((section, index) => (
          <div className="relative" key={index}>
            <Link
              to="about"
              smooth={true}
              offset={index * 110}
              duration={2000}
              spy={true}
            >
              <button
                onClick={() => handleClick(section, "mobile")}
                className={`
                flex flex-col md:hidden w-full cursor-pointer 
                pl-10 mb-6 py-6               
                tracking-widest text-lg text-neutral-400
                shadow-md shadow-neutral-400 dark:shadow-black
                ${
                  currentMenuMobile === section
                    ? "text-white dark:font-normal dark:text-BGD bg-LM dark:BGDi "
                    : "bg-neutral-100 dark:bg-BDGi"
                }`}
              >
                {section}
                <div className="absolute top-5 right-6">
                  {currentMenuMobile === section ? (
                    <IoIosArrowUp size={22} />
                  ) : (
                    <IoIosArrowDown size={22} />
                  )}
                </div>
              </button>
            </Link>
            <motion.div
              initial={{ scale: 0, height: 0 }}
              animate={currentMenuMobile === section ? show : hide}
              className="block md:hidden my-4"
            >
              {sections[section]}
            </motion.div>
          </div>
        ))}
      </SlideUp>
    </section>
  );
};
