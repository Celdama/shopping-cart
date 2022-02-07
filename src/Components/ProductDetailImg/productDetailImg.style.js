import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 420px;

  @media screen and (min-width: 766px) {
    width: 50%;
    height: 90vh;
  }

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    animation: fadIn 0.5;

    @media screen and (min-width: 766px) {
      min-height: 640px;
    }
  }
`;
