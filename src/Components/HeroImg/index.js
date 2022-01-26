import React, { useState, useEffect } from 'react';
import Image from '../../Images/heroImage.jpg';
import { Wrapper } from './heroImg.styles';

const HeroImg = () => {
  const [positionLeft, setPositionLeft] = useState(0);
  const [positionRight, setPositionRight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setPositionLeft(window.pageYOffset / 9);
      setPositionRight(window.pageYOffset / 9);
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  const rightStyle = {
    transform: `translate3d(${positionRight}px, 0px, 0px)`,
  };

  const leftStyle = {
    transform: `translate3d(-${positionLeft}px, 0px, 0px)`,
  };

  return (
    <Wrapper image={Image}>
      <div style={leftStyle} left={positionLeft}></div>
      <div style={rightStyle} className='right'></div>
    </Wrapper>
  );
};

export default HeroImg;
