import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  background-color: var(--bgCheckout);
  padding: 2rem;
  color: var(--black);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .left-side {
    width: 600px;

    @media screen and (min-width: ${breakpoints.md}) {
      flex: 1 1 auto;
      max-width: 600px;
    }
  }

  .right-side {
    width: 600px;

    @media screen and (min-width: ${breakpoints.md}) {
      width: 35%;
      max-width: 320px;
    }
  }
`;
