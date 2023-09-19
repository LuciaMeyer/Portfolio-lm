"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "../../public/images";

export const AboutMenu2 = () => {
  const images = [img.auxfondo1, img.auxfondo2, img.auxfondo3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="bg-red-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20">
        <div className="md:h-[25rem] overflow-y-auto max-h-[25rem]">
          TEXTO RECORRIDO
        </div>
      </div>
      <div className="flex justify-center">
        imagen
      </div>
    </>
  );
};
