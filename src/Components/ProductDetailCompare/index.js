import React from 'react';
import { Wrapper, Content } from './productDetailCompare.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { motion } from 'framer-motion';
import {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
} from '../../Helpers/shopPageMotionEffect';

const ProductDetailCompare = ({ title, sugar, calories, tala }) => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper tala={tala}>
      <Content
        variants={getContainerBasicMotionEffect(0, 1, 0.6, 0.6, 0.4)}
        animate={controls}
        initial='hidden'
      >
        <motion.h2
          ref={ref}
          variants={getChildrenBasicMotionEffect(
            0,
            0,
            5,
            1,
            0,
            'backInOut',
            0.4
          )}
        >
          {title}
        </motion.h2>
        <motion.div
          variants={getChildrenBasicMotionEffect(
            0,
            0,
            5,
            1,
            1,
            'backInOut',
            0.4
          )}
          className='container'
        >
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
