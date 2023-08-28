import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="flex-1 pt-6 md:pt-20 pb-20">
      <h1 className="text-center text-2xl md:pb-10 pb-8">
        Contactame
        <hr className="w-6 h-1 mx-auto my-4 bg-LM border-0 rounded"></hr>
      </h1>
      <div className="mx-10 md:mx-60 flex flex-col space-y-10 justify-center md:justify-around align-top md:space-x-0 md:space-y-0 md:flex-row md:text-left pb-20">
        pongamosnos en contacto
      </div>
      <div className="py-0 h-96 bg-stone-200 dark:bg-stone-400"></div>
    </section>
  );
};