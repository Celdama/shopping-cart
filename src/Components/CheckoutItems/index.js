import React from 'react';
import { Wrapper, Content } from './checkoutItems.style';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';

const CheckoutItems = ({ cartItems, subTotal }) => {
  const order = cartItems.map(({ id, quantity, name, price }) => {
    return (
      !!quantity && (
        <div key={id} className='product-items'>
          <div>
            <img src={getThumbnailProductByKey(name)} alt='product' />
            <div>
              <p className='product-name'>{name}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
          <div>
            <p>$ {quantity * price}.00 USD</p>
          </div>
        </div>
      )
    );
  });

  return (
    <Wrapper>
      <Content>
        <div className='section-header'>
          <h4>Items in Order</h4>
        </div>
        <div className='section-body'>
          {subTotal ? <div className='product-list'>{order}</div> : null}
        </div>
      </Content>
    </Wrapper>
  );
};

export default CheckoutItems;
