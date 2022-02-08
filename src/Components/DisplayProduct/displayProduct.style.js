import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 4vw;
  }

  .products {
    margin-top: 3rem;
    position: relative;
    z-index: 1;
    div {
      margin: 0 -7px;
      position: relative;
      filter: drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.9));
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      transform-style: preserve-3d;
      transition: all ease 0.5s;
      cursor: pointer;

      :hover {
        transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1.05)
          rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg);
        transform-style: preserve-3d;
      }

      @media screen and (min-width: ${breakpoints.md}) {
        margin: 0 -6px;
      }
    }

    display: flex;
    align-items: center;
    .small {
      width: 51px;
      height: 80px;

      @media screen and (min-width: ${breakpoints.sm}) {
        width: 111px;
        height: 130px;
      }

      @media screen and (min-width: ${breakpoints.md}) {
        width: 141px;
        height: 275px;
      }

      @media screen and (min-width: ${breakpoints.lg}) {
        width: 241px;
        height: 375px;
      }
    }

    .medium {
      width: 89px;
      height: 155px;
      @media screen and (min-width: ${breakpoints.sm}) {
        width: 149px;
        height: 205px;
      }

      @media screen and (min-width: ${breakpoints.md}) {
        width: 179px;
        height: 320px;
      }

      @media screen and (min-width: ${breakpoints.lg}) {
        width: 279px;
        height: 420px;
      }
    }

    .large {
      width: 127px;
      height: 218px;

      @media screen and (min-width: ${breakpoints.sm}) {
        width: 187px;
        height: 268px;
      }

      @media screen and (min-width: ${breakpoints.md}) {
        width: 217px;
        height: 393px;
      }

      @media screen and (min-width: ${breakpoints.lg}) {
        width: 317px;
        height: 493px;
      }
    }
  }
`;
