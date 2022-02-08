import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Content } from './question.style';
import {
  getContainerQuestionEffect,
  getChildrenQuestionEffect,
} from '../../Helpers/shopPageMotionEffect';

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

  return (
    <Content>
      <motion.h2
        ref={ref}
        variants={getContainerQuestionEffect()}
        animate={controls}
        initial='hidden'
      >
        <motion.span variants={getChildrenQuestionEffect()}>
          Does your fruit snack{' '}
        </motion.span>
        <motion.span variants={getChildrenQuestionEffect()} className='serif'>
          contain fruit ?
        </motion.span>
      </motion.h2>
    </Content>
  );
};

export default Question;
