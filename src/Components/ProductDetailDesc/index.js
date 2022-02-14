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
  products,
  handleCurrentProduct,
  currentProduct,
  handleIncrementeQuantity,
  handleDisplayCart,
  displayCart,
}) => {
  const { id, price, description } = currentProduct;

  const addProductToCart = (product) => {
    handleIncrementeQuantity(product);
    if (!displayCart) {
      handleDisplayCart();
    }
  };

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
          <span onClick={() => handleCurrentProduct(products[4])}>
            try our sample pack
          </span>
        </ContentMarketing>
        <Button
          variants={getChildrenDescEffect()}
          onClick={() => addProductToCart(currentProduct)}
        >
          add to cart
        </Button>
      </Content>
    </Wrapper>
  );
};

ProductDetailDesc.propTypes = {
  products: PropTypes.array,
  currentProduct: PropTypes.object,
  displayCart: PropTypes.bool,
  handleCurrentProduct: PropTypes.func,
  handleDisplayCart: PropTypes.func,
  handleIncrementeQuantity: PropTypes.func,
};

export default ProductDetailDesc;
