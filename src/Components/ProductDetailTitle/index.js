import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './productDetailTitle.style';
import { getTitleProductShopPageEffect } from '../../Helpers/motionEffect';

const ProductDetailTitle = ({ currentProduct }) => {
  const { name } = currentProduct;

  return (
    <Title
      key={name}
      variants={getTitleProductShopPageEffect()}
      animate='visible'
      initial='hidden'
    >
      {name}
    </Title>
  );
};

ProductDetailTitle.propTypes = {
  currentProduct: PropTypes.object,
};

export default ProductDetailTitle;
