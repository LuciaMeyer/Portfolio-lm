'use client';
import { useState, ChangeEvent, useRef, FormEvent  } from 'react';
import SlideUp from './SlideUp';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

interface InputData {
  name: string;
  email: string;
  message: string;
}

// const SERVICE_ID=process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const PUBLIC_KEY=process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
// const TEMPLATE_ID=process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const SERVICE_ID='service_skao4og'
const PUBLIC_KEY='K6tjKemCnbG7KfkR9'
const TEMPLATE_ID='template_vypcd2r'

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
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
          console.log('todo bien', result);
        },
        (error) => {
          console.log('todo mal', error);
        }
      );
    } else {console.log('no reconoce el form.current')}
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
    <section id='contact' className='flex-1 pt-6 md:pt-20 pb-20'>
      <h1 className='text-center text-2xl md:pb-10 pb-8'>
        Contactame
        <hr className='w-6 h-1 mx-auto my-4 bg-LM border-0 rounded'></hr>
      </h1>
      <SlideUp offset='-300px 0px -300px 0px'>
        <div className='bg-white dark:bg-BGDc mx-10 lg:mx-96 md:mx-32 flex flex-col space-y-10 justify-center md:justify-around align-top md:space-x-0 md:space-y-0 md:text-left pb-20 items-start  pt-10 pr-10  pl-10 shadow-2xl rounded-xl relative z-10'>
          <div className='md:w-full mt-6 mx-auto md:mx-0 relative space-y-8'>
            <h4 className='text-center'>Pongamosnos en contacto</h4>
            <form onSubmit={handleSubmit}>
              <div className='relative md:pb-4'>
                <p className='bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute'>
                  Nombre
                </p>
                <input
                  name='name'
                  value={input.name}
                  onChange={handleChange}
                  placeholder='ingresá tu nombre completo'
                  type='text'
                  className='dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md'
                />
              </div>
              <div className='relative md:pb-4'>
                <p className='bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute'>
                  Email
                </p>
                <input
                  name='email'
                  value={input.email}
                  onChange={handleChange}
                  placeholder='mail@mail.com'
                  type='text'
                  className='dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md'
                />
              </div>
              <div className='relative md:pb-4'>
                <p className='bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute'>
                  Mensaje
                </p>
                <textarea
                  name='message'
                  value={input.message}
                  onChange={handleChange}
                  placeholder='dejame tu mensaje acá...'
                  className='dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md'
                />
              </div>
              <div className='relative'>
                <button
                  type='submit'
                  disabled={disabled}
                  className={`group w-full inline-block pt-4 pr-5 pb-4 pl-5 text-white text-center bg-LM rounded-lg transition duration-200 ease ${
                    disabled
                      ? 'hover:text-white hover:bg-LM'
                      : 'hover:text-TX hover:bg-LMc'
                  }`}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};
