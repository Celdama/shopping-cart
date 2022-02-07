import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #d5cdc4;
  padding: 40px 20px;
  color: var(--black);
  width: 100%;
  position: fixed;
  height: 100vh;
  transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  z-index: 200;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media screen and (min-width: 992px) {
    max-width: 90%;
  }
`;

export const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;

    .close {
      cursor: pointer;
    }
  }
`;

export const MenuTitle = styled.div`
  h1 {
    font-size: 27vw;
    text-transform: uppercase;
    line-height: 1em;

    @media screen and (min-width: 480px) {
      font-size: 14vw;
    }
  }
`;

export const MenuLink = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;

    li {
      cursor: pointer;
      line-height: 40px;
    }
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  .products {
    width: 100%;
    font-size: 24px;

    @media screen and (min-width: 480px) {
      width: 35%;
    }
  }

  .links {
    width: 100%;
    font-size: 12px;
    font-weight: bold;

    @media screen and (min-width: 480px) {
      width: 65%;
      font-size: 24px;
      font-weight: normal;
    }
  }
`;
