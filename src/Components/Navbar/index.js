import React from 'react';
import { Wrapper, Content, Logo } from './navbar.style';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';

const NavBar = ({
  handleDisplayCart,
  handleDisplayMenu,
  numberOfCartItems,
}) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to={'/'}>tala</Link>
        </Logo>
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

export default NavBar;
