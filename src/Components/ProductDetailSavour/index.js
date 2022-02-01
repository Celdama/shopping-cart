import React from 'react';
import { Item } from './productDetailSavour.style';

const ProductDetailSavour = ({
  name,
  handleCurrentProduct,
  current,
  color,
}) => {
  return (
    <Item current={current} color={color} onClick={handleCurrentProduct}>
      {name}
    </Item>
  );
};

export default ProductDetailSavour;
