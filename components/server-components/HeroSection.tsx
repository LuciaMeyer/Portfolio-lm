import Image from "next/image";
import { img } from "../../public/images";

export const HeroSection = () => {
  return (
    <section id="home" className="flex-1 pt-36 md:pt-44 ">

      <div className="flex flex-col h-full md:flex-row md:justify-around md:mx-60 mx-10 md:items-center pb-20">
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
            <br />
            Frase slogan frase slogan frase slogan frase slogan frase slogan
            <br />
            Frase slogan frase slogan frase slogan frase slogan frase slogan
          </p>
        </div>

        <div className="mx-auto">
          <Image width="350" height="350" src={img.imglu1} alt="img" priority />
        </div>

      </div>
    </section>
  );
};
