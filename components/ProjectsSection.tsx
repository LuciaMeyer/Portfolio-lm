"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import videgames from "@/public/videogames.gif";
import letsgo from "@/public/letsgo.gif";
import gpt from "@/public/gpt.gif";
import portfolio from "@/public/portfolio.gif";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { screenContext } from "@/context/screenContext";
import { ProjectsContent } from "./ProjectsContent";

interface ProjectsSectionProps {
  refProjects: React.RefObject<HTMLElement>;
}

const projects = [
  {
    name: "E-COMMERCE",
    description:
      "E-Commerce que ofrece el servicio de alquiler de bicicletas, accesorios y packs de aventuras según calendario y stock disponible. Desarrollado con PERN stack",
    image: letsgo,
    github: "https://github.com/LetTeam22/lets-GO",
    link: "https://pf-let.vercel.app/",
  },
  {
    name: "VIDEOGAMES",
    description:
      "SPA de videojuegos que consume datos de una api externa e incluye filtros y ordenamientos acumulativos, búsquedas por nombre, creación y edición de videojuegos. Desarrollado con PERN stack",
    image: videgames,
    github: "https://github.com/LuciaMeyer/Videogames_app",
    link: "https://cliente-videogames.onrender.com/",
  },
  {
    name: "API GPT OPEN AI",
    description:
      "Inclusión de las funcionalidades de API en un proyecto de e-Commerce para optimizar el dashboard del administrador, a través de ciertos prompt estratégicos.",
    image: gpt,
    github: "",
    link: "",
  },
  {
    name: "PORTFOLIO",
    description:
      "Aplicación web con el objetivo de incorporar nuevas tecnologías como Next.js 13, TaildwindCC y Framer Motion ",
    image: portfolio,
    github: "",
    link: "",
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  refProjects,
}) => {
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  const handleShowDiv = () => {
    setShowDiv(true);
    setTimeout(() => {
      setShowDiv(false);
    }, 10000);
  };

  const show = {
    transition: { duration: 1 },
    opacity: 1,
  };

  const hide = {
    transition: { duration: 1 },
    opacity: 0,
  };

  return (
    <section
      ref={refProjects}
      id="projects"
      className="flex-1 pt-6 md:pt-10 md:mb-[30rem] pb-60"
    >
      <div className="block md:hidden">
        <div className="md:pb-10 pb-8">
          <SlideUp offset="-300px 0px -300px 0px">
            <h1 className="text-center text-2xl">
              Proyectos
              <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
            </h1>
          </SlideUp>
        </div>
      </div>

      <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-4 pb-20 mx-10 md:mx-auto md:w-2/3">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                {!isMobile ? (
                  <Atropos className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:space-x-12 pb-8 align-center">
                    <ProjectsContent project={project} />
                  </Atropos>
                ) : (
                  <div className="relative flex flex-col animate-slideUpCubiBezier animation-delay-2 pb-8 align-center">
                    <ProjectsContent project={project} />
                  </div>
                )}
              </SlideUp>
            </div>
          );
        })}
        <div className="relative flex flex-col">
          <button
            onClick={handleShowDiv}
            className="cursor-pointer text-black w-28 h-10 text-[.7rem] tracking-wider border-solid border border-TX/50 dark:border-stone-300/30  dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200 "
          >
            MÁS PROYECTOS
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={showDiv ? show : hide}
            className="absolute top-16"
          >
            <h4 className="mb-4">En construcción...</h4>
            <span>
              Estoy trabajando en la presentación de varios proyectos,
              incluyendo los de diseño. Volvé dentro de poco para verlos!
              &#128522;{" "}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
