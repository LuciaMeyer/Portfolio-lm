import portfolio from "@/public/portfolio.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { useContext,useEffect } from "react";
import { screenContext } from "@/context/screenContext";
import { img } from "@/public/images";

export const Portfolio = () => {
  const isMobile = useContext(screenContext);
  useEffect(()=>{
    window.scroll(0,0)
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="portfolio"
      className="flex flex-col md:w-3/5 md:mx-auto mx-6 md:mb-40 mb-20 mt-10"
    >
      {/* TÚTULO MOBILE */}
      <div className="md:hidden int:flex int:flex-col flex flex-col mb-9 bg-white dark:bg-BGD">
        <h2 className="md:hidden int:flex int:flex-col flex flex-col text-2xl font-bold text-LM">
          PORTFOLIO
        </h2>
        <span className="text-lg tracking-wide">One Page</span>
        <span className="text-xs tracking-wide dark:text-neutral-500 text-neutral-400">
          realizado: 26/08/2023 - 10/11/2023
        </span>
      </div>

      {/* IMG  + TÍTULO WEB*/}
      <div className="relative flex flex-col int:flex-col md:flex-row">
        <Image
          src={img.num4}
          alt="letsgo"
          width={150}
          height={150}
          className="absolute z-50 invert -top-14 md:-left-28 md:h-auto md:w-auto opacity-[0.15]
          int:hidden
          h-32 w-32 left-auto -right-7"
        />
        <Image
          src={img.num4}
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
              <Image src={portfolio} alt="portfolio" width={600} height={600} />
            </div>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 int:mb-9">
            <div className="md:mr-7 md:ml-0 mx-auto">
              <Image src={portfolio} alt="portfolio" width={600} height={600} />
            </div>
          </Atropos>
        )}

        {/* TÍTULO WEB */}
        <div className="md:w-1/2 int:w-auto flex flex-col justify-between bg-white dark:bg-BGD">
          <div className="md:flex int:hidden hidden items-center ">
            <span className="font-semibold text-LM text-2xl tracking-wide">
              PORTFOLIO -{" "}
            </span>
            <span className="text-xl tracking-wide">&nbsp;One Page</span>
          </div>
          <p className="text-justify text-lg">
            Desarrollé este proyecto junto a un grupo de compañeros en del
            cursado de la carrera
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Full Stack Developer. "}
            </span>
            Fue la entrega final con la cual nos
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" graduamos. "}
            </span>
            Es un
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" ecommerce de alquiler temporal de bicicletas, "}
            </span>
            accesorios y pack de aventuras según calendario y stock disponible.
          </p>
          <div className="flex md:justify-normal justify-around md:mt-0 mt-12">
            <Link
              href="https://github.com/LuciaMeyer/Portfolio-lm"
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
              href=""
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
        realizado: 26/08/2023 - 10/11/2023
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
