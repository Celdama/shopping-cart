import React from 'react';
import { Wrapper } from './productDetailImg.style';
import { motion, AnimatePresence } from 'framer-motion';
import { getMainImgProductShopPageEffect } from '../../Helpers/shopPageMotionEffect';

const ProductDetailImg = ({ currentProductImage }) => {
  const { img } = currentProductImage;

  return (
    <Wrapper>
      <AnimatePresence>
        <motion.img
          className='product-img-xl'
          key={img}
          src={img}
          variants={getMainImgProductShopPageEffect()}
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
