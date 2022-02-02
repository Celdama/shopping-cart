import React from 'react';
import { Wrapper, Content, PriceInfo, Button } from './cartCheckout.style';

const CartCheckout = ({ sum }) => {
  return (
    <Wrapper>
      <Content>
        <PriceInfo>
          <span>Subtotal</span>
          <span className='price'> $ {sum}.00 USD</span>
        </PriceInfo>
        <Button>checkout</Button>
      </Content>
    </Wrapper>
  );
};

export default CartCheckout;
