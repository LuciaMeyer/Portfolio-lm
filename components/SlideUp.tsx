// 'use client' 

// import React, { useEffect, useRef, ReactNode } from 'react'
// interface Props {
//   offset?: string
//   children?: ReactNode
// }

// export default function SlideUp({ children, offset = '0px' }: Props) {
//   const ref = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.remove('opacity-0')
//             entry.target.classList.add('animate-slideUpCubiBezier')
//           }
//         })
//       },
//       { rootMargin: offset }
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }
//   }, [ref])

//   return (
//     <div ref={ref} className='relative opacity-0'>
//       {children}
//     </div>
//   )
// }


// PARA NAVEGADORES QUE NO RECONOCEN IntersectionObserver:
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
          setIsVisible(true);
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

export default function SlideUp({ children, offset = '0px' }: Props) {
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


