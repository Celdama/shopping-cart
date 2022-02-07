import React from 'react';
import { Wrapper, Content } from './productImgSmallScreen.style';

const ProductImgSmallScreen = ({
  productImages,
  activeImgId,
  handleChangeCurrentImage,
}) => {
  const productImgController = productImages.map((src) => {
    const { id, img } = src;
    return (
      <div
        className='controller'
        style={id === activeImgId ? { opacity: '1' } : { opacity: '0.4' }}
        onClick={() => handleChangeCurrentImage(src)}
      ></div>
    );
  });

  return (
    <Wrapper>
      <Content>{productImgController}</Content>
    </Wrapper>
  );
};

export default ProductImgSmallScreen;
