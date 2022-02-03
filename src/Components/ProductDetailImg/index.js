import React from 'react';
import { Wrapper } from './productDetailImg.style';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailImg = ({ currentProductImage }) => {
  const { img } = currentProductImage;
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Wrapper>
      <AnimatePresence>
        <motion.img
          className='product-img-xl'
          key={img}
          src={img}
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.8 },
          }}
        />
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProductDetailImg;
