import React, { useState, useEffect } from 'react';
import getSubTotal from '../../Helpers/subTotalOrder';
import { Wrapper, Content } from './checkout.style';
import CheckoutForm from '../CheckoutForm';
import CheckoutItems from '../CheckoutItems';
import CheckoutSummary from '../CheckoutSummary';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, handleOrderComplete }) => {
  let navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
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

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [redirect]);

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
    console.log(formData);
    alert(
      `Dear ${formData.fullName} your order has been registered, and will be delivered to the adress ${formData.adress} ${formData.city} within 5 days.`
    );
    handleOrderComplete();
    setRedirect(true);
  };

  const subTotal = getSubTotal(cartItems);

  return (
    <Wrapper>
      <Content>
        <div className='left-side'>
          <CheckoutForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <CheckoutItems cartItems={cartItems} subTotal={subTotal} />
        </div>
        <div className='right-side'>
          <CheckoutSummary subTotal={subTotal} />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Checkout;
