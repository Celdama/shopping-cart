import React, { useState, useEffect } from 'react';
import { Wrapper, Content } from './cart.style';

const Cart = ({ cartItems, displayCart }) => {
  console.log(cartItems);
  const [globalCart, setGlobalCart] = useState([]);
  const [cartProductsQuantity, setCartProductsQuantity] = useState([
    {
      name: 'mango',
      quantity: 0,
    },
    {
      name: 'banana',
      quantity: 0,
    },
  ]);

  const cardItemsList = cartItems.map((item) => {
    return (
      <div>
        <li>
          {item.name} : $ {item.price}
        </li>
      </div>
    );
  });

  const sum = cartItems
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <h4>Your Cart</h4>
        <ul>{cardItemsList ? cardItemsList : 'no product'}</ul>
        <p>Subtotal : ${sum}</p>
      </Content>
    </Wrapper>
  );
};

export default Cart;
