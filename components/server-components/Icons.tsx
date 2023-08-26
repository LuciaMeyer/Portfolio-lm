import Image from "next/image";
import { img } from "../../public/images";
import { Link } from "react-scroll/modules";

interface IconsProps {
  section: string;
  setSection: Function;
}

export const Icons: React.FC<IconsProps> = ({ section, setSection }) => {
  console.log(section)

  // window.location.hash

  const switchPage = () => {
    const newSection = getNextSection(section); // Obtener la siguiente sección
    setSection(newSection); // Actualizar el estado de la sección
  };

  const getNextSection = (currentSection: string) => {
    if (currentSection === "home") return "about";
    if (currentSection === "about") return "projects";
    if (currentSection === "projects") return "resources";
    return "home";
  };

  return (
    <>
      <div className="z-10 fixed bottom-0 flex md:top-40 md:justify-between md:w-0 w-full md:pl-8 bg-white dark:bg-BGD backdrop-blur-md md:backdrop-blur-none md:bg-transparent dark:md:bg-transparent justify-center">
        <div className="md:h-screen flex flex-col">
          <div className="md:w-5 w-36 mx-auto dark:opacity-60 md:block flex flex-row my-2 items-center">
            <a
              href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                width="40"
                height="40"
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
                width="40"
                height="40"
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
                width="40"
                height="40"
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
                width="40"
                height="40"
                className="md:mb-4 md:px-0 px-2 transform transition-transform duration-300 hover:scale-75"
                src={img.ig}
                alt="img"
                priority
              />
            </a>
          </div>
        </div>
        <Link to={section} smooth={true} duration={500}>
          <button onClick={switchPage}>
            <Image
              className="w-10 fixed bottom-12 left-6 transform transition-transform duration-300 hover:scale-75 cursor-pointer animate-pulse filter brightness-90"
              width="40"
              height="40"
              src={img.fl_am}
              alt="img"
              priority
            />
          </button>
        </Link>
      </div>
    </>
  );
};
