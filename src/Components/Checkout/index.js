import React from 'react';
import getSubTotal from '../../Helpers/subTotalOrder';
import { Wrapper, Content } from './checkout.style';
import CheckoutForm from '../CheckoutForm';

const Checkout = ({ cartItems }) => {
  const order = cartItems.map(({ quantity, name, price }) => {
    return (
      !!quantity && (
        <>
          <p>{name}</p>
          <p>{quantity}</p>
          <p>$ {quantity * price}.00 USD</p>
          <br />
        </>
      )
    );
  });

  const subTotal = getSubTotal(cartItems);

  return (
    <Wrapper>
      <Content>
        <h1>Checkout page</h1>
        {/* <div className='order'>
          {subTotal ? (
            <div>
              <div>{order}</div>
              <p>Total Order : $ {subTotal}.00 USD </p>
            </div>
          ) : (
            <p>no order</p>
          )}
        </div> */}
        <CheckoutForm />
      </Content>
    </Wrapper>
  );
};

export default Checkout;
