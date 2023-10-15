"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";
import { motion } from "framer-motion";

export const AboutKnowMe = () => {
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
      <div className="-z-50 h-full w-1/2 md:absolute md:block hidden top-10 right-0 bg-right mt-14">
        <Image
          src={images[currentImageIndex]}
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        h-full md:w-1/2
        flex flex-col md:flex-row md:justify-end"
      >
        <div className="space-y-6 md:w-1/2 md:mt-14 md:mr-14">
          <p className="">
            Soy{" "}
            <span className=" font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {"Full Stack Developer"}
            </span>
            , con formación en
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" Diseño Gráfico "}
            </span>
            y
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" Marketing Digital."}
            </span>{" "}
            Con base en Rosario, Argentina.
          </p>
          <p className="">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
          <p className="">
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" Encuentro en la programación "}
            </span>
            la combinación perfecta entre varias de mis pasiones:
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" creatividad"}
            </span>
            ,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" innovación"}
            </span>{" "}
            y
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" colaboración."}
            </span>
          </p>
          <p className="">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM/80">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
        </div>
      </motion.div>

      <div className="flex md:hidden justify-center">
        <Image
          width="500"
          height="500"
          src={img.auxlu}
          alt="img"
          priority
          className="border-2 border-solid"
        />
      </div>
    </>
  );
};
