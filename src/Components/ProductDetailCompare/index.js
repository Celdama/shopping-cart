import React from 'react';
import { Wrapper, Content } from './productDetailCompare.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { motion } from 'framer-motion';

const ProductDetailCompare = ({ title, sugar, calories, tala }) => {
  const [controls, ref] = useMotionEffect();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        delayChildren: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const children = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
      transition: {
        transition: 'backInOut',
        duration: 0.4,
      },
    },
  };

  return (
    <Wrapper tala={tala}>
      <Content variants={container} animate={controls} initial='hidden'>
        <motion.h2 ref={ref} variants={children}>
          {title}
        </motion.h2>
        <motion.div variants={children} className='container'>
          <div className='sugar'>
            <span className='value'>{sugar}g</span>
            <span>Sugars</span>
          </div>
          <div className='calories'>
            <span className='value'>{calories}</span>
            <span>Calories</span>
          </div>
        </motion.div>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailCompare;
