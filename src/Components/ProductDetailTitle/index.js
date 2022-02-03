import React from 'react';
import { Title } from './productDetailTitle.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const ProductDetailTitle = ({ key, title }) => {
  const [controls, ref] = useMotionEffect();

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
    <Title
      ref={ref}
      key={key}
      variants={titleStyle}
      animate={controls}
      initial='hidden'
    >
      {title}
    </Title>
  );
};

export default ProductDetailTitle;
