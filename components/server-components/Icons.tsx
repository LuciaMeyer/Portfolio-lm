import Image from "next/image";
import { img } from "../../public/images";
import { Link } from "react-scroll/modules";
import { useEffect } from "react";

interface IconsProps {
  section: string;
  setSection: Function;
}

export const Icons: React.FC<IconsProps> = ({ section, setSection }) => {
  
  const handleClick = (current: string) => {
    if (current === "home") setSection("about");
    if (current === "about") setSection("projects");
    if (current === "projects") setSection("resources");
    if (current === "resources") setSection("contact");
    if (current === "contact") setSection("home");
  };

  return (
    <div className="z-50 fixed bottom-0 flex w-full md:top-40 md:justify-between md:w-0 md:pl-10 bg-white dark:bg-BGD backdrop-blur-md md:backdrop-blur-none md:bg-transparent dark:md:bg-transparent justify-center">
      <div className="md:h-screen flex flex-col">
        <div className="md:w-5 w-36 mx-auto dark:opacity-60 md:block flex flex-row my-2 items-center">
          <a
            href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 transform transition-transform duration-300 hover:scale-75"
              src={img.lin}
              alt="img"
              priority
            />
          </a>
          <a
            href="https://github.com/LuciaMeyer"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 transform transition-transform duration-300 hover:scale-75"
              src={img.gh}
              alt="img"
              priority
            />
          </a>
          <a
            href="mailto:luciameyer1603@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 transform transition-transform duration-300 hover:scale-75"
              src={img.mail}
              alt="img"
              priority
            />
          </a>
          <a
            href="https://www.instagram.com/luciameyer_/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 transform transition-transform duration-300 hover:scale-75"
              src={img.ig}
              alt="img"
              priority
            />
          </a>
        </div>
      </div>

      <Link
        to={
          section === "home"
            ? "about"
            : section === "about"
            ? "projects"
            : section === "projects"
            ? "resources"
            : section === "resources"
            ? "contact"
            : "home"
        }
        smooth={true}
        duration={500}
        onClick={() => handleClick(section)}
      >
        <Image
          className="w-10 md:w-10 fixed bottom-10 md:bottom-20 md:left-6 right-4 transform transition-transform duration-300 hover:scale-75"
          width="50"
          height="50"
          src={img.flecha}
          alt="img"
          priority
        />
      </Link>
    </div>
  );
};
