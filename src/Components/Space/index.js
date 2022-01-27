import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrapper, Content } from './space.style';
import Smiley from '../../Images/smiley.svg';

const Space = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerTitleStyle = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const containerPStyle = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textStyle = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
    },
  };

  return (
    <Wrapper>
      <Content>
        <motion.h2
          ref={ref}
          variants={containerTitleStyle}
          animate={controls}
          initial='hidden'
        >
          <motion.span variants={textStyle}>
            Guil-free satisfaction for
          </motion.span>
          <motion.span variants={textStyle} className='serif'>
            every occasion.
          </motion.span>
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerPStyle}
          animate={controls}
          initial='hidden'
        >
          <motion.p variants={textStyle}>
            Yes you can actually eat TALA in space.
          </motion.p>
          <motion.p variants={textStyle}>
            Now you just have to figure out how to get there.
          </motion.p>
        </motion.div>
        <img src={Smiley} alt='' />
      </Content>
    </Wrapper>
  );
};

export default Space;
