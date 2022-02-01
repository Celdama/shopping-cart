import React from 'react';
import { Item } from './productDetailSavour.style';

const ProductDetailSavour = ({ name, handleCurrentProduct, current }) => {
  return (
    <Item current={current} onClick={handleCurrentProduct}>
      {name}
    </Item>
  );
};

export default ProductDetailSavour;
