import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper, Thumbnail } from './productThumbnails.style';
import {
  getContainerInstaEffect,
  getChildrenInstaEffect,
} from '../../Helpers/motionEffect';

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
        variants={getChildrenInstaEffect()}
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
      variants={getContainerInstaEffect()}
      animate='visible'
      initial='hidden'
    >
      {thumbnailProducts}
    </Wrapper>
  );
};

ProductThumbnails.propTypes = {
  color: Proptypes.string,
  currentProduct: Proptypes.object,
  productImages: Proptypes.array,
  activeImgId: Proptypes.string,
  handleChangeCurrentImage: Proptypes.func,
};

export default ProductThumbnails;
