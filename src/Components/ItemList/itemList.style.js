import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 0;
    }
  }
`;
