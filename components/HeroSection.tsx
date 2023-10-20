"use client";
import Image from "next/image";
import { img } from "../public/images";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll/modules";
import { useContext, useEffect } from "react";
import { sectionContext } from "@/context/sectionContext";

interface HeroSectionProps {
  refHero: React.RefObject<HTMLElement>;
};



export const HeroSection:React.FC<HeroSectionProps> = ({ refHero }) => {

  const { setSection } = useContext(sectionContext)

  useEffect(() => {
    setSection('home')
  }, [])


  return (
    <>
      <section
        ref={refHero}
        id="home"
        className="flex-1 my-auto md:pt-40 pt-20 pb-40"
        // md:pt-64 md:mb-[30rem] mb-60 pt-24
      >
        <div className="flex flex-col md:w-1/2 h-full md:flex-row items-center md:justify-between md:mx-auto mx-6 md:items-center content-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="leading-snug tracking-wide text-3xl md:mb-2 ">
              Lucía Meyer
            </h1>

            <motion.h3
              className="leading-snug tracking-wide font-bold md:text-4xl text-4xl text-LM"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <Typewriter
                options={{ cursor: "|", delay: 75, loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Digital Design")
                    .pauseFor(600)
                    .deleteAll(20)
                    .typeString("Dev Frontend")
                    .pauseFor(600)
                    .deleteChars(8)
                    .typeString("Backend")
                    .pauseFor(600)
                    .deleteChars(7)
                    .typeString("Full Stack")
                    .pauseFor(600)
                    .pauseFor(1000)
                    .start();
                }}
              />
            </motion.h3>

            <hr className="w-8 h-px md:my-10 my-6 bg-stone-300  dark:bg-stone-400 border-0" />
            <p className="relative md:mr-20 -z-10 md:pb-10 pb-5 md:text-lg text-xl">
              Creo aplicaciones web y mobile. Combino desarrollo eficiente,
              diseño creativo y estrategias de marketing para lograr los mejores resultados.
            </p>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer bg-white dark:bg-BGD text-black text-[.7rem] tracking-wider border-solid border pb-2.5 pt-2 px-4 border-TX/50 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-300/90 dark:hover:bg-neutral-700 hover:bg-neutral-200"
            >
              SABER MÁS
            </Link>
          </motion.div>

          {/* imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="md:mt-0 mt-4"
          >
            <Image
              width={500}
              height={500}
              src={img.imglu}
              alt="img"
              priority
              className="md:h-auto md:w-auto h-5/6 w-5/6 transform transition-transform duration-1000 hover:scale-110 md:mx-0 mx-auto md:mt-0 mt-1"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
