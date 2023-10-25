'use client'
import React from 'react'
import { LestGO } from './componentsProyects/LestGO'
import { Videogames } from './componentsProyects/Videogames'
import { Gpt } from './componentsProyects/Gpt'
import { Portfolio } from './componentsProyects/Portfolio'


export default function ProjectsPage() {
  
  return (
    <section className='flex-1 my-auto md:pt-40 pt-20 pb-60'>
      <LestGO/>
      <Videogames/>
      <Gpt/>
      <Portfolio/>
    </section>
  )
}
