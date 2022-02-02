import React from 'react';
import { Wrapper, Content } from './cartHeader.style';
import { VscClose } from 'react-icons/vsc';

const CartHeader = ({ handleDisplayCart }) => {
  return (
    <Wrapper>
      <Content>
        <h4>Your Cart</h4>
        <VscClose onClick={handleDisplayCart} />
      </Content>
    </Wrapper>
  );
};

export default CartHeader;
