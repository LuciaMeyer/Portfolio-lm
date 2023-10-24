import React from 'react'
import videgames from '@/public/videogames.gif';
import Image from 'next/image';
import Link from 'next/link';
import Atropos from 'atropos/react';
import { useContext } from 'react';
import { screenContext } from '@/context/screenContext';


export const Videogames = () => {

    const isMobile = useContext(screenContext);

    return (
        <section id='lestgo' className='flex flex-col md:w-2/3 md:mx-auto mx-6 md:mb-40 mb-20'>
            <div className='md:hidden int:flex int:flex-col flex flex-col mb-6'>
                <span className='font-semibold text-LM text-2xl tracking-wide'>VIDEOGAMES</span>
                <span className='text-xl tracking-wide'>Single Page Application</span>
            </div>
            <div className='flex flex-col int:flex-col md:flex-row'>
                {isMobile ?
                    <>
                        <div className='md:mr-7 md:ml-0 mx-auto'>
                            <Image
                                src={videgames}
                                alt='lestgo'
                                width={600}
                                height={600}
                            />
                        </div>
                        <span className='text-sm tracking-wide'>&nbsp;realizado: 15/07/2022 - 16/08/2022</span>
                    </>
                    :
                    <Atropos className='hover:scale-90 transform transition-transform duration-300 '>
                        <div className='md:mr-7 md:ml-0 mx-auto'>
                            <Image
                                src={videgames}
                                alt='lestgo'
                                width={600}
                                height={600}
                            />
                        </div>
                    </Atropos>
                }
                <div className='space-y-6 md:w-1/2 int:w-auto my-auto'>
                    <div className='md:flex int:hidden hidden items-center '>
                        <span className='font-semibold text-LM text-2xl tracking-wide'>VIDEOGAMES - </span>
                        <span className='text-xl tracking-wide'>&nbsp;Single Page Application</span>
                    </div>
                    <p className='text-justify text-lg'>
                        Esta SPA la desarrollé como parte del cursado de la carrera de Full Stack Developer, en la etapa de Proyecto Individual. Es una aplicación web que consume datos de una API externa y consultas a una base de datos propia.
                    </p>
                    <div className='flex '>
                        <Link
                            href='https://pf-let.vercel.app/'
                            target='_blank'
                            className='mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            WEB
                        </Link>
                        <Link
                            href='https://lnkd.in/dW2fpFeW'
                            target='_blank'
                            className='mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            CÓDIGO
                        </Link>
                        <Link
                            href='https://bit.ly/3WLbIAm'
                            target='_blank'
                            className='flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300 text-[.7rem] tracking-[0.2rem] 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/50
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            VIDEO
                        </Link>
                    </div>
                </div>
            </div>

            <span className='md:block hidden text-sm tracking-wide'>&nbsp;realizado: 15/07/2022 - 16/08/2022</span><br />
            <div className='space-y-4 mt-10'>
                <span className='text-xl tracking-wide font-semibold text-LM'>✔ Detalle</span>
                <p>
                    En este desarrollo debíamos poner en práctica todo lo aprendido en el cursado, construyendo un proyecto del mundo real con metodologías y herramientas ágiles, bajo un enfoque de aprendizaje colaborativo. En esta etapa, era dónde debíamos conectar todos los conocimientos y poner a prueba las habilidades de trabajo en equipo.
                </p>
                <p>
                    Quisimos aportar valor agregado al proyecto, a través de fomentar la movilidad sustentable para el cuidado del medio ambiente y la salud. Sumamos estos objetivos a la premisa de lograr un funcionamiento del sitio intuitivo y rápido, para garantizar una buena experiencia de usuario.
                </p>
                <p>
                    Mis tareas dentro del equipo se centraron principalmente en el Front-End, aunque también participé en la reestructuración del Back-End a medida que avanzaba el proyecto. Contribuí en la creación de la marca  (diseño integral utilizando Figma) y el maquetado del sitio, además de colaborar en la organización general del equipo de trabajo mediante metodología Scrum.
                </p>
                <p><span className='text-xl tracking-wide font-semibold text-LM'>✔ Tecnologías</span></p>
                <p>
                    › Lenguaje: JavaScript<br />
                    › Front: React | Redux<br />
                    › Back: Node.js | Express<br />
                    › Base de datos: PostgreSQL | Sequelize<br />

                </p>
                <p><span className='text-xl tracking-wide font-semibold text-LM'>✔ Incluye</span></p>
                <p>
                    › Autenticación ⇢ Auth0<br />
                    › Notificaciones y mailing ⇢ Socketio EmailJS<br />
                    › Almacenamiento multimedia ⇢ Cloudinary<br />
                    › Persistencia de datos ⇢ LocalStorage<br />
                    › Diseño responsive ⇢ CCSModules #MaterialUI Figma<br />
                    › Pasarela de pagos ⇢ MercadoPago<br />
                    › Reviews a través de posteo de experiencias<br />
                    › Filtros y ordenamientos combinados<br />
                    › Bot de ayuda al usuario<br />
                    › Dashboard de administrador completo<br />
                </p>
                <p><span className='text-xl tracking-wide font-semibold text-LM'>✔ Integrantes</span></p>
                <p>
                    › Nicolás Balbi › Soledad Dato › Máximo Tovar › Felipe Jure › Juan Martin Silva › Leandro Pappalardo › Meyer Lucía
                </p>
            </div>
        </section>
    )
}
