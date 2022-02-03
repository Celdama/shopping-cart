import React from 'react';
import { Item } from './productDetailSavour.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const ProductDetailSavour = ({
  name,
  handleCurrentProduct,
  current,
  color,
}) => {
  const [controls, ref] = useMotionEffect();

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
      ref={ref}
      variants={elementStyle}
      animate={controls}
      initial='hidden'
      current={current}
      color={color}
      onClick={handleCurrentProduct}
    >
      {name}
    </Item>
  );
};

export default ProductDetailSavour;
