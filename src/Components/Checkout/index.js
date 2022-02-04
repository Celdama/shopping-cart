import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, subTotal } = location.state;

  const order = cartItems.map(({ quantity, name, price }) => {
    return (
      !!quantity && (
        <>
          <p>{name}</p>
          <p>{quantity}</p>
          <p>$ {quantity * price}</p>
          <br />
        </>
      )
    );
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Checkout page</h1>
      <div className='order'>
        <h5>Check your order before buy</h5>
        {order}
        <p>Total Order : {subTotal}</p>
      </div>
    </div>
  );
};

export default Checkout;
