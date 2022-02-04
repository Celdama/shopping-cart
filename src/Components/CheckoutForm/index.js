import React, { useState } from 'react';

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

  return (
    <div>
      <form>
        <div>
          <h4>Customer Info</h4>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='email'
              name='email'
              value={formData.email}
            />
          </div>
        </div>
        <div>
          <h4>Shipping Adress</h4>
          <div>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              name='fullName'
              placeholder='full name'
              value={formData.fullName}
            />
          </div>
          <div>
            <label htmlFor='adress'>Street Adress</label>
            <input
              type='text'
              name='adress'
              placeholder='street adress'
              value={formData.adress}
            />
          </div>
          <div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                placeholder='city'
                value={formData.city}
              />
            </div>
            <div>
              <label htmlFor='state'>State</label>
              <input
                type='text'
                name='state'
                placeholder='state'
                value={formData.state}
              />
            </div>
            <div>
              <label htmlFor='zip'>Zip</label>
              <input
                type='text'
                name='zip'
                placeholder='zip'
                value={formData.zip}
              />
            </div>
          </div>
          <div>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              name='country'
              placeholder='country'
              value={formData.country}
            />
          </div>
        </div>
        <div>
          <h4>Shipping Method</h4>
          <label htmlFor='freeShipping'>Free Shipping</label>
          <input
            type='checkbox'
            name='freeShipping'
            value={formData.freeShipping}
            checked={formData.freeShipping}
          />
        </div>
        <div>
          <h4>Payment Info</h4>
          <div>
            <label htmlFor='cardNumber'>Email</label>
            <input
              type='number'
              placeholder='card number'
              name='cardNumber'
              value={formData.cardNumber}
            />
          </div>
          <div>
            <div>
              <label htmlFor='expirationDate'>Expiration Date</label>
              <input
                type='number'
                name='expirationDatae'
                placeholder='MM / YY'
                value={formData.expirationDate}
              />
            </div>
            <div>
              <label htmlFor='securityCode'>Security Code</label>
              <input
                type='number'
                name='securityCode'
                placeholder='MM / YY'
                value={formData.securityCode}
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Discount Code</h4>
          <input
            type='text'
            name='discountCode'
            value={formData.discountCode}
          />
          <button>Apply</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
