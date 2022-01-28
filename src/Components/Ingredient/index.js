import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrapper, ContentQuestion, ContentAnswer } from './ingredient.style';

const Ingredient = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fromRightToLeft = {
    hidden: {
      x: 0,
    },
    visible: {
      x: -1200,
      transition: {
        type: 'tween',
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  const fromLeftToRight = {
    hidden: {
      x: -1200,
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',

        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <Wrapper>
      <ContentQuestion>
        <h3>
          <span>Number of</span>
          <span className='serif'>ingredients:</span>
        </h3>
      </ContentQuestion>
      <ContentAnswer>
        <motion.div
          variants={fromRightToLeft}
          animate={controls}
          initial='hidden'
        >
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
        </motion.div>
        <motion.div
          variants={fromLeftToRight}
          animate={controls}
          initial='hidden'
        >
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fromRightToLeft}
          animate={controls}
          initial='hidden'
        >
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
        </motion.div>
        <motion.div
          variants={fromLeftToRight}
          animate={controls}
          initial='hidden'
        >
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
        </motion.div>
        <motion.div
          variants={fromRightToLeft}
          animate={controls}
          initial='hidden'
        >
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
          <p className='odd'>ONE</p>
          <p>ONE</p>
        </motion.div>
      </ContentAnswer>
    </Wrapper>
  );
};

export default Ingredient;
