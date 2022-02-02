import React from 'react';
import {
  Wrapper,
  Content,
  Thumbnail,
  ContentProductInfo,
  ContentQuantity,
  QuantityBtn,
} from './cartItem.style';
import { ImPlus, ImMinus } from 'react-icons/im';

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
            <ImMinus />
          </QuantityBtn>
          <span>{quantity}</span>
          <QuantityBtn
            onClick={incrementeProductQuantity}
            className='incremente'
          >
            <ImPlus />
          </QuantityBtn>
        </ContentQuantity>
      </Content>
    </Wrapper>
  );
};

export default CartItem;
