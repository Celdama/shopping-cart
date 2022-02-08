import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  padding: 0.6rem 0;
  display: block;

  @media screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;

  .controller {
    height: 4px;
    flex: 1 1 auto;
    background-color: var(--rose);
    cursor: pointer;
  }
`;
