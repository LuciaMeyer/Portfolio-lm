'use client'
import { useEffect, useState } from "react";
import { img } from "../public/images";
import Image from "next/image";
import { motion } from "framer-motion";

export const SplashScreen = () => {

const [showSplash, setShowSplash] = useState(true);

useEffect(() => {
    setTimeout(() => {
    setShowSplash(false);
    }, 1800);
}, []);

const show = {
    transition: { duration: 1 },
    opacity: 1,
    scale: 1,
    rotate: 360,
    
  };

  const hide = {
    transition: { duration: 0.5 },
    opacity: 0,
    scale: 1,
    rotate: 360,
  };

  return (
    <main 
      className="bg-cover bg-fixed bg-no-repeat h-screen"
      style={{
      backgroundImage: `url(${img.bgDesk})`,
    }}
    >
      <div
        className="flex items-center justify-center h-screen "
      >
        <motion.div
          className="-mt-24 md:my-auto"
          initial={{ opacity: 0, scale: 0, rotate:0 }}
          animate={showSplash ? show : hide}
        > 
          <Image
            src={img.LM}
            alt="LM"
            width={80}
            height={80}
            priority
          />
        </motion.div>
      </div>
    </main>
  );
};
