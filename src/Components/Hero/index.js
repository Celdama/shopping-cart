import React from 'react';
import Image from '../../Images/heroImage.jpg';
import Image2 from '../../Images/heroImage2.jpg';
import { Wrapper } from './heroImg.styles';
import { useHeroEffect } from '../../hooks/useHeroEffect';

const HeroImg = () => {
  const [position, random] = useHeroEffect();

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
