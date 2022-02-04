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

  const subTotalProductCart = cartItems
    .map(({ quantity, price }) => quantity > 0 && price * quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <CartHeader handleDisplayCart={handleDisplayCart} />
        <ContentCart className='content-cart'>
          <CartItemsContainer className='container'>
            {subTotalProductCart ? (
              <div>
                <ListItems>
                  <ul>{cardItemsList}</ul>
                </ListItems>
                <CartCheckout
                  cartItems={cartItems}
                  subTotal={subTotalProductCart}
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
