'use client'
import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface Props {
  offset?: string;
  children?: ReactNode;
}

const useElementVisibility = (ref: React.RefObject<HTMLDivElement>, offset: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !isVisible) {
        const rect = ref.current.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, offset, isVisible]);

  return isVisible;
}

export function SlideUp({ children, offset = '0px' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useElementVisibility(ref, offset);

  useEffect(() => {
    if (isVisible) {
      if (ref.current) {
        ref.current.classList.remove('opacity-0');
        ref.current.classList.add('animate-slideUpCubiBezier');
      }
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={`relative ${isVisible ? '' : 'opacity-0'}`}>
      {children}
    </div>
  );
}


