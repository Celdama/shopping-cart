import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDisplayMenu } from '../../Store/actions/displayMenuAction';
import { displayMenuSelector } from '../../Store/selectors/displayMenuSelector';

import PropTypes from 'prop-types';
import LogoDark from '../../Images/logoDark.svg';
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

export const Menu = ({ displayMenu, handleDisplayMenu }) => {
  return (
    <Wrapper className={displayMenu ? 'show-menu' : 'hide-menu'}>
      <Content>
        <NavMenu>
          <ul>
            <li>
              <Logo src={LogoDark} alt='logo' />
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

Menu.propTypes = {
  displayMenu: PropTypes.bool,
  handleDisplayMenu: PropTypes.func,
};

export const MenuStore = () => {
  const displayMenu = useSelector(displayMenuSelector);
  const dispatch = useDispatch();

  const handleDisplayMenu = useCallback(() => {
    dispatch(toggleDisplayMenu());
  }, [dispatch]);

  return (
    <Menu displayMenu={displayMenu} handleDisplayMenu={handleDisplayMenu} />
  );
};
