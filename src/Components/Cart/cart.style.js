import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 390px;
  width: 320px;
  background-color: var(--rose);
  position: fixed;
  top: 100px;
  right: 180px;
  color: var(--black);
  z-index: 5;
  display: ${({ display }) => (!display ? 'none' : 'block')};
`;

export const Content = styled.div``;
