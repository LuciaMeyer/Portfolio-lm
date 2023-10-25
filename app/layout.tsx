'use client';
import { Navbar, Footer, SplashScreen } from '@/components';
import { useEffect, useState } from 'react';
import { ScreenProvider } from '@/context/screenContext';
import { SectionProvider } from '@/context/sectionContext';
import { motion } from 'framer-motion';
import { Jost } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import 'atropos/css';
import '../styles/globals.css';

const JostFont = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [opacity, setOpacity] = useState(true);
  const pathname = usePathname();

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
    <html lang='es' className={JostFont.className}>
      <head />
      <body
        className='dark:bg-BGD
      dark:text-stone-300 text-TX font-thin'
      >
        <ScreenProvider>
          <SectionProvider>
            <ThemeProvider enableSystem={true} attribute='class'>
              {pathname === '/' ? (
                <>
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
                </>
              ) : (
                <>
                  <Navbar/>
                  {children}
                  <Footer/>
                </>
              )}
            </ThemeProvider>
          </SectionProvider>
        </ScreenProvider>
      </body>
    </html>
  );
}
