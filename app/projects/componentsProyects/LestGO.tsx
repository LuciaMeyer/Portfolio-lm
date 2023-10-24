import React from 'react'
import letsgo from '@/public/letsgo.gif';
import Image from 'next/image';
import Link from 'next/link';
import Atropos from 'atropos/react';



export const LestGO = () => {
    return (
        <section id='lestgo' className='flex flex-col md:w-2/3 md:mx-auto mx-6'>
            <div className='md:hidden flex flex-col mb-6'>
                <span className='font-semibold text-LM text-2xl tracking-wide'>E-COMERCE</span>
                <span className='text-xl tracking-wide'>let's GO</span>
            </div>
            <div className='flex flex-col md:flex-row'>
                <Atropos className='md:block hidden hover:scale-90 transform transition-transform duration-300 '>

                    <div className='md:mr-7 md:ml-0 mx-auto'>
                        <Image
                            src={letsgo}
                            alt='lestgo'
                            width={600}
                            height={600}
                        />
                    </div>
                </Atropos>

                <div className='space-y-6 md:w-1/2 my-auto'>
                    <div className='md:flex hidden items-center '>
                        <span className='font-semibold text-LM text-2xl tracking-wide'>E-COMERCE - </span>
                        <span className='text-xl tracking-wide'>&nbsp;let's GO</span>
                    </div>
                    <p className='text-justify text-lg'>
                        Este proyecto lo desarrollé junto a un grupo de compañeros dentro del cursado de la carrera Full Stack Developer. Fue la entrega final con la cual nos graduamos. Es un e-commerce de alquiler temporal de bicicletas, accesorios y pack de aventuras según calendario y stock disponible.
                    </p>
                    <div className='flex '>
                        <Link
                            href='https://pf-let.vercel.app/'
                            target='_blank'
                            className='mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300/90 text-[.7rem] tracking-wider 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/30
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            WEB
                        </Link>
                        <Link
                            href='https://lnkd.in/dW2fpFeW'
                            target='_blank'
                            className='mr-4 flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300/90 text-[.7rem] tracking-wider 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/30
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            CÓDIGO
                        </Link>
                        <Link
                            href='https://bit.ly/3WLbIAm'
                            target='_blank'
                            className='flex items-center justify-center
                            cursor-pointer bg-white dark:bg-BGD text-black dark:text-stone-300/90 text-[.7rem] tracking-wider 
                            w-24 h-9 px-4 
                            border-solid border border-TX/50 dark:border-stone-300/30
                            transition duration-200 ease d hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
                        >
                            VIDEO
                        </Link>
                    </div>
                </div>
            </div>


            <div className='space-y-4 mt-10'>
                <span className='text-xl tracking-wide font-semibold text-LM'>✔ Detalle</span>
                <p>
                    En este desarrollo debíamos poner en práctica todo lo aprendido, construyendo un proyecto del mundo real con metodologías y herramientas ágiles, bajo un enfoque de aprendizaje colaborativo. En esta etapa del cursado, es dónde se conectan todos los conocimientos y se ponen a prueba las habilidades de trabajo en equipo.
                </p>
                <p>
                    En el e-commerce quisimos aportar valor agregado a través de fomentar la movilidad sustentable para el cuidado del medio ambiente y la salud. Sumamos estos objetivos a la premisa de lograr un funcionamiento del sitio intuitivo y rápido para garantizar una buena experiencia de usuario.
                </p>
                <p>
                    Mis tareas dentro del equipo se centraron principalmente en el Front-End, aunque también participé en la reestructuración del Back-End a medida que avanzaba el proyecto y fue necesario. Contribuí en la creación de la marca, el diseño (utilizando Figma) y el maquetado del sitio, además de colaborar en la organización general del equipo de trabajo mediante la metodología Scrum.
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
                    › Autenticación ⇢ #Auth0<br />
                    › Notificaciones y mailing ⇢ #Socketio #EmailJS<br />
                    › Almacenamiento multimedia ⇢ #Cloudinary<br />
                    › Persistencia de datos ⇢ #LocalStorage<br />
                    › Diseño responsive ⇢ #CCSModules #MaterialUI #Figma<br />
                    › Pasarela de pagos ⇢ #MercadoPago<br />
                    › Reviews a través de posteo de experiencias<br />
                    › Filtros y ordenamientos combinados<br />
                    › Bot de ayuda al usuario<br />
                    › Dashboard de administrador completo<br />
                </p>
                <p><span className='text-xl tracking-wide font-semibold text-LM'>✔ Integrantes</span></p>
                <p>
                    › Nicolás Balbi<br />
                    › Soledad Dato<br />
                    › Máximo Tovar<br />
                    › Felipe Jure<br />
                    › Juan Martin Silva<br />
                    › Leandro Pappalardo<br />
                    › Meyer Lucía
                </p>
            </div>
        </section>
    )
}

