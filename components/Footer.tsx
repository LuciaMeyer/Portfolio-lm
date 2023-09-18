import Typewriter from 'typewriter-effect';

export const Footer = () => {
  return (
    <div className='mx-auto px-4 md:w-1/2 md:py-0 py-8 md:mb-6'>
      <div className='leading-snug tracking-wide text-xl text-LM flex justify-center my-72'>
        <Typewriter
          options={{ cursor: '|', delay: 75, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString('Gracias por visitarme!').pauseFor(2000)
              .deleteChars(22)
              .start();
          }}
        />
      </div>

      <hr className='hidden md:block w-full h-0.5 mx-auto mt-4 border-0 bg-stone-200 dark:bg-TX'></hr>
      <div className=' text-stone-400 dark:text-stone-400 mx-auto p-1 flex justify-center space-x-1'>
        <a
          href='https://www.linkedin.com/in/lucia-meyer-65633a143/'
          rel='noreferrer'
          target='_blank'
          className='hover:text-LM'
        >
          © 2023 Lucía Meyer
        </a>
      </div>
      <hr className='md:hidden w-full h-0.5 mx-auto border-0 bg-stone-200 dark:bg-TX mb-1'></hr>
    </div>
  );
};
