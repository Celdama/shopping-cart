import React from 'react';
import { getMainImgProductShopPageEffect } from '../../Helpers/motionEffect';
import { Wrapper, Image } from './productDetailImg.style';

const ProductDetailImg = ({ currentProductImage }) => {
  const { img } = currentProductImage;

  return (
    <Wrapper>
      <Image
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
    </Wrapper>
  );
};

export default ProductDetailImg;
