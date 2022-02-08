import React from 'react';
import { Wrapper, Content } from './checkoutForm.style';
import Paypal from '../../Images/paypal.svg';

const CheckoutForm = ({ formData, handleChange, handleSubmit }) => {
  const {
    email,
    fullName,
    adress,
    city,
    state,
    zip,
    country,
    freeShipping,
    cardNumber,
    expirationDate,
    securityCode,
    discountCode,
  } = formData;
  return (
    <Wrapper>
      <Content>
        <div className='form-container'>
          <form id='form' onSubmit={handleSubmit}>
            <div className='form-section'>
              <div className='section-header'>
                <h4>Customer Info</h4>
                <span>* Required</span>
              </div>
              <div className='section-body'>
                <div>
                  <label htmlFor='email'>Email *</label>
                  <input
                    onChange={handleChange}
                    required
                    type='email'
                    name='email'
                    value={email}
                  />
                </div>
              </div>
            </div>
            <div className='form-section'>
              <div className='section-header'>
                <h4>Shipping Adress</h4>
                <span>* Required</span>
              </div>
              <div className='section-body'>
                <div>
                  <label htmlFor='fullName'>Full Name *</label>
                  <input
                    onChange={handleChange}
                    required
                    type='text'
                    name='fullName'
                    value={fullName}
                  />
                </div>
                <div>
                  <label htmlFor='adress'>Street Adress *</label>
                  <input
                    onChange={handleChange}
                    required
                    type='text'
                    name='adress'
                    value={adress}
                  />
                </div>
                <div className='collapse-container'>
                  <div>
                    <label htmlFor='city'>City *</label>
                    <input
                      required
                      onChange={handleChange}
                      type='text'
                      name='city'
                      value={city}
                    />
                  </div>
                  <div>
                    <label htmlFor='state'>State</label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='state'
                      value={state}
                    />
                  </div>
                  <div>
                    <label htmlFor='zip'>Zip *</label>
                    <input
                      required
                      onChange={handleChange}
                      type='text'
                      name='zip'
                      value={zip}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='country'>Country *</label>
                  <input
                    required
                    onChange={handleChange}
                    type='text'
                    name='country'
                    value={country}
                  />
                </div>
              </div>
            </div>
            <div className='form-section'>
              <div className='section-header'>
                <h4>Shipping Method</h4>
              </div>
              <div className='section-body'>
                <div className='shipping'>
                  <input
                    onChange={handleChange}
                    type='checkbox'
                    name='freeShipping'
                    value={freeShipping}
                    checked={freeShipping}
                  />
                  <label htmlFor='freeShipping'>Free Shipping</label>
                </div>
              </div>
            </div>
            <div className='form-section'>
              <div className='section-header'>
                <h4>Payment Info</h4>
                <span>* Required</span>
              </div>
              <div className='section-body'>
                <div>
                  <label htmlFor='cardNumber'>Card Number *</label>
                  <input
                    required
                    onChange={handleChange}
                    type='number'
                    placeholder='1234 1234 1234 1234'
                    name='cardNumber'
                    value={cardNumber}
                  />
                </div>
                <div className='collapse-container'>
                  <div>
                    <label htmlFor='expirationDate'>Expiration Date *</label>
                    <input
                      required
                      onChange={handleChange}
                      type='number'
                      name='expirationDate'
                      placeholder='MM / YY'
                      value={expirationDate}
                    />
                  </div>
                  <div>
                    <label htmlFor='securityCode'>Security Code *</label>
                    <input
                      required
                      onChange={handleChange}
                      type='number'
                      name='securityCode'
                      placeholder='CVC'
                      value={securityCode}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='form-section'>
              <div className='section-header'>
                <h4>Discount Code</h4>
              </div>
              <div className='section-body discount'>
                <div>
                  <input
                    onChange={handleChange}
                    type='text'
                    disabled
                    name='discountCode'
                    placeholder='No new discount code yet'
                    value={discountCode}
                  />
                  <button disabled>Apply</button>
                </div>
              </div>
            </div>
          </form>
          <div className='payment-btn-container'>
            <button className='paypal'>
              <img src={Paypal} alt='paypal logo' />
            </button>
            <button className='credit-card'>Credit Card</button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CheckoutForm;
