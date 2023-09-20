import Image from 'next/image';
import { img } from '../../public/images';

export const AboutSkills = () => {
  return (
    <>
      <div className="bg-red-white dark:bg-BGD mt-0 text-justify md:text-justify md:w-2/3 md:mr-20">
        <div className="md:h-[25rem] overflow-y-auto max-h-[25rem]">

          <div>
            <div>
              <h4>Lenguajes</h4>

            </div>
            <div className='md:w-5 w-36 my-2 '>
                <Image
                  width='50'
                  height='50'
                  className='md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75'
                  src={img.in}
                  alt='img'
                  priority
                />
            </div>
          </div>


        </div>
      </div>
      <div className="flex justify-center">
        ESPACIO PARA IMAGEN
      </div>
    </>
  );
}
