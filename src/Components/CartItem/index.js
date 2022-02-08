import React from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
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
            <FaMinus />
          </QuantityBtn>
          <span>{quantity}</span>
          <QuantityBtn
            onClick={incrementeProductQuantity}
            className='incremente'
          >
            <FaPlus />
          </QuantityBtn>
        </ContentQuantity>
      </Content>
    </Wrapper>
  );
};

CartItem.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  deleteProductFromCart: PropTypes.func,
  decrementeProductQuantity: PropTypes.func,
  incrementeProductQuantity: PropTypes.func,
};

export default CartItem;
