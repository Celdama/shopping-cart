import React from 'react';
import {
  Wrapper,
  Content,
  Thumbnail,
  ContentProductInfo,
  ContentQuantity,
  QuantityBtn,
} from './cartItem.style';

const CartItem = ({
  thumbnail,
  name,
  price,
  quantity,
  deleteProductFromCart,
  decrementeProductQuantity,
  incrementeProductQuantity,
}) => {
  return (
    <Wrapper>
      <Content>
        <Thumbnail src={thumbnail} alt='product' />
        <ContentProductInfo>
          <span className='name'>{name}</span>
          <span className='price'>$ {price}.00 USD</span>
          <span onClick={deleteProductFromCart} className='delete'>
            REMOVE
          </span>
        </ContentProductInfo>
        <ContentQuantity>
          <QuantityBtn
            onClick={decrementeProductQuantity}
            className='decremente'
          >
            -
          </QuantityBtn>
          <span>{quantity}</span>
          <QuantityBtn
            onClick={incrementeProductQuantity}
            className='incremente'
          >
            +
          </QuantityBtn>
        </ContentQuantity>
      </Content>
    </Wrapper>
  );
};

export default CartItem;
