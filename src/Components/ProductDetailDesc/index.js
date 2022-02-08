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
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
} from '../../Helpers/motionEffect';

const ProductDetailDesc = ({
  handleCurrentProduct,
  addProductToCart,
  currentProduct,
}) => {
  const { id, price, description } = currentProduct;

  return (
    <Wrapper>
      <Content
        key={id}
        variants={getContainerBasicMotionEffect(0, 1, 0, 0.2, 0.2)}
        animate='visible'
        initial='hidden'
      >
        <ContentPrice
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
        >
          $ {price}.00 USD
        </ContentPrice>
        <ContentDesc
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          className='product-desc'
        >
          {description}
        </ContentDesc>
        <ContentMarketing
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
        >
          can't decide which flavor is right for you ? <br />
          <span onClick={() => handleCurrentProduct('variety')}>
            try our sample pack
          </span>
        </ContentMarketing>
        <Button
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          onClick={addProductToCart}
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
