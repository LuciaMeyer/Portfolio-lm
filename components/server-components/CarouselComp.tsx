'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { img } from "../../public/images";

export const CarouselComp = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [img.aux1, img.aux2, img.aux3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImg) => (prevImg + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevImg = () => {
    setCurrentImage((prevImg) => (prevImg - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImg) => (prevImg + 1) % images.length);
  };

  return (
    <div className="md:w-1/3">
      <div className="flex justify-center align-center">
        <div className="z-10 pt-2">
          <button
            className="mt-5 md:mt-0 mr-32 bg-stone-800/10 text-white px-4 py-2 rounded-full"
            onClick={handlePrevImg}
          >
            &lt;
          </button>
          <button
            className="mt-5 md:mt-0 ml-32 bg-stone-800/10 text-white px-4 py-2 rounded-full"
            onClick={handleNextImage}
          >
            &gt;
          </button>
        </div>
        {images.map((image, index) => (
          <Image
            key={index}
            width="400"
            height="400"
            src={image}
            alt="img"
            priority={index === currentImage}
            className={`absolute p-5 md:p-0 ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
