"use client";
import Image from "next/image";
import { img } from "../../public/images";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-scroll/modules";



export const AboutKnowMe = () => {

  const [showDiv, setShowDiv] = useState(false);

  // const images = [img.aux1, img.aux2, img.aux3];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      if (showDiv) setShowDiv(false);
    }, 50000);
  }, [showDiv]);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

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
        flex flex-col md:flex-row mx-auto "
      >

        {!showDiv ?
          <div className="space-y-6 md:mt-14 md:mr-7 md:w-1/2 ">
            {/* parrafo 1 */}
            <p className="">
              Hola! Soy{" "}
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {"Lu, "}
              </span>
              creativa e inquieta desde siempre. En mi camino exploré diferentes áreas como
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" arquitectura, diseño, comunicación y marketing."}
              </span>{" "}
              En el último tiempo, descubrí mi pasión por la
            </p>
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {"Tecnología de la Información "}
            </span>
            y me gradué de como
            <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
              {" Full Stack Developer."}
            </span>
            {/* parrafo 2 */}
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
            <div className='md:mt-6 mt-4 flex items-center justify-between'>
              <button
                onClick={handleShowDiv}
                className='my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                {/* border-solid border border-TX/50 dark:border-stone-300/30  */}
                SEGUIR LEYENDO
              </button>
              <span className='text-sm dark:text-stone-400'>1 / 2</span>
            </div>
          </div>
          :
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-6 md:mt-14 md:mr-7 md:w-1/2 ">
            {/* parrafo 3 */}
            <p className="">
              Entrar en este sector me impulsó a estar en
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" constante proceso de aprendizaje. "}
              </span>
              Actualmente, estoy sumando conocimientos sobre
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" UX/UI"}
              </span>{" "}
              y explorando los nuevos paradigmas y evolución que trae la
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" Inteligencia Artificial."}
              </span>
            </p>
            {/* parrafo 4 */}
            <p className="">
              Conocé alguno de
              <button
                className='mx-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider border-solid border border-TX/50 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                <Link
                  to={'projects'}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  MIS PROYECTOS
                </Link>
              </button>
              Para saber cuáles son las
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" herramientas "}
              </span>
              que manejo,
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" mi recorrido "}
              </span>
              y qué es lo que
              <span className="font-semibold dark:font-light text-stone-700 dark:text-LM">
                {" me motiva, "}
              </span>
              podés seguir explorando esta sección.
              <br/>
              Tenés dudas o te gustariía que trabajemos en equipo?
            <button
                className='mx-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider border-solid border border-TX/50 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                <Link
                  to={'contact'}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  ESCRIBIME
                </Link>
              </button>
            </p>
            <div className='md:mt-6 mt-4 flex items-center justify-between'>
              <button
                onClick={handleShowDiv}
                className='my-2 px-2 cursor-pointer text-black text-[.7rem] tracking-wider transition duration-200 ease dark:text-stone-400 dark:hover:bg-neutral-700 hover:bg-neutral-200'
              >
                {/* border-solid border border-TX/50 dark:border-stone-300/30  */}
                VOLVER
              </button>
              <span className='text-sm dark:text-stone-400'>2 / 2</span>
            </div>
          </motion.div>
        }
        <div className="md:flex hidden mt-14 ml-7 md:w-1/2 h-96">
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
