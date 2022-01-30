import { useState, useEffect } from 'react';

export const useHeroEffect = () => {
  const [position, setPosition] = useState(0);
  const [random, setRandom] = useState(Math.round(Math.random()));

  useEffect(() => {
    const onScroll = () => {
      setPosition(window.scrollY / 9);
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  return [position, random];
};
