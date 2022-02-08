import React from 'react';
import PropTypes from 'prop-types';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import CartCheckout from '../CartCheckout';
import getSubTotal from '../../Helpers/subTotalOrder';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';
import {
  Wrapper,
  Content,
  Item,
  ContentCart,
  CartItemsContainer,
  ListItems,
} from './cart.style';

const Cart = ({
  cartItems,
  displayCart,
  handleDisplayCart,
  deleteProductFromCart,
  incrementeProductQuantity,
  decrementeProductQuantity,
}) => {
  const cardItemsList = cartItems.map((item) => {
    const { id, quantity, name, price } = item;

    return (
      <Item key={id} quantity={quantity}>
        {!!quantity && (
          <CartItem
            thumbnail={getThumbnailProductByKey(name)}
            name={name}
            price={price}
            quantity={quantity}
            deleteProductFromCart={() => deleteProductFromCart(item)}
            decrementeProductQuantity={() => decrementeProductQuantity(item)}
            incrementeProductQuantity={() => incrementeProductQuantity(item)}
          />
        )}
      </Item>
    );
  });

  const subTotal = getSubTotal(cartItems);

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

export default Cart;
