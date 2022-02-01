import styled from 'styled-components';

export const Thumbnail = styled.img`
  height: 67px;
  width: 99px;
  padding: 6px;
  outline: ${({ isCurrent }) => (isCurrent ? '1px solid yellow' : '')};
`;
