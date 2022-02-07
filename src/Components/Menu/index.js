import React from 'react';
import TalaLogo from '../../Images/logo.svg';
import { Wrapper, Content, NavMenu, MenuTitle, MenuLink } from './menu.style';

const Menu = ({ displayMenu, handleDisplayMenu }) => {
  return (
    <Wrapper className={displayMenu ? 'show-menu' : 'hide-menu'}>
      <Content>
        <NavMenu>
          <ul>
            <li>
              <img src={TalaLogo} alt='logo' />
            </li>
            <li className='close' onClick={handleDisplayMenu}>
              x
            </li>
          </ul>
        </NavMenu>
        <MenuTitle>
          <h1>menu</h1>
        </MenuTitle>
        <MenuLink>
          <div className='products'>
            <ul>
              <li>Mango</li>
              <li>Banana</li>
              <li>Pineapple</li>
              <li>Pitahaya</li>
              <li>Variety</li>
            </ul>
          </div>
          <div className='links'>
            <ul>
              <li>About</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
        </MenuLink>
      </Content>
    </Wrapper>
  );
};

export default Menu;
