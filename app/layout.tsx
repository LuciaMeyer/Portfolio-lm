'use client'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { Roboto_Condensed } from '@next/font/google'
 
const Roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children}:{ children: React.ReactNode }) {
  return (
    <html lang='es' className={Roboto.className}>
      <head />
      <body className='dark:bg-BGD dark:text-stone-300 text-TX font-thin'>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
