import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Content,
  Button,
  ContentMarketing,
  ContentDesc,
  ContentPrice,
} from './productDetailDesc.style';
import {
  getContainerDescEffect,
  getChildrenDescEffect,
} from '../../Helpers/motionEffect';

const ProductDetailDesc = ({
  handleCurrentProduct,
  addProductToCart,
  currentProduct,
  handleIncrementeQuantity,
}) => {
  const { id, price, description } = currentProduct;

  return (
    <Wrapper>
      <Content
        key={id}
        variants={getContainerDescEffect()}
        animate='visible'
        initial='hidden'
      >
        <ContentPrice variants={getChildrenDescEffect()}>
          $ {price}.00 USD
        </ContentPrice>
        <ContentDesc
          variants={getChildrenDescEffect()}
          className='product-desc'
        >
          {description}
        </ContentDesc>
        <ContentMarketing variants={getChildrenDescEffect()}>
          can't decide which flavor is right for you ? <br />
          <span onClick={() => handleCurrentProduct('variety')}>
            try our sample pack
          </span>
        </ContentMarketing>
        <Button
          variants={getChildrenDescEffect()}
          onClick={() => handleIncrementeQuantity(currentProduct)}
        >
          add to cart
        </Button>
      </Content>
    </Wrapper>
  );
};

ProductDetailDesc.propTypes = {
  currentProduct: PropTypes.object,
  handleCurrentProduct: PropTypes.func,
  addProductToCart: PropTypes.func,
};

export default ProductDetailDesc;
