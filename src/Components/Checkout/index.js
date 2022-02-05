import React from 'react';
import getSubTotal from '../../Helpers/subTotalOrder';
import { Wrapper, Content } from './checkout.style';
import CheckoutForm from '../CheckoutForm';
import CheckoutItems from '../CheckoutItems';
import CheckoutSummary from '../CheckoutSummary';

const Checkout = ({ cartItems }) => {
  const subTotal = getSubTotal(cartItems);

  return (
    <Wrapper>
      <Content>
        <div className='left-side'>
          <CheckoutForm />
          <CheckoutItems cartItems={cartItems} subTotal={subTotal} />
        </div>
        <div className='right-side'>
          <CheckoutSummary />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Checkout;
