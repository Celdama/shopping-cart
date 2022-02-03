import React from 'react';
import { Wrapper } from './productDetailImg.style';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailImg = ({ key, src }) => {
  const variants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <Wrapper>
      <AnimatePresence>
        <motion.img
          className='product-img-xl'
          key={key}
          src={src}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag='y'
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={1}
        />
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProductDetailImg;
