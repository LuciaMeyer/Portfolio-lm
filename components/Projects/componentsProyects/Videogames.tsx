import videgames from "@/public/videogames.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { img } from "@/public/images";

export const Videogames = () => {
  const isMobile = useContext(screenContext);

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
        <span className="text-lg tracking-wide">Single Page Application</span>
        <span className="text-xs tracking-wide dark:text-neutral-500 text-neutral-400">
          realizado: 15/07/2022 - 16/08/2022
        </span>
      </div>

      {/* IMG  + TÍTULO WEB*/}
      <div className="flex flex-col int:flex-col md:flex-row">
        <Image
          src={img.num2}
          alt="letsgo"
          width={200}
          height={200}
          className="absolute z-50 invert -top-14 md:-left-28 md:h-auto md:w-auto opacity-40
          h-32 w-32 left-auto -right-7"
        />
        <Image
          src={img.num2}
          alt="letsgo"
          width={200}
          height={200}
          className="absolute -top-14 md:-left-28 md:h-auto md:w-auto opacity-40
          h-32 w-32 left-auto -right-7"
        />---
        {isMobile ? (
          <>
            <div className="md:mr-7 md:ml-0 mx-auto mb-9">
              <Image src={videgames} alt="videgames" width={600} height={600} />
            </div>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 ">
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
            <span className="text-xl tracking-wide">
              &nbsp;Single Page Application
            </span>
          </div>
          <p className="text-justify text-lg">
            Esta
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" SPA "}
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
              href="https://pf-let.vercel.app/"
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
              href="https://lnkd.in/dW2fpFeW"
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
              href="https://bit.ly/3WLbIAm"
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
          En este desarrollo debíamos poner en práctica todo lo aprendido en el
          curso, construyendo un proyecto del mundo real con metodologías y
          herramientas ágiles, bajo un enfoque de aprendizaje colaborativo y
          poniendo a prueba las habilidades de trabajo en equipo.
        </p>
        <p>
          Quisimos aportar valor agregado al proyecto, a través de fomentar la
          movilidad sustentable para el cuidado del medio ambiente y la salud.
          Sumamos estos objetivos a la premisa de lograr un funcionamiento del
          sitio intuitivo y rápido, para garantizar una buena experiencia de
          usuario.
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
            {" React - Redux "}
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
            Incluye
          </span>
        </p>
        <p>
          › Autenticación ⇢ Auth0
          <br />
          › Notificaciones y mailing ⇢ Socketio EmailJS
          <br />
          › Almacenamiento multimedia ⇢ Cloudinary
          <br />
          › Persistencia de datos ⇢ LocalStorage
          <br />
          › Diseño responsive ⇢ CCSModules - MaterialUI Figma
          <br />
          › Pasarela de pagos ⇢ MercadoPago
          <br />
          › Reviews a través de posteo de experiencias
          <br />
          › Filtros y ordenamientos combinados
          <br />
          › Bot de ayuda al usuario
          <br />
          › Dashboard de administrador completo
          <br />
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Integrantes
          </span>
        </p>
        <p>
          › Nicolás Balbi <br />
          › Soledad Dato <br />
          › Máximo Tovar <br />
          › Felipe Jure <br />
          › Juan Martin Silva <br />
          › Leandro Pappalardo <br />› Meyer Lucía
        </p>
      </div>
    </motion.section>
  );
};
