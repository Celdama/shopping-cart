import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './navbar.style';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';
import Logo from '../../Images/logo.svg';
import { productsSelector } from '../../Store/selectors/productsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDisplayCart } from '../../Store/actions/displayCartAction';
import { toggleDisplayMenu } from '../../Store/actions/displayMenuAction';

export const NavBar = ({ handleDisplayCart, handleDisplayMenu, products }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    const productQuantityCounter = (products) => {
      let sum = products.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);

      setNumberOfItems(sum);
    };

    productQuantityCounter(products);
  }, [products]);

  return (
    <Wrapper>
      <Content>
        <Link to={'/'}>
          <img src={Logo} alt='logo' />
        </Link>
        <ul>
          <li onClick={handleDisplayCart}>
            Cart {!!numberOfItems && <span>{numberOfItems}</span>}
          </li>
          <li onClick={handleDisplayMenu}>
            <FaGripLines />
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};

NavBar.propTypes = {
  numberOfCartItems: PropTypes.number,
  handleDisplayCart: PropTypes.func,
  handleDisplayMenu: PropTypes.func,
};

export const NavBarStore = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  const handleDisplayCart = useCallback(() => {
    dispatch(toggleDisplayCart());
  }, [dispatch]);

  const handleDisplayMenu = useCallback(() => {
    dispatch(toggleDisplayMenu());
  }, [dispatch]);

  return (
    <NavBar
      handleDisplayCart={handleDisplayCart}
      handleDisplayMenu={handleDisplayMenu}
      products={products}
    />
  );
};
