import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './productDetailSavour.style';
import { getChildrenBasicMotionEffect } from '../../Helpers/motionEffect';

const ProductDetailSavour = ({ product, handleCurrentProduct, isCurrent }) => {
  const { color, name } = product;
  return (
    <Item
      variants={getChildrenBasicMotionEffect(50, 0, 0, 1, 0.2, 'ease', 0.6)}
      style={isCurrent ? { borderBottom: `2px solid ${color}` } : {}}
      animate='visible'
      initial='hidden'
      color={color}
      onClick={() => handleCurrentProduct(product)}
    >
      {name}
    </Item>
  );
};

ProductDetailSavour.propTypes = {
  handleCurrentProduct: PropTypes.func,
  isCurrent: PropTypes.bool,
  product: PropTypes.object,
};

export default ProductDetailSavour;
