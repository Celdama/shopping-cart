import React from 'react';
import { Title } from './productDetailTitle.style';

const ProductDetailTitle = ({ currentProduct }) => {
  const { name } = currentProduct;

  const titleStyle = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        transition: 'ease',
        duration: 0.4,
      },
    },
  };

  return (
    <Title key={name} variants={titleStyle} animate='visible' initial='hidden'>
      {name}
    </Title>
  );
};

export default ProductDetailTitle;
