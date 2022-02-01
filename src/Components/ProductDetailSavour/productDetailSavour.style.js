import styled from 'styled-components';

export const Item = styled.li`
  padding: 16px 0;
  border-bottom: ${({ current, color }) =>
    current ? `2px solid ${color}` : ''};
  cursor: pointer;
`;
