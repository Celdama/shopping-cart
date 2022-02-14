import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  incrementeProductQuantity,
  decrementeProductQuantity,
} from '../../Store/actions/productsActions';

import {
  Wrapper,
  Content,
  Thumbnail,
  ContentProductInfo,
  ContentQuantity,
  QuantityBtn,
} from './cartItem.style';

export const CartItem = ({
  product,
  thumbnail,
  deleteProductFromCart,
  handleIncrementeQuantity,
  handleDecrementeQuantity,
}) => {
  return (
    <Wrapper>
      <Content>
        <Thumbnail src={thumbnail} alt='product' />
        <ContentProductInfo>
          <span className='name'>{product.name}</span>
          <span className='price'>$ {product.price}.00 USD</span>
          <span onClick={deleteProductFromCart} className='delete'>
            REMOVE
          </span>
        </ContentProductInfo>
        <ContentQuantity>
          <QuantityBtn
            onClick={() => handleDecrementeQuantity(product)}
            className='decremente'
          >
            <FaMinus />
          </QuantityBtn>
          <span>{product.quantity}</span>
          <QuantityBtn
            onClick={() => handleIncrementeQuantity(product)}
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

export const CartItemStore = ({
  thumbnail,
  product,
  deleteProductFromCart,
}) => {
  const dispatch = useDispatch();

  const handleIncrementeQuantity = useCallback(
    (product) => {
      dispatch(incrementeProductQuantity(product));
    },
    [dispatch]
  );

  const handleDecrementeQuantity = useCallback(
    (product) => {
      dispatch(decrementeProductQuantity(product));
    },
    [dispatch]
  );

  return (
    <CartItem
      thumbnail={thumbnail}
      product={product}
      deleteProductFromCart={deleteProductFromCart}
      handleDecrementeQuantity={handleDecrementeQuantity}
      handleIncrementeQuantity={handleIncrementeQuantity}
    />
  );
};
