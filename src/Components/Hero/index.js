import React, { useState, useEffect } from 'react';
import Image from '../../Images/heroImage.jpg';
import Image2 from '../../Images/heroImage2.jpg';
import { Wrapper } from './heroImg.styles';

const HeroImg = () => {
  const [random, setRandom] = useState(Math.round(Math.random()));
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setPosition(window.scrollY / 9);
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  const rightStyle = {
    transform: `translate3d(${position}px, 0px, 0px)`,
  };

  const leftStyle = {
    transform: `translate3d(-${position}px, 0px, 0px)`,
  };

  return (
    <Wrapper image={random ? Image : Image2}>
      <div style={leftStyle}></div>
      <div style={rightStyle}></div>
    </Wrapper>
  );
};

export default HeroImg;
