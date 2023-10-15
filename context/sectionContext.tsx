import React, { createContext, useState, useEffect, useMemo, useRef, ReactNode } from "react";

interface SectionContextProps {
  sectionsRef: {
    refHero: React.RefObject<HTMLDivElement | null>;
    refAbout: React.RefObject<HTMLDivElement | null>;
    refProjects: React.RefObject<HTMLDivElement | null>;
    refResurces: React.RefObject<HTMLDivElement | null>;
    refContact: React.RefObject<HTMLDivElement | null>;
  };
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export const sectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  
  function useIsInViewport(ref: React.RefObject<HTMLDivElement | null>): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      if (ref.current) {
        observer.observe(ref.current);

        return () => {
          observer.disconnect();
        };
      }
    }, [ref, observer]);

    return isIntersecting;
  }

  const refHero = useRef<HTMLDivElement | null>(null);
  const refAbout = useRef<HTMLDivElement | null>(null);
  const refProjects = useRef<HTMLDivElement | null>(null);
  const refResurces = useRef<HTMLDivElement | null>(null);
  const refContact = useRef<HTMLDivElement | null>(null);

  const sectionsRef = {
    refHero,
    refAbout,
    refProjects,
    refResurces,
    refContact,
    useIsInViewport
  };

  const [section, setSection] = useState('home');

  return (
    <sectionContext.Provider value={{ sectionsRef, section, setSection }}>
      {children}
    </sectionContext.Provider>
  );
};
