import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6px 0;
  display: block;

  @media screen and (min-width: 766px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;

  .controller {
    height: 4px;
    flex: 1 1 auto;
    background-color: #d5cdc4;
    cursor: pointer;
  }
`;
