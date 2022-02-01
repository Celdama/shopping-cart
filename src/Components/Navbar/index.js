import React from 'react';
import { Wrapper, Content, Logo } from './navbar.style';
import { Link } from 'react-router-dom';

const NavBar = ({ handleDisplayCart }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to={'/'}>tala</Link>
        </Logo>
        <ul>
          <li onClick={handleDisplayCart}>Cart</li>
          <li>Menu</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
