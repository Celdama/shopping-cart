import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper } from './productDetailTitle.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const ProductDetailTitle = ({ key, title }) => {
  const [controls, ref] = useMotionEffect();

  const titleStyle = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        transition: 'ease',
        duration: 0.4,
      },
    },
  };

  return (
    <Wrapper>
      <motion.h3
        ref={ref}
        key={key}
        variants={titleStyle}
        animate={controls}
        initial='hidden'
      >
        {title}
      </motion.h3>
    </Wrapper>
  );
};

export default ProductDetailTitle;
