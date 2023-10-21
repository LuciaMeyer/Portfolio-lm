"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { img } from "../../../../public/images";
import { screenContext } from "@/context/screenContext";
import { SoftSkillsPart1 } from './SoftSkillsPart1';
import { SoftSkillsPart2 } from "./SoftSkillsPart2";

export const SoftSkills = () => {
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <div className="flex md:hidden int:flex justify-center">
        <Image width={400} height={400} src={img.auxlu} alt="img" priority />
      </div>
      <div
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto "
      >
        {!isMobile && !showDiv ? (
          <SoftSkillsPart1 handleShowDiv={handleShowDiv} />
        ) : !isMobile && showDiv ? (
          <SoftSkillsPart2 handleShowDiv={handleShowDiv} />
        ) : isMobile ? (
          <>
            <SoftSkillsPart1 handleShowDiv={handleShowDiv} />
            <SoftSkillsPart2 handleShowDiv={handleShowDiv} />
          </>
        ) : (
          <></>
        )}
        <div className="md:flex int:hidden hidden mt-8 ml-7 md:w-1/2">
          <div>
            <Image
              width={600}
              height={600}
              src={img.auxfondo3}
              alt="Img"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
