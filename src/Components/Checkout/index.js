import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import getSubTotal from '../../Helpers/subTotalOrder';
import CheckoutForm from '../CheckoutForm';
import CheckoutItems from '../CheckoutItems';
import CheckoutSummary from '../CheckoutSummary';
import { Wrapper, Content } from './checkout.style';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelector } from '../../Store/selectors/productsSelector';
import { resetProductQuantityAfterOrder } from '../../Store/actions/productsActions';

export const Checkout = ({ products, handleOrderComplete }) => {
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
    const { fullName, adress, city } = formData;
    alert(
      `Dear ${fullName} your order has been registered, and will be delivered to the adress ${adress} ${city} within 5 days.`
    );
    handleOrderComplete(products);
    setRedirect(true);
  };

  const subTotal = getSubTotal(products);

  return (
    <Wrapper>
      <Content>
        <div className='left-side'>
          <CheckoutForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <CheckoutItems products={products} subTotal={subTotal} />
        </div>
        <div className='right-side'>
          <CheckoutSummary subTotal={subTotal} />
        </div>
      </Content>
    </Wrapper>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  handleOrderComplete: PropTypes.func,
};

export const CheckoutStore = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  const handleOrderComplete = useCallback(
    (product) => {
      dispatch(resetProductQuantityAfterOrder(product));
    },
    [dispatch]
  );

  return (
    <Checkout products={products} handleOrderComplete={handleOrderComplete} />
  );
};
