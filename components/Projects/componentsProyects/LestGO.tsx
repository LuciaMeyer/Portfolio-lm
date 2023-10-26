import letsgo from "@/public/letsgo.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { img } from "@/public/images";

export const LetsGO = () => {
  const isMobile = useContext(screenContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="letsgo"
      className="flex flex-col md:w-3/5 md:mx-auto mx-6 md:mb-40 mb-20 mt-10"
    >
      {/* TÚTULO MOBILE */}
      <div className="md:hidden int:flex int:flex-col flex flex-col mb-9 bg-white dark:bg-BGD">
        <h2 className="md:hidden int:flex int:flex-col flex flex-col text-2xl font-bold text-LM">
          E-COMMERCE
        </h2>
        <span className="text-lg tracking-wide">lets GO</span>
        <span className="text-xs tracking-wide dark:text-neutral-500 text-neutral-400">
          realizado: 22/08/2022 - 22/09/2022
        </span>
      </div>

      {/* IMG  + TÍTULO WEB*/}
      <div className="relative flex flex-col int:flex-col md:flex-row">
        <Image
          src={img.num1}
          alt="letsgo"
          width={200}
          height={200}
          className="absolute z-50 invert -top-14 md:-left-28 md:h-auto md:w-auto opacity-40
          h-32 w-32 left-auto -right-7"
        />
        <Image
          src={img.num1}
          alt="letsgo"
          width={200}
          height={200}
          className="absolute -top-14 md:-left-28 md:h-auto md:w-auto opacity-40
          h-32 w-32 left-auto -right-7"
        />
        {isMobile ? (
          <>
            <div className="md:mr-7 md:ml-0 mx-auto mb-9">
              <Image src={letsgo} alt="letsgo" width={600} height={600} />
            </div>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 ">
            <div className="md:mr-7 md:ml-0 mx-auto">
              <Image src={letsgo} alt="letsgo" width={600} height={600} />
            </div>
          </Atropos>
        )}

        {/* TÍTULO WEB */}
        <div className="md:w-1/2 int:w-auto flex flex-col justify-between bg-white dark:bg-BGD">
          <div className="md:flex int:hidden hidden items-center ">
            <span className="font-semibold text-LM text-2xl tracking-wide">
              E-COMERCE -{" "}
            </span>
            <span className="text-xl tracking-wide">&nbsp;lets GO</span>
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
        realizado: 22/08/2022 - 22/09/2022
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
        <p className="text-start">
          › Autenticación:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Auth0
          </span>
          <br />› Notificaciones y mailing:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Socketio EmailJS
          </span>
          <br />› Almacenamiento multimedia:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Cloudinary6
          </span>
          <br />› Persistencia de datos:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            LocalStorage
          </span>
          <br />› Diseño responsive:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            CCSModules - MaterialUI Figma
          </span>
          <br />› Pasarela de pagos:{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            MercadoPago
          </span>
          <br />› Reviews a través de{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Posteo de Experiencias
          </span>
          <br />›{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Filtros y ordenamientos{" "}
          </span>
          combinados
          <br />›{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Bot{" "}
          </span>
          de ayuda al usuario
          <br />›{" "}
          <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
            Dashboard de administrador{" "}
          </span>
          completo
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
