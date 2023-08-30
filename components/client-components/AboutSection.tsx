"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";

const images = [img.aux1, img.aux2, img.aux3]; // Agrega las rutas de tus imágenes

export const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="about"
      className="flex-1 pt-6 md:pt-20 pb-20 relative overflow-hidden"
    >
      <h1 className="z-20 text-center text-2xl md:pb-10 pb-8 ">
        Sobre Mi
        <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
      </h1>

      <div className="-z-50 h-full w-1/2 md:absolute md:block hidden top-0 right-0 bg-right">
        <Image
          src={images[currentImageIndex]}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="h-full md:w-1/2 flex flex-col md:flex-row md:justify-around mx-10 md:pr-10 md:items-center pb-20">
        <div className="pr-4 md:pl-2 md:mr-10 md:ml-60 bg-white dark:bg-BGD md:pt-2 md:pr-2 md:pb-2">
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
                className="hover:scale-75 cursor-pointer -rotate-90 transform transition-transform duration-300 opacity-50 hover:opacity-100"
                width="30"
                height="30"
                src={img.fl_am}
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
            <br />
          </div>
        </div>
        <div className="md:hidden flex justify-center">
          <Image
            width="350"
            height="350"
            src={images[currentImageIndex]}
            alt="img"
            priority
          />
        </div>
      </div>
    </section>
  );
};

