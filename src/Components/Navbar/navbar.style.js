import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 20px 0;
  text-transform: uppercase;

  ul {
    display: flex;
    padding: 0 20px;
    gap: 36px;
    list-style: none;
    justify-content: space-between;
    text-align: center;
  }
`;

export const Logo = styled.h1`
  margin: 0;
`;
