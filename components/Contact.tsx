'use client';
import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import SlideUp from './SlideUp';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const SERVICE_ID=process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY=process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID=process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;

interface InputData {
  name: string;
  email: string;
  message: string;
}


export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [input, setInput] = useState<InputData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!SERVICE_ID || !PUBLIC_KEY || !TEMPLATE_ID) {
      console.error(
        'Error en las variables de entorno'
      );
      return;
    }
    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log('ok', result);
        },
        (error) => {
          console.log('error', error);
        }
      );
    } else { console.log('no reconoce el form.current', form.current) }
    swal({
      text: 'Gracias por tu mensaje!',
      icon: 'success',
      
    });
    console.log(input);
    setInput({
      name: '',
      email: '',
      message: '',
    });
  };

  const disabled = !input.name || !input.email || !input.message;

  return (
    <section id='contact' className='flex-1 pt-10 md:pt-10 pb-60'>
      <SlideUp offset='-300px 0px -300px 0px'>
        <h1 className='text-center text-2xl md:pb-10 pb-8'>
          Contactame
          <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
        </h1>
      </SlideUp>
      <SlideUp offset='-300px 0px -300px 0px'>
        <form ref={form} onSubmit={handleSubmit}>
          <div className='md:w-1/3 mx-10 md:mx-auto
          flex flex-col
          space-y-10 md:pb-20 md:pt-10 md:pr-10 md:pl-10 pb-16 pt-10
          md:text-left 
          bg-white dark:bg-BGDc shadow-2xl relative z-10'>
            <div className='mt-8 ml-6 mr-6 relative space-y-8'>
              <div className='relative'>
                <input
                  name='name'
                  value={input.name}
                  onChange={handleChange}
                  placeholder='NOMBRE COMPLETO'
                  type='text'
                  className='dark:bg-BGDc tracking-wider border-b-[1px] focus:outline-none focus:border-LM w-full pt-3 pr-3 pb-3 mt-2 text-xs block border-stone-300'
                />
              </div>
              <div className='relative md:pb-4'>
                <input
                  name='email'
                  value={input.email}
                  onChange={handleChange}
                  placeholder='EMAIL'
                  type='text'
                  className='dark:bg-BGDc tracking-wider border-b-[1px] focus:outline-none focus:border-LM w-full pt-6 pr-3 pb-3 mt-2 text-xs block border-stone-300'
                />
              </div>
              <div className='relative md:pb-4'>
                <textarea
                  name='message'
                  value={input.message}
                  onChange={handleChange}
                  placeholder='MENSAJE'
                  className='dark:bg-BGDc tracking-wider border-b-[1px] focus:outline-none focus:border-LM w-full pt-3 pr-3 pb-3 mt-2 text-xs block border-stone-300 '
                />
              </div>
              <div className='relative'>
                <button
                  type='submit'
                  disabled={disabled}
                  className={`cursor-pointer group w-28 h-10 text-center border-solid border transition duration-200 ease
                  ${disabled
                    ? 'hover:text-TX/60 dark:hover:bg-neutral-800 hover:bg-stone-300/20 text-TX/40 border-TX/30 dark:border-stone-300/30 dark:text-stone-300/50 '
                    : 'hover:text-white hover:bg-LM border-LM text-LM'
                    }`}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </SlideUp>
    </section>
  );
};
