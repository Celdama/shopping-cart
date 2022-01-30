import styled from 'styled-components';

export const Image = styled.div`
  height: 1000px;
  width: 700px;
  background: url(${({ img }) => img});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; ;;;
`;
