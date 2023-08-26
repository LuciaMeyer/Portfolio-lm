import Image from "next/image";
import { img } from "../assets/images";



export const SubMenu = () => {
  return (
    <div className="z-10 fixed flex top-0 justify-between md:pt-48 pt-28 w-full px-8 pb-3 backdrop-blur-md md:backdrop-blur-none">
      <div className="flex flex-col">
        <div className="w-5 mx-auto dark:opacity-60 md:block hidden">
          <a
            href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="40"
              height="40"
              className="mb-4"
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
              className="mb-4"
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
              className="mb-4"
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
              className="mb-4"
              src={img.ig}
              alt="img"
              priority
            />
          </a>
        </div>
        <div className="w-3 mx-auto dark:opacity-60 mb-3 md:block hidden">
          <Image width="40" height="40" src={img.linea} alt="img" priority />
        </div>
        <div className="w-8 mx-auto dark:opacity-60 md:block hidden">
          <Image width="40" height="40" src={img.flecha} alt="img" priority />
        </div>
      </div>
    </div>
  );
};
