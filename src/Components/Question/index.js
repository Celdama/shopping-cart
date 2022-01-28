import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Content } from './question.style';

const Question = () => {
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
        delayChildren: 0.6,
        staggerChildren: 0.3,
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
      transition: {
        ease: 'easeIn',
        duration: 0.3,
      },
    },
  };
  return (
    <Content>
      <motion.h2
        ref={ref}
        variants={containerTitleStyle}
        animate={controls}
        initial='hidden'
      >
        <motion.span variants={textStyle}>Does your fruit snack </motion.span>
        <motion.span variants={textStyle} className='serif'>
          contain fruit ?
        </motion.span>
      </motion.h2>
    </Content>
  );
};

export default Question;
