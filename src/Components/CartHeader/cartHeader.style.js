import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.8rem 2.4rem;
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
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--black);
  }

  svg {
    font-size: 2.4rem;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
