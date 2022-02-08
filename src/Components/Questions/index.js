import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Question from '../Question';
import {
  Wrapper,
  Content,
  AnswersContainer,
  BananaGif,
  SyrupGif,
} from './questions.style';
import Banana from '../../Images/bananas.gif';
import Syrup from '../../Images/syrup.gif';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { getAnswersEffect } from '../../Helpers/shopPageMotionEffect';

const Questions = () => {
  const [positionY, setPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [controls, ref] = useMotionEffect();

  const showGif = (e) => {
    let react = e.target.getBoundingClientRect();
    let x = e.clientX - react.left;
    let y = e.clientY - react.top;
    setPositionX(x);
    setPositionY(y);
  };

  return (
    <Wrapper>
      <Content>
        <Question />
        <AnswersContainer
          ref={ref}
          variants={getAnswersEffect()}
          animate={controls}
          initial='hidden'
        >
          <div className='yes-container' onMouseMove={showGif}>
            <p className='yes'>Yes</p>
            <BananaGif top={positionY} left={positionX} src={Banana} alt='' />
          </div>
          <div className='no-container' onMouseMove={showGif}>
            <p className='no'>No</p>
            <SyrupGif top={positionY} left={positionX} src={Syrup} alt='' />
          </div>
        </AnswersContainer>
      </Content>
    </Wrapper>
  );
};

export default Questions;
