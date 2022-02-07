import React from 'react';
import { Wrapper, Content } from './menu.style';

const Menu = ({ displayMenu }) => {
  console.log(displayMenu);
  return (
    <Wrapper className={displayMenu ? 'show-menu' : 'hide-menu'}>
      <Content>MENU</Content>
    </Wrapper>
  );
};

export default Menu;
