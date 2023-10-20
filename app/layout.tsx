"use client";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Jost } from "@next/font/google";
// Roboto_Condensed
import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { motion } from "framer-motion";
import { ScreenProvider } from "../context/screenContext";
import "atropos/css";
import { SectionProvider } from "@/context/sectionContext";

// const Roboto = Roboto_Condensed({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   style: ["normal", "italic"],
// });

const JostFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(false);
    }, 2000);
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  const hide = {
    transition: { duration: 0.5 },
    opacity: 0,
  };

  return (
    <html lang="es" className={JostFont.className}>
      <head />
      <body
        className="dark:bg-BGD
      dark:text-stone-300 text-TX font-thin"
      >
        <ScreenProvider>
          <SectionProvider>
            <ThemeProvider enableSystem={true} attribute="class">
              {/* {showSplash ? (
                <motion.div initial={{ opacity: 1 }} animate={!opacity && hide}>
                  <SplashScreen />
                </motion.div>
              ) : ( */}
                <>
                  <Navbar />
                  {children}
                  <Footer />
                </>
              {/* )} */}
            </ThemeProvider>
          </SectionProvider>
        </ScreenProvider>
      </body>
    </html>
  );
}
