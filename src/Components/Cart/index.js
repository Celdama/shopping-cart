import React from 'react';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';
import {
  Wrapper,
  Content,
  Item,
  ContentCart,
  CartItemsContainer,
  ListItems,
} from './cart.style';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import CartCheckout from '../CartCheckout';
import getSubTotal from '../../Helpers/subTotalOrder';

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
      <Item quantity={quantity}>
        {!!quantity && (
          <CartItem
            key={id}
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
        <ContentCart className='content-cart'>
          <CartItemsContainer className='container'>
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

export default Cart;
