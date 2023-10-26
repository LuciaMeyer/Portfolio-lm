'use client'
import { Videogames } from '@/components';
import { useContext, useEffect } from 'react';
import { sectionContext } from "@/context/sectionContext";


export default function VideogamesPage() {
  const { section, setSection } = useContext(sectionContext);

  useEffect(()=>{
    setSection('PROX')
  },[section]);
  
  return (
    <section className='flex-1 my-auto md:pt-28 pt-20'>
        <Videogames/>
    </section>
  )
};