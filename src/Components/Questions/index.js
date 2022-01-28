import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Question from '../Question';
import { Wrapper, Content, BananaGif, SyrupGif } from './questions.style';
import Banana from '../../Images/bananas.gif';
import Syrup from '../../Images/syrup.gif';

const Questions = () => {
  const [positionY, setPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const style = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: 'easeIn',
        duration: 1,
      },
    },
  };

  const showBanana = (e) => {
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
        <motion.div
          ref={ref}
          variants={style}
          animate={controls}
          initial='hidden'
          className='answers'
        >
          <div className='yes-container' onMouseMove={showBanana}>
            <p className='yes'>Yes</p>
            <BananaGif top={positionY} left={positionX} src={Banana} alt='' />
          </div>
          <div className='no-container' onMouseMove={showBanana}>
            <p className='no'>No</p>
            <SyrupGif top={positionY} left={positionX} src={Syrup} alt='' />
          </div>
        </motion.div>
      </Content>
    </Wrapper>
  );
};

export default Questions;
