import React from 'react';
import { Wrapper, Content, Item } from './cart.style';
import getCoverProductByKey from '../../Helpers/getCoverProductByKey';
import { useState } from 'react/cjs/react.development';

const Cart = ({
  cartItems,
  displayCart,
  handleDisplayCart,
  deleteProductFromCart,
  incrementeProductQuantity,
  decrementeProductQuantity,
}) => {
  const cardItemsList = cartItems.map((item) => {
    const cover = getCoverProductByKey(item.name)[0].img;

    return (
      <Item quantity={item.quantity}>
        {!!item.quantity && (
          <div className='item-container'>
            <div className='left'>
              <img src={cover} alt='' />
            </div>
            <div className='center'>
              <span className='name'>{item.name}</span>
              <span className='price'>$ {item.price}.00 USD</span>
              <span
                onClick={() => deleteProductFromCart(item)}
                className='delete'
              >
                REMOVE
              </span>
            </div>
            <div className='right'>
              <span
                onClick={() => decrementeProductQuantity(item)}
                className='decremente'
              >
                -
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() => incrementeProductQuantity(item)}
                className='incremente'
              >
                +
              </span>
            </div>
          </div>
        )}
      </Item>
    );
  });

  const sum = cartItems
    .map((item) => item.quantity > 0 && item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <div className='header-cart'>
          <div>
            <h4>Your Cart</h4>
            {/* METTRE UNE ICON DELETE A LA PLACE DE X  */}
            <span onClick={handleDisplayCart}>x</span>
          </div>
        </div>
        <div className='content-cart'>
          <div className='container'>
            {sum > 0 ? (
              <div>
                <div className='list-items'>
                  <ul>{cardItemsList}</ul>
                </div>
                <div className='checkout'>
                  <p className='total'>
                    <span>Subtotal</span>
                    <span className='price'> $ {sum}.00 USD</span>
                  </p>
                  <button>checkout</button>
                </div>
              </div>
            ) : (
              <p className='empty-product'>sorry, there's nothing here yet.</p>
            )}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Cart;
