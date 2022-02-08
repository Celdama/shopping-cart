import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './productDetailSavour.style';
import { getChildrenBasicMotionEffect } from '../../Helpers/motionEffect';

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

ProductDetailSavour.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  handleCurrentProduct: PropTypes.func,
  isCurrent: PropTypes.bool,
};

export default ProductDetailSavour;
