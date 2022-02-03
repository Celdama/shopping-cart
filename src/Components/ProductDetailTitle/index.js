import React from 'react';
import { Title } from './productDetailTitle.style';
import { getTitleProductShopPageEffect } from '../../Helpers/basicMotionEffect';

const ProductDetailTitle = ({ currentProduct }) => {
  const { name } = currentProduct;

  return (
    <Title
      key={name}
      variants={getTitleProductShopPageEffect()}
      animate='visible'
      initial='hidden'
    >
      {name}
    </Title>
  );
};

export default ProductDetailTitle;
