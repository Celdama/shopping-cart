import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 18px 24px;
  border-bottom: 1px dotted var(--black);
  flex: 0 1 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    padding: 0;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--black);
  }

  svg {
    font-size: 24px;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
