import React from 'react';
import { Thumbnail } from './productDetailThumbnail.style';

const ProductDetailThumbnails = ({
  color,
  isCurrent,
  handleChangeCurrentImage,
  img,
}) => {
  const children = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        transition: 'backInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <Thumbnail
      color={color}
      style={isCurrent ? { outline: `1px solid ${color}` } : {}}
      src={img}
      variants={children}
      alt='thumbnail'
      onClick={handleChangeCurrentImage}
    />
  );
};

export default ProductDetailThumbnails;
