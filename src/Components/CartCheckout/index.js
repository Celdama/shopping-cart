import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, PriceInfo, Button } from './cartCheckout.style';

const CartCheckout = ({ subTotal, cartItems, handleDisplayCart }) => {
  return (
    <Wrapper>
      <Content>
        <PriceInfo>
          <span>Subtotal</span>
          <span className='price'> $ {subTotal}.00 USD</span>
        </PriceInfo>
        <Link onClick={handleDisplayCart} to={'checkout'}>
          <Button>checkout</Button>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default CartCheckout;
