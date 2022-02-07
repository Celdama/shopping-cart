import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  height: 20px;
  padding: 0 2rem;
`;

export const Content = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }

  h6 {
    text-transform: uppercase;
    margin: 0.6rem 0;
  }

  .divider {
    height: 1px;
    border: 1px dotted var(--rose);
    background-color: transparent;
    text-align: center;
  }
`;
