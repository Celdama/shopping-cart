import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  incrementeProductQuantity,
  decrementeProductQuantity,
  deleteProduct,
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
  handleIncrementeQuantity,
  handleDecrementeQuantity,
  handleDeleteProductFromCart,
}) => {
  const { name, price, quantity } = product;

  return (
    <Wrapper>
      <Content>
        <Thumbnail src={thumbnail} alt='product' />
        <ContentProductInfo>
          <span className='name'>{name}</span>
          <span className='price'>$ {price}.00 USD</span>
          <span
            onClick={() => handleDeleteProductFromCart(product)}
            className='delete'
          >
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
          <span>{quantity}</span>
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
  product: PropTypes.object,
  handleDeleteProductFromCart: PropTypes.func,
  handleDecrementeQuantity: PropTypes.func,
  handleIncrementeQuantity: PropTypes.func,
};

export const CartItemStore = ({ thumbnail, product }) => {
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

  const handleDeleteProductFromCart = useCallback(
    (product) => {
      dispatch(deleteProduct(product));
    },
    [dispatch]
  );

  return (
    <CartItem
      thumbnail={thumbnail}
      product={product}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handleDecrementeQuantity={handleDecrementeQuantity}
      handleIncrementeQuantity={handleIncrementeQuantity}
    />
  );
};

CartItemStore.propTypes = {
  thumbnail: PropTypes.string,
  product: PropTypes.object,
};
