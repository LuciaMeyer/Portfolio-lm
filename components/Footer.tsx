import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full py-0 shadow-2xl dark:bg-BGD/70 shadow-gray-200 dark:shadow-stone-700  
    dark:border-stone-600 backdrop-blur-md">
      <div className="mx-auto px-4 sm:px-6">
        <hr className="w-full h-0.5 mx-auto mt-4 bg-neutral-200 border-0"></hr>
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
            © 2023 Lucía Meyer<a href="/" className="hover:underline"></a>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a
              href="https://github.com/LuciaMeyer"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
