import React, { useState } from 'react';
import { Wrapper, Content } from './checkoutForm.style';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    adress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    freeShipping: true,
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    billingAddressSameAsShipping: false,
    discountCode: '',
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
    console.log(formData);
  };

  const setDiscount = (e) => {
    e.preventDefault();
    console.log('discount');
  };

  return (
    <Wrapper>
      <Content>
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
                  // required
                  type='email'
                  name='email'
                  value={formData.email}
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
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                />
              </div>
              <div>
                <label htmlFor='adress'>Street Adress *</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='adress'
                  value={formData.adress}
                />
              </div>
              <div className='collapse-container'>
                <div>
                  <label htmlFor='city'>City *</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='city'
                    value={formData.city}
                  />
                </div>
                <div>
                  <label htmlFor='state'>State</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='state'
                    value={formData.state}
                  />
                </div>
                <div>
                  <label htmlFor='zip'>Zip *</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='zip'
                    value={formData.zip}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='country'>Country *</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='country'
                  value={formData.country}
                />
              </div>
            </div>
          </div>
          <div className='form-section'>
            <div className='section-header'>
              <h4>Shipping Method</h4>
            </div>
            <div className='section-body'>
              <div>
                <label htmlFor='freeShipping'>Free Shipping</label>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='freeShipping'
                  value={formData.freeShipping}
                  checked={formData.freeShipping}
                />
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
                  onChange={handleChange}
                  type='number'
                  placeholder='1234 1234 1234 1234'
                  name='cardNumber'
                  value={formData.cardNumber}
                />
              </div>
              <div className='collapse-container'>
                <div>
                  <label htmlFor='expirationDate'>Expiration Date *</label>
                  <input
                    onChange={handleChange}
                    type='number'
                    name='expirationDatae'
                    placeholder='MM / YY'
                    value={formData.expirationDate}
                  />
                </div>
                <div>
                  <label htmlFor='securityCode'>Security Code *</label>
                  <input
                    onChange={handleChange}
                    type='number'
                    name='securityCode'
                    placeholder='CVC'
                    value={formData.securityCode}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-section'>
            <div className='section-header'>
              <h4>Discount Code</h4>
              <span>* Required</span>
            </div>
            <div className='section-body'>
              <input
                onChange={handleChange}
                type='text'
                name='discountCode'
                value={formData.discountCode}
              />
              <button onClick={setDiscount}>Apply</button>
            </div>
          </div>
        </form>
        <div className='summary'>
          <div className='summary-section'>
            <div className='summary-header'>
              <h4>Order Summary</h4>
            </div>
            <p>Total $ 400 USD</p>
            <button form='form' type='submit'>
              Place order
            </button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default CheckoutForm;