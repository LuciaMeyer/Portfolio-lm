"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";

export const AboutMenu1 = () => {
  const images = [img.aux1, img.aux2, img.aux3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-red-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20">
      <div
    className="md:h-[25rem]"
    style={{
      overflowY: 'auto',
      maxHeight: '25rem',
      scrollbarWidth: 'thin',
      scrollbarColor: 'gray-400 gray-100',
    }}
  >
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
          <br />
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          width="500"
          height="500"
          src={images[currentImageIndex]}
          alt="img"
          priority
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
    </>
  );
};
