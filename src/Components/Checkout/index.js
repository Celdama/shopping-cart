import React from 'react';
import getSubTotal from '../../Helpers/subTotalOrder';

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
    <div style={{ textAlign: 'center' }}>
      <h1>Checkout page</h1>
      <div className='order'>
        {subTotal ? (
          <div>
            <h5>Check your order before buy</h5>
            <div>{order}</div>
            <p>Total Order : $ {subTotal}.00 USD </p>
          </div>
        ) : (
          <p>no order</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
