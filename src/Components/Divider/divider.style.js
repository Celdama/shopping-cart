import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 20px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
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
    max-width: var(--maxWidth);
    text-align: center;
  }
`;
