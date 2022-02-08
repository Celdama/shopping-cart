import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  background-color: var(--rose);
  padding: 4rem 2rem;
  color: var(--black);
  width: 100%;
  position: fixed;
  height: 100vh;
  transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  z-index: 20;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: var(--maxWidth);
  padding: 2rem 0;
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }
`;

export const NavMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    .close {
      cursor: pointer;
      font-size: 2rem;
    }
  }
`;

export const MenuTitle = styled.div`
  h1 {
    font-size: 27vw;
    text-transform: uppercase;
    line-height: 1em;

    @media screen and (min-width: ${breakpoints.xs}) {
      font-size: 14vw;
    }
  }
`;

export const MenuLink = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    a {
      color: var(--black);
    }

    li {
      cursor: pointer;
      line-height: 4rem;
    }
  }

  @media screen and (min-width: ${breakpoints.xs}) {
    flex-direction: row;
  }

  .products {
    width: 100%;
    font-size: 24px;

    @media screen and (min-width: ${breakpoints.xs}) {
      width: 35%;
    }
  }

  .links {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;

    @media screen and (min-width: ${breakpoints.xs}) {
      width: 65%;
      font-size: 2.4rem;
      font-weight: normal;
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;
