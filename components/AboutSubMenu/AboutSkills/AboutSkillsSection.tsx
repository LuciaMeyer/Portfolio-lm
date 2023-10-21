"use client";
import { TechnicalSkills } from "./TechnicalSkills/TechnicalSkills";
import { useState } from "react";
import { SoftSkills } from "./SoftSkills/SoftSkills";

export const AboutSkills = () => {
  const [showSection, setShowSection] = useState("tech");

  const handleChange = (section: string) => {
  setShowSection(section);
  };

  return (
    <>
      <div className="flex mt-8 items-center justify-center mb-8">
        <button
          onClick={() => handleChange("tech")}
          className={`mr-4 w-56 h-10 cursor-pointer bg-white dark:bg-BGD tracking-wider
          ${
            showSection !== "tech"
              ? "text-[.7rem] text-black dark:text-stone-300/90 border-solid border border-TX/50 dark:border-stone-300/30 hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM transition duration-200 ease"
              : "text-LM border-none font-bold md:text-x1 text-[0.9rem]"
          }`}
        >
          TECH SKILLS
        </button>
        <button
          onClick={() => handleChange("soft")}
          className={`ml-4 w-56 h-10 cursor-pointer bg-white dark:bg-BGD tracking-wider
          ${
            showSection !== "soft"
              ? "text-[.7rem] text-black dark:text-stone-300/90 border-solid border border-TX/50 dark:border-stone-300/30 hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM transition duration-200 ease"
              : "text-LM border-none font-bold md:text-x1 text-[0.9rem]"
          }`}
        >
          SOFT SKILLS
        </button>
      </div>

      {showSection === "tech" ? (
        <TechnicalSkills />
      ) : showSection === "soft" ? (
        <SoftSkills />
      ) : (
        <></>
      )}
    </>
  );
};
