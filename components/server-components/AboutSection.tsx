import React from "react";
import Image from "next/image";
import { img } from "../../public/images";

export const AboutSection = () => {
  return (
    <section id="about" className="flex-1 pt-6 md:pt-20 pb-20">
      {/* TITULO PPAL */}
      <h1 className="text-center text-2xl md:pb-10 pb-8">
        Sobre Mi
        <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
      </h1>

      <div className="mx-10 md:mx-60 flex flex-col space-y-10 justify-center md:justify-around align-top md:space-x-0 md:space-y-0 md:flex-row md:text-left pb-20">
        {/* SUB-MENÚ + TEXTO */}
        <div className="md:w-1/2 pr-4 ">
          <div className="flex justify-between align-center">
            <div className="flex pb-8">
              <h1 className="text-left text-LM md:text-xl text-m font-medium pr-4 ">
                Conoceme
              </h1>
              <h1 className="text-left text-LM md:text-xl text-m font-medium pr-4 ">
                Recorrido
              </h1>
              <h1 className="text-left text-LM md:text-xl text-m font-medium pr-4 ">
                Visión
              </h1>
              <h1 className="text-left text-LM md:text-xl text-m font-medium pr-4 ">
                Valores
              </h1>
            </div>
            <div>
              <Image
                className="hover:scale-75 cursor-pointer -rotate-90 transform transition-transform duration-300 "
                width="30"
                height="30"
                src={img.flecha}
                alt="img"
                priority
              />
            </div>
          </div>

          <div className="mt-auto text-justify md:text-justify">
            <p>
              Soy{" "}
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {"Full Stack Developer"}
              </span>
              , con formación en
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {" Diseño Gráfico"}
              </span>
              , y experiencia en
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {" Marketing Digital,"}
              </span>{" "}
              con base en Rosario, Argentina.
            </p>
            <br />
            <p>
              Mi mayor interés dentro del mundo IT es la posibilidad de crear
              frente a grandes necesidades, soluciones simples e innovadoras.
            </p>
            <br />
            <p>
              Me gustan los desafíos y el aprendizaje continuo.​ Encontré en la
              programación la combinación perfecta entre varias de mis pasiones:
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {" creatividad"}
              </span>
              ,
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {" innovación"}
              </span>{" "}
              y
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                {" colaboración."}
              </span>
            </p>
            <br />
            <p>
              Creo en la importancia de no dejar de buscar el{" "}
              <span className="font-semibold dark:font-normal text-stone-700 dark:text-LM">
                crecimiento profesional y personal,
              </span>{" "}
              es lo que me mantiene en movimiento. Además de la motivación de
              pensar qué nuevos caminos y oportunidades me traerá esta carrera.
            </p>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="mx-auto">
          <Image src={img.aux1} alt="" width="400" height="400" className="" />
        </div>
      </div>
      <div className="py-0 h-96 bg-stone-200 dark:bg-stone-400"></div>
    </section>
  );
};
