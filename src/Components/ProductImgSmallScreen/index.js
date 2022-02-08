import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './productImgSmallScreen.style';

const ProductImgSmallScreen = ({
  productImages,
  activeImgId,
  handleChangeCurrentImage,
}) => {
  const productImgController = productImages.map((src) => {
    const { id } = src;
    return (
      <div
        key={id}
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

ProductImgSmallScreen.propTypes = {
  productImages: PropTypes.array,
  activeImgId: PropTypes.string,
  handleChangeCurrentImage: PropTypes.func,
};

export default ProductImgSmallScreen;
