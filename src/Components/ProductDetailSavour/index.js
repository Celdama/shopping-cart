import React from 'react';
import { Item } from './productDetailSavour.style';
import { getChildrenBasicMotionEffect } from '../../Helpers/shopPageMotionEffect';

const ProductDetailSavour = ({
  name,
  handleCurrentProduct,
  isCurrent,
  color,
}) => {
  return (
    <Item
      variants={getChildrenBasicMotionEffect(50, 0, 0, 1, 0.2, 'ease', 0.6)}
      style={isCurrent ? { borderBottom: `2px solid ${color}` } : {}}
      animate='visible'
      initial='hidden'
      color={color}
      onClick={handleCurrentProduct}
    >
      {name}
    </Item>
  );
};

export default ProductDetailSavour;
