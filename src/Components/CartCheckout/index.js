import React from 'react';
import { Wrapper, Content, PriceInfo, Button } from './cartCheckout.style';

const CartCheckout = ({ subTotal }) => {
  return (
    <Wrapper>
      <Content>
        <PriceInfo>
          <span>Subtotal</span>
          <span className='price'> $ {subTotal}.00 USD</span>
        </PriceInfo>
        <Button>checkout</Button>
      </Content>
    </Wrapper>
  );
};

export default CartCheckout;
