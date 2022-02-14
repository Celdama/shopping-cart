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
  activeImgId,
  handleChangeCurrentImage,
}) => {
  const { color, id } = currentProduct;

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
      key={id}
      variants={getContainerInstaEffect()}
      animate='visible'
      initial='hidden'
    >
      {thumbnailProducts}
    </Wrapper>
  );
};

ProductThumbnails.propTypes = {
  currentProduct: Proptypes.object,
  productImages: Proptypes.array,
  activeImgId: Proptypes.string,
  handleChangeCurrentImage: Proptypes.func,
};

export default ProductThumbnails;
