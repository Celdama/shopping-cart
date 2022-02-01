import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 64px;
  background-color: transparent;
  border-radius: 32px;
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid var(--rose);
  color: var(--rose);
`;
