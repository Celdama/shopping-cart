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

  @media screen and (max-width: 1440px) {
    max-width: 1380px;
  }

  ul {
    display: flex;
    gap: 36px;
    list-style: none;
  }
`;

export const Logo = styled.h1`
  margin: 0;
`;

// à partir de 1440px = maxWidth 1380px
