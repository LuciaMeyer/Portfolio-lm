import portfolio from "@/public/portfolio.gif";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";
import { useContext } from "react";
import { screenContext } from "@/context/screenContext";
import { useRef, useEffect } from 'react';

export const Portfolio = () => {
  const isMobile = useContext(screenContext);
  const refPortfolio = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fragment = window.location.hash;
    if (refPortfolio.current && fragment === '#portfolio') {
      const offset = -1000;
      const top = refPortfolio.current.offsetTop + offset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section
      ref={refPortfolio}
      id="portfolio"
      className="flex flex-col md:w-2/3 md:mx-auto mx-6 md:mb-40 mb-20"
    >
      <div className="md:hidden int:flex int:flex-col flex flex-col mb-6">
        <span className="font-semibold text-LM text-2xl tracking-wide">
         PORTFOLIO LM
        </span>
        <span className="text-xl tracking-wide">One-Page</span>
      </div>
      <div className="flex flex-col int:flex-col md:flex-row">
        {isMobile ? (
          <>
            <div className="md:mr-7 md:ml-0 mx-auto">
              <Image src={portfolio} alt="portfolio" width={600} height={600} />
            </div>
            <span className="md:block hidden md:text-sm text-xs tracking-wide">
              realizado: ver fecha
            </span>
          </>
        ) : (
          <Atropos className="hover:scale-90 transform transition-transform duration-300 ">
            <div className="md:mr-7 md:ml-0 mx-auto">
              <Image src={portfolio} alt="portfolio" width={600} height={600} />
            </div>
          </Atropos>
        )}
        <div className="space-y-6 md:w-1/2 int:w-auto my-auto">
          <div className="md:flex int:hidden hidden items-center ">
            <span className="font-semibold text-LM text-2xl tracking-wide">
            PORTFOLIO LM-{" "}
            </span>
            <span className="text-xl tracking-wide">&nbsp;One-Page</span>
          </div>
          <p className="text-justify text-lg">
            Resumen proyecto
          </p>
          <div className="flex md:justify-normal justify-center">
            <Link
              href="https://pf-let.vercel.app/"
              target="_blank"
              className="mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              WEB
            </Link>
            <Link
              href="https://lnkd.in/dW2fpFeW"
              target="_blank"
              className="mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              CÓDIGO
            </Link>
            <Link
              href="https://bit.ly/3WLbIAm"
              target="_blank"
              className="flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM"
            >
              VIDEO
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-10">
        <span className="md:block hidden md:text-sm text-xs tracking-wide">
          realizado: ver fecha
        </span>
        <br />
        <span className="text-xl tracking-wide font-semibold text-LM">
          Detalle
        </span>
        <p>
          desarrollar
        </p>
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Tecnologías
          </span>
        </p>
        desarrollar
        <p>
          <span className="text-xl tracking-wide font-semibold text-LM">
            Realizado por
          </span>
        </p>
        <p>
          › Meyer Lucía
        </p>
      </div>
    </section>
  );
};
