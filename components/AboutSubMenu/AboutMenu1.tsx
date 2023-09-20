"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-red-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20"
      >
        <div className="md:h-[25rem]">
          <p className="pb-4 md:text-lg text-sm">
            Soy{" "}
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {"Full Stack Developer"}
            </span>
            , con formación en
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Diseño Gráfico"}
            </span>
            , y experiencia en
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Marketing Digital,"}
            </span>{" "}
            con base en Rosario, Argentina.
          </p>
          <br />
          <p className="pb-4 md:text-lg text-sm">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
          <br />
          <p className="pb-4 md:text-lg text-sm">
            Me gustan los desafíos y el aprendizaje continuo.
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Encontré en la programación "}
            </span>
            la combinación perfecta entre varias de mis pasiones:
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" creatividad"}
            </span>
            ,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" innovación"}
            </span>{" "}
            y
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" colaboración."}
            </span>
          </p>
          <br />
        </div>
      </motion.div>
      <div className="flex justify-center">
        <Image
          width="500"
          height="500"
          src={images[currentImageIndex]}
          alt="img"
          priority
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};
