import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: ${({ current }) => (current ? '2px solid yellow' : '')};
  cursor: pointer;
`;
