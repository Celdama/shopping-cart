import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.nav`
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 2rem 0;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 1.4rem;

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }

  ul {
    display: flex;
    gap: 3.6rem;
    list-style: none;
    cursor: pointer;
    span {
      padding-left: 0.8rem;
    }
  }
`;
