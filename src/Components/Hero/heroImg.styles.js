import styled from 'styled-components';

export const Wrapper = styled.div`
  background: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;

  div {
    background-color: var(--black);
    width: 26px;

    @media screen and (min-width: 992px) {
      width: 102px;
    }

    @media screen and (min-width: 1600px) {
      width: 142px;
    }
  }
`;
