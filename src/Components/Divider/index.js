import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './divider.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const Divider = () => {
  const [controls, ref] = useMotionEffect();

  const styleDivider = {
    hidden: {
      width: '0%',
    },
    visible: {
      width: '100%',
      transition: {
        delay: 0.5,
        transition: 'backInOut',
        duration: 1.3,
      },
    },
  };

  const styleh6 = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        transition: 'ease',
        duration: 1,
      },
    },
  };

  return (
    <Wrapper>
      <Content>
        <motion.h6
          ref={ref}
          variants={styleh6}
          animate={controls}
          initial='hidden'
        >
          available in
        </motion.h6>
        <motion.div
          className='divider'
          ref={ref}
          variants={styleDivider}
          animate={controls}
          initial='hidden'
        />
      </Content>
    </Wrapper>
  );
};

export default Divider;
