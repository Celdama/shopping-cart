import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper, Content, PriceInfo, Button } from './cartCheckout.style';

const CartCheckout = ({ subTotal, handleDisplayCart }) => {
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

CartCheckout.propTypes = {
  subTotal: PropTypes.number,
  handleDisplayCart: PropTypes.func,
};

export default CartCheckout;
