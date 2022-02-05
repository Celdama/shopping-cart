import React from 'react';
import { Wrapper, Content } from './checkoutSummary.style';

const CheckoutSummary = ({ subTotal }) => {
  return (
    <Wrapper>
      <Content>
        <div className='summary-section'>
          <div className='summary-header'>
            <h4>Order Summary</h4>
          </div>
          <div className='summary-body'>
            <div>
              <span>Subtotal</span>
              <span>$ {subTotal} USD</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>$ 0.00 USD</span>
            </div>
            <div>
              <span>Total</span>
              <span>$ {subTotal} USD</span>
            </div>
          </div>
        </div>
        <button form='form' type='submit'>
          Place order
        </button>
      </Content>
    </Wrapper>
  );
};

export default CheckoutSummary;
