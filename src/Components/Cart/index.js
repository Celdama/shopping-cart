import React from 'react';
import { Wrapper, Content } from './cart.style';

const Cart = ({ cartItems }) => {
  console.log(cartItems);

  const sum = cartItems
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper>
      <Content>
        <h4>Your Cart</h4>
        <ul>
          {cartItems.map((item) => {
            return (
              <div>
                <li>
                  {item.name} : ${item.price}
                </li>
              </div>
            );
          })}
        </ul>
        <p>Subtotal : ${sum}</p>
      </Content>
    </Wrapper>
  );
};

export default Cart;
