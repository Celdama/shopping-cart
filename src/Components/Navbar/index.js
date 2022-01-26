import React from 'react';
import { Wrapper, Content, Logo } from './navbar.style';

const NavBar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>tala</Logo>
        <ul>
          <li>Cart</li>
          <li>Menu</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
