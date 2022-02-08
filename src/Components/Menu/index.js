import React from 'react';
import TalaLogo from '../../Images/logo.svg';
import {
  Wrapper,
  Content,
  NavMenu,
  MenuTitle,
  MenuLink,
  Logo,
} from './menu.style';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Menu = ({ displayMenu, handleDisplayMenu }) => {
  return (
    <Wrapper className={displayMenu ? 'show-menu' : 'hide-menu'}>
      <Content>
        <NavMenu>
          <ul>
            <li>
              <Logo src={TalaLogo} alt='logo' />
            </li>
            <li className='close' onClick={handleDisplayMenu}>
              <FaTimes />
            </li>
          </ul>
        </NavMenu>
        <MenuTitle>
          <h1>menu</h1>
        </MenuTitle>
        <MenuLink>
          <div className='products'>
            <ul>
              <li>
                <Link
                  to={'shop'}
                  onClick={handleDisplayMenu}
                  state={{ id: 'aa001' }}
                >
                  Mango
                </Link>
              </li>
              <li>
                <Link
                  to={'shop'}
                  onClick={handleDisplayMenu}
                  state={{ id: 'ab002' }}
                >
                  Banana
                </Link>
              </li>
              <li>
                <Link
                  to={'shop'}
                  onClick={handleDisplayMenu}
                  state={{ id: 'ac003' }}
                >
                  Pineapple
                </Link>
              </li>
              <li>
                <Link
                  to={'shop'}
                  onClick={handleDisplayMenu}
                  state={{ id: 'ad004' }}
                >
                  Pitahaya
                </Link>
              </li>
              <li>
                <Link
                  to={'shop'}
                  onClick={handleDisplayMenu}
                  state={{ id: 'ae005' }}
                >
                  Variety
                </Link>
              </li>
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
