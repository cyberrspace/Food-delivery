import React, { useState, useEffect, useRef } from 'react';

const AnimatedHeading = ({ text }) => {
  const [animationState, setAnimationState] = useState('hidden');
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationState('appearing');
          setTimeout(() => {
            setAnimationState('settled');
          }, 1000); // Reduced from 3000ms for better UX
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px', // Increased root margin for earlier trigger
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const getHeadingClass = () => {
    const baseClasses = `
      font-sans 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
      font-semibold 
      transition-all duration-700 ease-out 
      transform
      text-center
      px-4 sm:px-0
    `;

    switch (animationState) {
      case 'hidden':
        return `${baseClasses} translate-y-10 opacity-0`;
      case 'appearing':
        return `${baseClasses} translate-y-4 opacity-100`;
      case 'settled':
        return `${baseClasses} translate-y-0 opacity-100`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full py-4 sm:py-6 md:py-8"
      ref={headingRef}
    >
      <h1 className={getHeadingClass()}>
        {text}
      </h1>
    </div>
  );
};

export default AnimatedHeading;