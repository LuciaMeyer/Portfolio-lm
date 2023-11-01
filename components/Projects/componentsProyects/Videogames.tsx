import videgames from "@/public/videogames.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { screenContext } from "@/context/screenContext";
import { img } from "@/public/images";

export const Videogames = () => {
  const isMobile = useContext(screenContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <motion.section
      id="videgames"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:w-3/5 md:mx-auto mx-6 md:mb-40 mb-20 mt-10"
    >
      {/* TÚTULO MOBILE */}
      <div className="md:hidden int:flex int:flex-col flex flex-col mb-9 bg-white dark:bg-BGD">
        <h2 className="md:hidden int:flex int:flex-col flex flex-col text-2xl font-bold text-LM">
          VIDEOGAMES
        </h2>
        <span className="text-lg tracking-wide">SPA</span>
        <span className="text-xs tracking-wide dark:text-neutral-500 text-neutral-400">
          realizado: 15/07/2022 - 16/08/2022
        </span>
      </div>

      {/* IMG  + TÍTULO WEB*/}
      <div className="relative flex flex-col int:flex-col md:flex-row">
        <Image
          src={img.num2}
          alt="letsgo"
          width={150}
          height={150}
          className="absolute z-50 invert -top-14 md:-left-28 md:h-auto md:w-auto opacity-[0.15]
          int:hidden
          h-32 w-32 left-auto -right-7"
        />
        <Image
          src={img.num2}
          alt="letsgo"
          width={150}
          height={150}
          className="absolute -top-14 md:-left-28 md:h-auto md:w-auto opacity-[0.15]
          int:hidden
          h-32 w-32 left-auto -right-7"
        />
        {isMobile ? (
          <>
            <div className="md:mr-7 md:ml-0 mx-auto mb-9">
              <Image src={videgames} alt="videgames" width={600} height={600} />
            </div>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 int:mb-9">
            <div className="md:mr-7 md:ml-0 mx-auto">
              <Image src={videgames} alt="videgames" width={600} height={600} />
            </div>
          </Atropos>
        )}

        {/* TÍTULO WEB */}
        <div className="md:w-1/2 int:w-auto flex flex-col justify-between bg-white dark:bg-BGD">
          <div className="md:flex int:hidden hidden items-center ">
            <span className="font-semibold text-LM text-2xl tracking-wide">
              VIDEOGAMES -{" "}
            </span>
            <span className="text-xl tracking-wide">&nbsp;SPA</span>
          </div>
          <p className="text-justify text-lg">
            Esta
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Single Page Application "}
            </span>
            la desarrollé como parte del cursado de la carrera de
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Full Stack Developer "}
            </span>
            en la etapa de
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Proyecto Individual. "}
            </span>
            Es una aplicación web que consume datos de una
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" API externa "}
            </span>
            y consultas a una
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" base de datos propia. "}
            </span>
          </p>
          <div className="flex md:justify-normal justify-around md:mt-0 mt-12">
            <Link
              href="https://cliente-videogames.onrender.com/"
              target="_blank"
              className="mr-4 flex items-center justify-center
              cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
              w-24 h-9 px-4 
              border-solid border border-TX/50 dark:border-stone-300/50
              transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              WEB
            </Link>
            <Link
              href="https://github.com/LuciaMeyer/Videogames_app"
              target="_blank"
              className="mr-4 flex items-center justify-center
              cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
              w-24 h-9 px-4 
              border-solid border border-TX/50 dark:border-stone-300/50
              transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              CÓDIGO
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=eN4L032QNhw"
              target="_blank"
              className="flex items-center justify-center
              cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
              w-24 h-9 px-4 
              border-solid border border-TX/50 dark:border-stone-300/50
              transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              VIDEO
            </Link>
          </div>
        </div>
      </div>

      <span className="md:block hidden md:text-sm text-xs tracking-wide mt-2 dark:text-neutral-500 text-neutral-400">
        realizado: 15/07/2022 - 16/08/2022
      </span>

      <div className="md:w-1/2 int:w-auto space-y-7 mt-10 text-justify bg-white dark:bg-BGD">
        <span className="text-xl tracking-wide font-semibold text-LM">
          Detalle
        </span>
        <p>
          Después de completar los 4 módulos del Bootcamp:
          <span className="font-normal dark:font-light italic">
          {" Fundamentos - Front End - Back End - Base de Datos, "}
          </span>
          era necesario aplicar lo aprendido en un Proyecto Individual creado
          desde cero. Los objetivos eran consolidar los conceptos, adoptar
          mejores prácticas y familiarizarse con el flujo de trabajo de GIT.
        </p>
        <p>
          La idea principal consistía en desarrollar una aplicación que mostrara
          un listado de 100 videojuegos presentados en &quot;cards&quot;, organizados
          mediante paginación, y con información esencial de cada uno. Para
          acceder a los datos debíamos conectarnos a la API externa RAWG, y
          cumplir con varias features mencionadas debajo.
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Tecnologías
          </span>
        </p>
        <p>
          › Lenguaje:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            {" JavaScript "}
          </span>
          <br />› Front:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            {" React - Redux - CSS puro"}
          </span>
          <br />› Back:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            {" Node.js - Express "}
          </span>
          <br />› Base de datos:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            {" PostgreSQL - Sequelize "}
          </span>
          <br />
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Features
          </span>
        </p>
        <p>
          › Paginado
          <br />
          › Filtros acumulativos
          <br />
          › Ordenamientos ascendentes y descendentes
          <br />
          › Sección con información detallada
          <br />
          › Búsqueda por nombre
          <br />
          › Formulario controlado para la creación de nuevos videojuegos
          <br />
          › Funcionalidad para modificar o eliminar los creados
          <br />
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Desarrollado por
          </span>
        </p>
        <p>› Meyer Lucía</p>
      </div>
    </motion.section>
  );
};
