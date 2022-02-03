import React from 'react';
import { Item } from './productDetailSavour.style';

const ProductDetailSavour = ({
  name,
  handleCurrentProduct,
  isCurrent,
  color,
}) => {
  const elementStyle = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        transition: 'ease',
        duration: 0.6,
      },
    },
  };

  return (
    <Item
      variants={elementStyle}
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
