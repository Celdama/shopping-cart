import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cartItems } = location.state;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Checkout page</h1>
      <div className='order'>
        <h5>Check your order before buy</h5>
        {cartItems.map((item) => {
          return (
            !!item.quantity && (
              <>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>$ {item.quantity * item.price}</p>
              </>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
