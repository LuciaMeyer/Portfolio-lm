"use client";
import React, { createContext, useState, useEffect, useMemo, useRef } from "react";


export const sectionContext = createContext<any>(null);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {


function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
    () =>
        new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
        ),
    []
    );

    useEffect(() => {
    observer.observe(ref.current);

    return () => {
        observer.disconnect();
    };
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
}

 const [section, setSection] = useState('home')

    return (
        <sectionContext.Provider value={{ sectionsRef, section, setSection } }>
            {children}
        </sectionContext.Provider>
    )
}