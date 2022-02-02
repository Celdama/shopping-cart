import React from 'react';
import { Wrapper, Content } from './cart.style';

const Cart = ({ cartItems, displayCart, handleDisplayCart }) => {
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
        <div className='header-cart'>
          <div>
            <h4>Your Cart</h4>
            {/* METTRE UNE ICON DELETE A LA PLACE DE X  */}
            <span onClick={handleDisplayCart}>x</span>
          </div>
        </div>
        <div className='content-cart'>
          <div>
            {sum > 0 ? (
              <div>
                <ul>{cardItemsList}</ul>
                <p>Subtotal : ${sum}</p>
              </div>
            ) : (
              <p>sorry, there's nothing here yet.</p>
            )}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Cart;
