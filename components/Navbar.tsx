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
  const [showParticles, setShowParticles] = useState(false);
  const isMobile = useContext(screenContext);

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
                className="mr-2 border-solid border py-1 px-2 w-36 border-TX/30 dark:border-stone-300/30 font-medium"
              >
                {`${!showParticles ? "MOSTRAR FONDO" : "OCULTAR FONDO"}`}
              </button>
              <span className="text-LM">|</span>
              <button
                onClick={() => handleMenuResposiveTheme(theme)}
                className="mr-2 ml-2 border-solid border py-1 px-2 w-36 border-TX/30 dark:border-stone-300/30 font-medium"
              >
                {`${theme === "dark" ? "MODO CLARO" : "MODO OSCURO"}`}
              </button>
            </div>
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  className={"hover:text-LM md:font-thin text-lg tracking-wider font-medium"}
                  to={item.page}
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
          <div className="flex md:ml-8 ml-4 cursor-pointer ">
            {isMobile && (section === "home" || section === "") ? (
              <div className="h-16"></div>
            ) : (
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={hanldeLogoClick}
                className='md:h-auto h-16'
              >
                <div>
                  <Image
                    className="md:my-4 md:mt-4 mt-2 md:w-full hover:scale-90 transform transition-all duration-300"
                    src={img.LM}
                    alt="LM"
                    width={38}
                    height={38}
                    priority
                  />
                </div>
              </Link>
            )}
          </div>
          {/* SECCIONES */}
          <div className="md:block hidden ml-32 leading-snug tracking-wide md:text-3xl text-4xl text-neutral-300 dark:text-neutral-600">
            {section === 'about'
              ? <span>Sobre Mi</span>
              : section === 'projects'
                ? <span>Proyectos</span>
                : section === 'resources'
                  ? <span>Recursos</span>
                  : section === 'contact'
                    ? <span>Contacto</span>
                    : <></>
            }
          </div>
          {/* ÍCONOS MENÚ  */}
          <motion.div
            className="relative cursor-pointer md:px-6 pr-2 "
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
                    className={`flex flex-col justify-between w-[25px] h-[14px] transform transition-all duration-300 ${navbar ? "rotate-[45deg] origin-center" : ""
                      }`}
                  >
                    <div
                      className={`dark:bg-stone-300 bg-TX h-[0.8px] rounded transform transition-all duration-300 ${navbar
                        ? "rotate-90 h-[1px] translate-y-[9px] origin-top delay-75"
                        : ""
                        }`}
                    ></div>

                    <div className="dark:bg-stone-300 bg-TX h-[0.8px] rounded"></div>

                    <div
                      className={`dark:bg-stone-300 bg-TX h-[0.8px] rounded transform transition-all duration-300 ${navbar ? "h-[0px]" : ""
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
