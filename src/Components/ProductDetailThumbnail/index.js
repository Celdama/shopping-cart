import React from 'react';
import { Thumbnail } from './productDetailThumbnail.style';

const ProductDetailThumbnails = ({
  color,
  isCurrent,
  handleChangeCurrentImage,
  img,
}) => {
  return (
    <Thumbnail
      color={color}
      isCurrent={isCurrent}
      src={img}
      className='thumbnail'
      alt='thumbnail'
      onClick={handleChangeCurrentImage}
    />
  );
};

export default ProductDetailThumbnails;
