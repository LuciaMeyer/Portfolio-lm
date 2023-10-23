import React from 'react'
import Typewriter from 'typewriter-effect';

export const ClosingMessage: any = ({ refEnd }:any) => {
  return (
    <div
      ref={refEnd}
      id='end'
      className='leading-snug tracking-wide text-xl text-LM flex justify-center my-72 dark:font-normal font-semibold'>
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
  )
}
