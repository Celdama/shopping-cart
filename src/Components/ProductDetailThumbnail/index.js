import React from 'react';
import { Thumbnail } from './productDetailThumbnail.style';

const ProductDetailThumbnails = ({
  isCurrent,
  handleChangeCurrentImage,
  img,
}) => {
  return (
    <Thumbnail
      isCurrent={isCurrent}
      src={img}
      className='thumbnail'
      alt='thumbnail'
      onClick={handleChangeCurrentImage}
    />
  );
};

export default ProductDetailThumbnails;
