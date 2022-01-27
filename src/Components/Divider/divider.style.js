import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: var(--maxWidth);

  h6 {
    text-transform: uppercase;
    margin: 6px 0;
  }

  .divider {
    height: 1px;
    border: 1px dotted #fff;
    background-color: transparent;
    max-width: var(--maxWidth);
    text-align: center;
  }
`;
