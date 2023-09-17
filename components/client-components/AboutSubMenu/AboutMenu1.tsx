'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { img } from '../../../public/images';



export const AboutMenu1 = () => {

    const images = [img.aux1, img.aux2, img.aux3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <div className='mt-auto text-justify md:text-justify'>
                <p>
                    Soy{' '}
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {'Full Stack Developer'}
                    </span>
                    , con formación en
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {' Diseño Gráfico'}
                    </span>
                    , y experiencia en
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {' Marketing Digital,'}
                    </span>{' '}
                    con base en Rosario, Argentina.
                </p>
                <br />
                <p>
                    Mi mayor interés dentro del mundo IT es la posibilidad de crear
                    frente a grandes necesidades, soluciones simples e innovadoras.
                </p>
                <br />
                <p>
                    Me gustan los desafíos y el aprendizaje continuo.​ Encontré en la
                    programación la combinación perfecta entre varias de mis pasiones:
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {' creatividad'}
                    </span>
                    ,
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {' innovación'}
                    </span>{' '}
                    y
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        {' colaboración.'}
                    </span>
                </p>
                <br />
                <p>
                    Creo en la importancia de no dejar de buscar el{' '}
                    <span className='font-semibold dark:font-normal text-stone-700 dark:text-LM'>
                        crecimiento profesional y personal,
                    </span>{' '}
                    es lo que me mantiene en movimiento. Además de la motivación de
                    pensar qué nuevos caminos y oportunidades me traerá esta carrera.
                </p>
                <br />
            </div>
            <div className='md:hidden flex justify-center'>
                <Image
                    width='350'
                    height='350'
                    src={images[currentImageIndex]}
                    alt='img'
                    priority
                    className=''
                />
            </div>
            <div className='-z-50 h-full w-1/2 md:absolute md:block hidden top-0 right-0 bg-right'>
                {/* <Image
                    src={images[currentImageIndex]}
                    alt='Image'
                    fill
                    style={{ objectFit: "cover" }}
                    sizes='50vw'
                /> */}
            </div>
        </>
    )
};


