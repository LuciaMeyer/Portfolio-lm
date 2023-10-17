"use client";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import Image from "next/image";
import { img } from "../public/images";
import { CiDark } from "react-icons/ci";
import { ParticlesComponents } from "./ParticlesComponents";
import { CiBrightnessDown } from "react-icons/ci";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import { screenContext } from "../context/screenContext";
import { sectionContext } from "@/context/sectionContext";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "INICIO",
    page: "home",
  },
  {
    label: "SOBRE MI",
    page: "about",
  },
  {
    label: "PROYECTOS",
    page: "projects",
  },
  {
    label: "RECURSOS",
    page: "resources",
  },
  {
    label: "CONTACTO",
    page: "contact",
  },
];

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  // const [section, setSection] = useState('home');
  const [showParticles, setShowParticles] = useState(true);
  const screenSize = useContext(screenContext);
  const { screenWidth } = screenSize;

  const objetcContext = useContext(sectionContext);
  const section = objetcContext.section;
  const setSection = objetcContext.setSection;

  const handleMenuClick = (page: string) => {
    setNavbar(!navbar);
    setSection(page);
  };

  const handleMenuResposiveParticles = () => {
    setShowParticles(!showParticles);
    setNavbar(!navbar);
  };

  const handleMenuResposiveTheme = (theme: string | undefined) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setNavbar(!navbar);
  };

  const hanldeLogoClick = () => {
    window.scrollTo(0, 0);
    setSection("home");
  };

  const show = {
    transition: { duration: 0.7 },
    y: 0,
    scale: 1,
  };

  const hide = {
    transition: { duration: 1.5 },
    y: -1000,
    scale: 1,
  };

  return (
    <>
      <Icons section={section} setSection={setSection} />
      {showParticles && (
        <div className="-z-50 absolute h-96">
          <ParticlesComponents />
        </div>
      )}
      <header className="w-full mx-auto fixed top-0 z-30 md:shadow-2xl md:shadow-neutral-200 dark:shadow-neutral-900 dark:bg-BGD/50">
        {/* TEXTO MENÚ */}
        <motion.div
          initial={{ scale: 0 }}
          animate={navbar ? show : hide}
          className="h-0"
        >
          <div
            className="flex flex-col items-center space-y-12 cursor-pointer md:pt-32 pt-20 m-0 h-screen
            backdrop-blur-md f bg-slate-100/60 dark:bg-BGD/80"
          >
            <div className="md:hidden flex mt-12 text-sm items-center">
              <button
                onClick={handleMenuResposiveParticles}
                className="mr-2 border-solid border py-1 px-2 w-32 border-TX/30 dark:border-stone-300/30"
              >
                {`${!showParticles ? "MOSTRAR FONDO" : "OCULTAR FONDO"}`}
              </button>
              <span className="text-LM">|</span>
              <button
                onClick={() => handleMenuResposiveTheme(theme)}
                className="mr-2 ml-2 border-solid border py-1 px-2 w-32 border-TX/30 dark:border-stone-300/30"
              >
                {`${theme === "dark" ? "MODO CLARO" : "MODO OSCURO"}`}
              </button>
            </div>
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className={"hover:text-LM font-thin text-lg tracking-wider"}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={() => handleMenuClick(item.page)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        <div className="flex items-center justify-between backdrop-blur-md ">
          {/* LOGO */}
          <div className="flex md:mx-auto md:pl-48 ml-7 cursor-pointer pb-2">
            {screenWidth < 768 && (section === "home" || section === "") ? (
              <div className="h-16"></div>
            ) : (
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={hanldeLogoClick}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{ rotate: 360, transition: { duration: 0.25 } }}
                >
                  <Image
                    className="md:my-4 mt-6 mb-4 md:w-full"
                    src={img.LM}
                    alt="LM"
                    width={40}
                    height={40}
                    priority
                  />
                </motion.div>
              </Link>
            )}
          </div>

          {/* ÍCONOS MENÚ  */}
          <motion.div
            className="relative my-auto cursor-pointer md:px-6 px-4 py-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex items-center justify-between transition-all">
              {/* MENÚ HAMBURGESA */}
              <button
                onClick={() => setNavbar(!navbar)}
                className="relative group"
              >
                <div className="relative mr-4 flex items-center justify-center rounded-full transition-transform duration-500 hover:scale-90 ">
                  <div
                    className={`flex flex-col justify-between w-[25px] h-[14px] transform transition-all duration-300 ${
                      navbar ? "rotate-[45deg] origin-center" : ""
                    }`}
                  >
                    <div
                      className={`dark:bg-stone-300 bg-TX h-[0.8px] rounded transform transition-all duration-300 ${
                        navbar
                          ? "rotate-90 h-[1px] translate-y-[9px] origin-top delay-75"
                          : ""
                      }`}
                    ></div>

                    <div className="dark:bg-stone-300 bg-TX h-[0.8px] rounded"></div>

                    <div
                      className={`dark:bg-stone-300 bg-TX h-[0.8px] rounded transform transition-all duration-300 ${
                        navbar ? "h-[0px]" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </button>

              {/* SOL Y LUNA */}
              <div className="md:flex hidden mr-2 relative items-center justify-center rounded-full w-[40px] h-[40px] transition-transform duration-500 hover:scale-90 ">
                {theme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-inherit text-TX dark:text-stone-300"
                  >
                    <CiBrightnessDown size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-inherit text-TX dark:text-stone-300"
                  >
                    <CiDark size={22} />
                  </button>
                )}
              </div>
              {/* FONDO */}
              <div className="md:flex hidden mr-8 relative transition-transform duration-500 hover:scale-90">
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className="bg-inherit text-TX dark:text-stone-300 text-xs tracking-widest w-[40px] h-[40px]"
                >
                  {`${!showParticles ? "PLAY" : "PAUSE"}`}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};
