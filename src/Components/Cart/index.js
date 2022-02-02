import React from 'react';
import { Wrapper, Content } from './cart.style';

const Cart = ({ cartItems, displayCart }) => {
  const cardItemsList = cartItems.map((item) => {
    return (
      <div>
        {!!item.quantity && (
          <li>
            {item.name} : $ {item.price} <span>{item.quantity}</span>
          </li>
        )}
      </div>
    );
  });

  const sum = cartItems
    .map((item) => item.quantity > 0 && item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <h4>Your Cart</h4>
        {sum > 0 ? (
          <div>
            <ul>{cardItemsList}</ul>
            <p>Subtotal : ${sum}</p>
          </div>
        ) : (
          <p>sorry, there's nothing here yet.</p>
        )}
      </Content>
    </Wrapper>
  );
};

export default Cart;
