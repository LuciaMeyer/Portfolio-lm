"use client";
import { useState } from "react";
import Image from "next/image";
import { img } from "../public/images";
import { AboutMenu1 } from "./AboutSubMenu/AboutMenu1";
import { AboutMenu2 } from "./AboutSubMenu/AboutMenu2";
import { AboutMenu3 } from "./AboutSubMenu/AboutMenu3";
import { AboutMenu4 } from "./AboutSubMenu/AboutMenu4";
import SlideUp from "./SlideUp";

export const AboutSection = () => {
  const [currentMenu, setCurrentMenu] = useState("CONOCEME");

  const handleClick = (sm: string) => {
    setCurrentMenu(sm);
  };

  const handleArrowClick = () => {
    currentMenu === "CONOCEME"
      ? setCurrentMenu("RECORRIDO")
      : currentMenu === "RECORRIDO"
      ? setCurrentMenu("TOOLS")
      : currentMenu === "TOOLS"
      ? setCurrentMenu("MOTIVACIÓN")
      : currentMenu === "MOTIVACIÓN"
      ? setCurrentMenu("CONOCEME")
      : null;
  };

  const subMenu = ["CONOCEME", "RECORRIDO", "TOOLS", "MOTIVACIÓN"];

  return (
    <section
      id="about"
      className="flex-1 pt-6 md:pt-10 md:pb-60 pb-40 relative overflow-hidden md:mx-auto mx-10 "
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="z-20 text-center text-2xl md:pb-10 pb-8 ">
          Sobre Mi
          <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
        </h1>
      </SlideUp>

      {/* SUBMENÚ */}
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex justify-center mx-10">
          {subMenu.map((sm, i) => (
            <button
              className="md:w-auto"
              key={i}
              onClick={() => handleClick(sm)}
            >
              <h1
                className={`md:pr-2 md:pl-2 text-left ml-auto md:text-base text-[0.7rem] px-[0.5rem] md:px-0 md:font-light font-normal tracking-widest hover:scale-x-90 transform transition-transform duration-300
                ${
                  sm === currentMenu
                    ? "text-LM dark:border-LM/30 border-LM border"
                    : ""
                } `}
              >
                {sm}
              </h1>
            </button>
          ))}
          {/* FLECHA */}
          <div className="md:block pl-2" onClick={handleArrowClick}>
            <Image
              className={`md:ml-2 hover:scale-90 cursor-pointer -rotate-90 ${
                currentMenu === "MOTIVACIÓN" && "rotate-90"
              } transform transition-transform duration-300 opacity-100 hover:opacity-50 `}
              width="30"
              height="30"
              src={img.fl_am}
              alt="img"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:w-2/3 justify-center mx-auto mt-10">
          {currentMenu === "CONOCEME" ? (
            <AboutMenu1 />
          ) : currentMenu === "RECORRIDO" ? (
            <AboutMenu2 />
          ) : currentMenu === "TOOLS" ? (
            <AboutMenu3 />
          ) : currentMenu === "MOTIVACIÓN" ? (
            <AboutMenu4 />
          ) : null}
        </div>
      </SlideUp>
    </section>
  );
};
