import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  overflow-x: hidden;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 110vh;
  }

  div {
    background-color: var(--black);
    width: 26px;

    @media screen and (min-width: ${breakpoints.md}) {
      width: 102px;
    }

    @media screen and (min-width: ${breakpoints.xl}) {
      width: 142px;
    }
  }
`;
