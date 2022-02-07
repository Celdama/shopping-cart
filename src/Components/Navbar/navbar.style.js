import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  text-transform: uppercase;

  @media screen and (min-width: 992px) {
    max-width: 90%;
  }

  ul {
    display: flex;
    gap: 36px;
    list-style: none;
    cursor: pointer;
    span {
      padding-left: 8px;
    }
  }
`;

export const Logo = styled.h1`
  margin: 0;
  a {
    color: var(--rose);
  }
`;
