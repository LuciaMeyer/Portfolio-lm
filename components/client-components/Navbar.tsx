"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { img } from "../../public/images";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { Icons } from "../server-components/Icons";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Sobre mi",
    page: "about",
  },
  {
    label: "Projectos",
    page: "projects",
  },
  {
    label: "Recursos",
    page: "resurces",
  },
  {
    label: "Contacto",
    page: "contact",
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const [section, setSection] = useState("home");


  const handleClick = (page: string) => {
    if (window.innerWidth < 768) setNavbar(!navbar);
    setSection(page);
  };

  return (
    <>
      <Icons section={section} setSection={setSection} />
      <header
        className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-30 shadow-2xl bg-slate-100/60 dark:bg-BGD/80 shadow-gray-200 dark:shadow-stone-700  
      dark:border-stone-600 backdrop-blur-md"
      >
        {/* LOGO E ÍCONOS MENÚ */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex md:mx-auto md:pl-20 ml-7 cursor-pointer pb-2">
            <Link to="home">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ rotate: 360, transition: { duration: 0.25 } }}
              >
                <Image
                  className="md:my-4 md:w-full"
                  src={img.LM}
                  alt="LM"
                  width={40}
                  height={40}
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* ÍCONOS MENÚ  */}
          <motion.div className="relative my-auto md:right-1/4 mr-8 md:-mr-4 cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-between py-3 transition-all">
              <div className="">
                <button
                  className="py-2 px-6 text-LM file:placeholder:rounded-md outline-none transform transition-transform duration-300 hover:scale-75"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                </button>
              </div>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-inherit text-LM transform transition-transform duration-300 hover:scale-75"
                >
                  <BsSun size={22} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-inherit text-LM transform transition-transform duration-300 hover:scale-75"
                >
                  <HiOutlineMoon size={22} />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* TEXTO MENÚ */}
        <div
          className={`cursor-pointer pb-12 pt-12 pl-8
          md:pb-4 md:mt-0 md:pt-0 ${navbar ? "md:block block" : "md:hidden hidden"
            }`}
        >
          <div className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className={"block lg:inline-block hover:text-LM hover:font-medium"}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => handleClick(item.page)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};
