import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="mx-auto px-4 md:w-1/2 md:py-0 py-8 md:mb-6">
      <hr className="hidden md:block w-full h-0.5 mx-auto mt-4 border-0 bg-stone-200 dark:bg-TX"></hr>
      <div className=" text-stone-400 dark:text-stone-400 mx-auto p-1 flex justify-center space-x-1">
        <a
          href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-LM"
        >
          © 2023 Lucía Meyer
        </a>
      </div>
      <hr className="md:hidden w-full h-0.5 mx-auto border-0 bg-stone-200 dark:bg-TX mb-1"></hr>
    </div>
  );
};
