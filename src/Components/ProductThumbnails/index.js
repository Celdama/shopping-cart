import React from 'react';
import { Wrapper, Thumbnail } from './productThumbnails.style';
import {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
} from '../../Helpers/shopPageMotionEffect';

const ProductThumbnails = ({
  productImages,
  currentProduct,
  color,
  activeImgId,
  handleChangeCurrentImage,
}) => {
  const thumbnailProducts = productImages.map((src) => {
    const { id, img } = src;

    return (
      <Thumbnail
        variants={getChildrenBasicMotionEffect(0, 0, 5, 1, 'backInOut', 0.4)}
        color={color}
        $currentProduct={currentProduct}
        key={id}
        onClick={() => handleChangeCurrentImage(src)}
        src={img}
        style={id === activeImgId ? { outline: `1px solid ${color}` } : {}}
      />
    );
  });

  return (
    <Wrapper
      key={currentProduct.id}
      variants={getContainerBasicMotionEffect(0, 1, 0, 0.2, 0.2)}
      animate='visible'
      initial='hidden'
    >
      {thumbnailProducts}
    </Wrapper>
  );
};

export default ProductThumbnails;
