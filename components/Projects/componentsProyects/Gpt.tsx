import gpt from "@/public/gpt.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { screenContext } from "@/context/screenContext";
import { img } from "@/public/images";

export const Gpt = () => {
  const isMobile = useContext(screenContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="gpt"
      className="flex flex-col md:w-3/5 md:mx-auto mx-6 md:mb-40 mb-20 mt-10"
    >
      {/* TÚTULO MOBILE */}
      <div className="md:hidden int:flex int:flex-col flex flex-col mb-9 bg-white dark:bg-BGD">
        <h2 className="md:hidden int:flex int:flex-col flex flex-col text-2xl font-bold text-LM">
          API GPT OPEN AI
        </h2>
        <span className="text-lg tracking-wide">Práctica</span>
        <span className="text-xs tracking-wide dark:text-neutral-500 text-neutral-400">
          realizado: mayo 2023
        </span>
      </div>

      {/* IMG  + TÍTULO WEB*/}
      <div className="relative flex flex-col int:flex-col md:flex-row">
        <Image
          src={img.num3}
          alt="letsgo"
          width={150}
          height={150}
          className="absolute z-50 invert -top-14 md:-left-28 md:h-auto md:w-auto opacity-[0.15]
          int:hidden
          h-32 w-32 left-auto -right-7"
        />
        <Image
          src={img.num3}
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
              <video
                width="560"
                height="315"
                autoPlay
                loop
                controls
                className="border border-neutral-300 dark:border-neutral-700"
              >
                <source src={img.vidgpt} type="video/mp4" />
              </video>
            </div>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 int:mb-9">
            <div className="md:mr-7 md:ml-0 mx-auto">
              <video
                width="560"
                height="315"
                autoPlay
                loop
                controls
                className="border border-neutral-300 dark:border-neutral-700"
              >
                <source src={img.vidgpt} type="video/mp4" />
              </video>
            </div>
          </Atropos>
        )}

        {/* TÍTULO WEB */}
        <div className="md:w-1/2 int:w-auto flex flex-col justify-between bg-white dark:bg-BGD">
          <div className="md:flex int:hidden hidden items-center ">
            <span className="font-semibold text-LM text-2xl tracking-wide">
              API GPT OPEN AI -{" "}
            </span>
            <span className="text-xl tracking-wide">&nbsp;Práctica</span>
          </div>
          <p className="text-justify text-lg">
            En esta práctica decidimos estudiar el código de la
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" API del modelo de lenguaje GPT, "}
            </span>
            proporcionado por
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" OpenAI, "}
            </span>
            y aplicarlo a un proyecto de ecommerce existente. El desafío
            consistió en implementar
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" nuevas funciones "}
            </span>
            en el panel de administración con el propósito de
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" mejorar la gestión de la información "}
            </span>
            y la toma de decisiones de negocio.
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
        realizado: mayo 2023
      </span>

      <div className="md:w-1/2 int:w-auto space-y-7 mt-10 text-justify bg-white dark:bg-BGD">
        <span className="text-xl tracking-wide font-semibold text-LM">
          Detalle
        </span>
        <p>
          Todas las Inteligencias Artificiales, y en especial el modelo GPT,
          despiertan mucho interés en nosotros. Por eso en un principio, hicimos
          el curso de DeepLearning.AI: &quot;Prompt Engineering for
          Developers&quot;. Luego, estudiamos la API del modelo y por último
          decidimos probar su potencia en un proyecto que habíamos desarrollado
          recientemente.
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Primeros pasos
          </span>
        </p>
        <p>
          1) Identificar, según el alcance de la IA, las funcionalidades que
          mejor se adapten al proyecto.
          <br />
          2) Definir y confeccionar los prompts estratégicos para cada caso.
          <br />
          3) Elegir la temperatura según la necesidad de respuesta. Teniendo en
          cuenta que al usar valores bajos, las respuestas son más precisas pero
          menos creativas, y al usar valores altos, las respuestas son variadas
          pero imprecisas.
          <br />
          4) Considerar el tipo de estructura de datos que devuelve la API en
          cada solicitud para poder manipularla de forma correcta.
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Features incorporadas
          </span>
        </p>
        <p>
          El sitio permite que el usuario interactúe de dos
          formas:
          <br/>
          - Realizando un posteo luego de haber experimentado el servicio.
          <br/>
          - Enviando un mensaje de contacto a la empresa a través de un
          formulario de contacto.
          <br/>
          Esta información la procesamos desde nuestro BackEnd con
          GPT y le pedimos implementar 4 funcionalidades que luego
          reflejamos en el panel del administrador.
        </p>
        <p>
          ⇢ RESUMEN del texto en 3 palabras, para facilitar la visibilidad e
          identificar rápidamente la idea principal.
          <br />
          ⇢ Identificar el IDIOMA y TRADUCIRLO en caso de ser necesario.
          <br />
          ⇢ Evaluar el SENTIMIENTO del texto, y en el caso de ser negativo,
          tener un llamado a la acción por parte de los administradores.
          <br />
          ⇢ Reconocer si un mensaje necesita o no una RESPUESTA y agilizar la
          misma.
          <br />⇢ Corrección de GRAMÁTICA y ORTOGRAFÍA.
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Integrantes
          </span>
        </p>
        <p>
          › Felipe Jure <br />› Meyer Lucía
        </p>
      </div>
    </motion.section>
  );
};
