"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { img } from "../assets/images";
import { SubMenu } from "./SubMenu";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="hidden md:flex">
        <SubMenu />
      </div>
      <div className="flex flex-col h-full md:flex-row md:justify-around mt-28 md:mt-60 md:mx-40 mx-8">
        <div className="mx-auto">
          <h1 className="leading-snug tracking-wide md:text-4xl text-2xl md:mb-2">
            Lucía Meyer
          </h1>
          <h1 className="leading-snug tracking-wide font-bold md:text-5xl text-3xl text-LM">
            Full Stack Developer
          </h1>
          <hr className="w-12 h-px my-6 bg-stone-300  dark:bg-stone-400 border-0" />

          <p className="relative -z-10 pb-9">
            Frase slogan frase slogan frase slogan frase slogan frase slogan
          </p>
        </div>

        <div className="mx-auto">
          <Image width="400" height="400" src={img.imglu1} alt="img" priority />
        </div>
      </div>

      <div className="py-0 h-36 bg-LMc dark:bg-stone-400">
        <Image
          className="md:hidden mx-auto pt-4"
          width="50"
          height="50"
          src={img.fl_am}
          alt="img"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
