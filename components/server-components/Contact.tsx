import SlideUp from "../client-components/SlideUp";

export const Contact = () => {
  return (
    <section id="contact" className="flex-1 pt-6 md:pt-20 pb-20">
      <h1 className="text-center text-2xl md:pb-10 pb-8">
        Contactame
        <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
      </h1>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="bg-white dark:bg-BGDc mx-10 lg:mx-96 md:mx-32 flex flex-col space-y-10 justify-center md:justify-around align-top md:space-x-0 md:space-y-0 md:text-left pb-20 items-start  pt-10 pr-10  pl-10 shadow-2xl rounded-xl relative z-10">
          <div className="md:w-full mt-6 mx-auto md:mx-0 relative space-y-8">
            <h4 className="text-center">Pongamosnos en contacto</h4>
            <div className="relative md:pb-4">
              <p className="bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute">
                Nombre
              </p>
              <input
                placeholder="ingresá tu nombre completo"
                type="text"
                className="dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md"
              />
            </div>
            <div className="relative md:pb-4">
              <p className="bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute">
                Email
              </p>
              <input
                placeholder="mail@mail.com"
                type="text"
                className="dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md"
              />
            </div>
            <div className="relative md:pb-4">
              <p className="bg-white dark:bg-BGDc pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-sm absolute">
                Mensaje
              </p>
              <textarea
                placeholder="dejame tu mensaje acá..."
                className="dark:bg-BGDc tracking-wider border focus:outline-none focus:border-LM w-full pt-3 pr-3 pl-4 pb-3 md:p-4 mt-2 text-xs md:text-sm block border-stone-300 rounded-md"
              />
            </div>
            <div className="relative">
              <a className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-white hover:text-TX text-center bg-LM rounded-lg transition duration-200 hover:bg-LMc ease">
                Enviar
              </a>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};
