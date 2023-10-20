import Link from "next/link";
import Image from "next/image";

export const ProjectsContent = ({ project }: any) => {
  return (
    <>
      <Link href={project.link}>
        <Image
          src={project.image}
          alt=""
          width={1000}
          height={1000}
          data-atropos-offset="-3"
        />
      </Link>
      <h1
        style={{ letterSpacing: "0.3em" }}
        className="text-white md:text-lg text-base font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
      >
        {project.name}
      </h1>
      <button className="absolute md:bottom-4 bottom-11 text-2xl left-4 w-7 h-7 bg-transparent rounded-full border border-neutral-400  flex items-center justify-center text-neutral-400 hover:bg-neutral-600 hover:text-gray-800 hover:border-transparent transition duration-300 ease-in-out">
        +
      </button>
    </>
  );
};
