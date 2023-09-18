'use client';
import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import { Roboto_Condensed } from '@next/font/google';
import { useEffect, useState } from 'react';
import { SplashScreen } from '@/components/SplashScreen';
import { motion } from 'framer-motion';
import 'atropos/css'



const Roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {

  const [showSplash, setShowSplash] = useState(true);
  const [opacity, setOpacity] = useState(true)

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
    <html lang='es' className={Roboto.className}>
      <head />
      <body className='dark:bg-BGD dark:text-stone-300 text-TX font-thin'>
        <ThemeProvider enableSystem={true} attribute='class'>
        {showSplash ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={!opacity && hide}
          >
            <SplashScreen />
          </motion.div>
        ) : (
          <>
              <Navbar />
              {children}
              <Footer />
          </>
        )}
        </ThemeProvider>
      </body>
    </html>
  );
}
