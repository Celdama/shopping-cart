import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 20px;
  padding: 0 20px;
`;

export const Content = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (min-width: 992px) {
    max-width: 90%;
  }

  h6 {
    text-transform: uppercase;
    margin: 6px 0;
  }

  .divider {
    height: 1px;
    border: 1px dotted var(--rose);
    background-color: transparent;
    text-align: center;
  }
`;
