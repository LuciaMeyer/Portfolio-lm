import React, { useContext } from "react";
import { screenContext } from '@/context/screenContext';

export const AboutJourneyContent1 = ({handleShowDiv}:any) => {
  const isMobile = useContext(screenContext);

  return (
    <div className="space-y-6 md:mt-8 md:mr-7 md:w-1/2">
      <p>
        Estudié
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" Arquitectura "}
        </span>
        y después de 5 años descubrí que lo que más me gustaba de la carrera era
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" proyectar y crear "}
        </span>
        a través de
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" herramientas digitales."}
        </span>
      </p>

      <p>
        Me capacité en
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {" diseño, comunicación, marketing y edición audiovisual. "}
        </span>
      </p>

      <p>
        Desarrollé éstas habilidades en varias empresas donde además aprendí a
        <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
          {
            " optimizar procesos, liderar proyectos, coordinar equipos y trabajar con metodologías ágiles."
          }{" "}
        </span>
        {!isMobile && (
          <>
            <br />
            <div className="md:mt-6 mt-4 flex items-center justify-between">
              <button
                onClick={handleShowDiv}
                className="my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200"
              >
                SEGUIR LEYENDO
              </button>
              <button onClick={handleShowDiv}>
                <span className="text-sm dark:text-stone-400">1 / 2</span>
              </button>
            </div>
          </>
        )}
      </p>
    </div>
  );
};
