import React from 'react';
import { Thumbnail } from './productDetailThumbnail.style';

const ProductDetailThumbnails = ({
  color,
  isCurrent,
  handleChangeCurrentImage,
  img,
  id,
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
      // key={id}
      color={color}
      isCurrent={isCurrent}
      src={img}
      variants={children}
      className='thumbnail'
      alt='thumbnail'
      onClick={handleChangeCurrentImage}
    />
  );
};

export default ProductDetailThumbnails;
