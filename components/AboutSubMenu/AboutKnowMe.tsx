"use client";
// import { useEffect, useState } from 'react';
import Image from "next/image";
import { img } from "../../public/images";
import { useEffect } from "react";

export const AboutKnowMe = ( { topSection } : any ) => {

  // const images = [img.aux1, img.aux2, img.aux3];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(()=>{
    const adjustedTop = window.scrollY + topSection.top - 8 * 16;
    window.scrollTo({
      top: adjustedTop,
      behavior: 'smooth'
    });
  },[topSection.click])


  return (
    <>
      <div
        className="flex md:hidden justify-center"
      >
        <Image width={400} height={400} src={img.auxlu} alt="img" priority />
      </div>
      <div
        className="bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
         md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto"
      >
        <div className="space-y-6 md:mt-14 md:mr-7 md:w-1/2">
          <p className="">
            Soy{" "}
            <span className=" font-semibold dark:font-light text-stone-700 dark:text-LM">
              {"Full Stack Developer"}
            </span>
            , con formación en
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Diseño Gráfico "}
            </span>
            y
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Marketing Digital."}
            </span>{" "}
            Con base en Rosario, Argentina.
          </p>
          <p className="">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
          <p className="">
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Encuentro en la programación "}
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
          <p className="">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
          <p className="">
            Mi mayor interés dentro del
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" mundo IT "}
            </span>{" "}
            es la posibilidad de crear frente a grandes necesidades,
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" soluciones simples e innovadoras. "}
            </span>{" "}
          </p>
        </div>
        <div className="md:flex hidden mt-14 ml-7 md:w-1/2">
          <Image
            width={600}
            height={600}
            src={img.aux1}
            alt="Img"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};
