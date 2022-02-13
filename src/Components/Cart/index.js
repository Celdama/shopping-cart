import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import CartCheckout from '../CartCheckout';
import getSubTotal from '../../Helpers/subTotalOrder';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';
import { incrementeProductQuantity } from '../../Store/actions/productsActions';
import {
  Wrapper,
  Content,
  Item,
  ContentCart,
  CartItemsContainer,
  ListItems,
} from './cart.style';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../Store/selectors/productsSelector';

export const Cart = ({
  productsStore,
  displayCart,
  handleDisplayCart,
  deleteProductFromCart,
  incrementeProductQuantity,
  decrementeProductQuantity,
  handleIncrementeQuantity,
}) => {
  const cardItemsList = productsStore.map((item) => {
    const { id, quantity, name, price } = item;

    return (
      <Item key={id} quantity={quantity}>
        {!!quantity && (
          <CartItem
            thumbnail={getThumbnailProductByKey(name)}
            item={item}
            name={name}
            price={price}
            quantity={quantity}
            deleteProductFromCart={() => deleteProductFromCart(item)}
            decrementeProductQuantity={() => decrementeProductQuantity(item)}
            // incrementeProductQuantity={() => incrementeProductQuantity(item)}
            handleIncrementeQuantity={() => handleIncrementeQuantity(item)}
          />
        )}
      </Item>
    );
  });

  const subTotal = getSubTotal(productsStore);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <CartHeader handleDisplayCart={handleDisplayCart} />
        <ContentCart>
          <CartItemsContainer>
            {subTotal ? (
              <div>
                <ListItems>
                  <ul>{cardItemsList}</ul>
                </ListItems>
                <CartCheckout
                  subTotal={subTotal}
                  handleDisplayCart={handleDisplayCart}
                />
              </div>
            ) : (
              <p className='empty-product'>sorry, there's nothing here yet.</p>
            )}
          </CartItemsContainer>
        </ContentCart>
      </Content>
    </Wrapper>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
  displayCart: PropTypes.bool,
  handleDisplayCart: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  incrementeProductQuantity: PropTypes.func,
  decrementeProductQuantity: PropTypes.func,
};

export const CartStore = ({
  displayCart,
  handleDisplayCart,
  deleteProductFromCart,
  decrementeProductQuantity,
}) => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  const handleIncrementeQuantity = useCallback(
    (product) => {
      dispatch(incrementeProductQuantity(product));
    },
    [dispatch]
  );

  return (
    <Cart
      productsStore={products}
      displayCart={displayCart}
      handleDisplayCart={handleDisplayCart}
      deleteProductFromCart={deleteProductFromCart}
      incrementeProductQuantity={incrementeProductQuantity}
      handleIncrementeQuantity={handleIncrementeQuantity}
      decrementeProductQuantity={decrementeProductQuantity}
    />
  );
};
