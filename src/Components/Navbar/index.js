import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './navbar.style';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';
import Logo from '../../Images/logo.svg';

const NavBar = ({
  handleDisplayCart,
  handleDisplayMenu,
  numberOfCartItems,
}) => {
  return (
    <Wrapper>
      <Content>
        <Link to={'/'}>
          <img src={Logo} alt='logo' />
        </Link>
        <ul>
          <li onClick={handleDisplayCart}>
            Cart {numberOfCartItems > 0 && <span>{numberOfCartItems}</span>}
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

export default NavBar;
