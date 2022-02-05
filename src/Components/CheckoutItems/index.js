import React from 'react';
import { Wrapper, Content } from './checkoutItems.style';

const CheckoutItems = () => {
  return (
    <Wrapper>
      <Content>
        <div className='items-in-order form-section'>
          <div className='section-header'>
            <h4>Items in Order</h4>
          </div>
          <div className='section-body'>
            <div>on item</div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CheckoutItems;
