import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, ContentQuestion, ContentAnswer } from './ingredient.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const Ingredient = () => {
  const [controls, ref] = useMotionEffect();

  const fromRightToLeft = {
    hidden: {
      x: 0,
    },
    visible: {
      x: -400,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  const fromLeftToRight = {
    hidden: {
      x: -400,
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <Wrapper>
      <ContentQuestion>
        {/* METTRE H3 DANS UN COMPONENT POUR LANIMER */}
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
