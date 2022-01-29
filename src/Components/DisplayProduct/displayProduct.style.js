import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 992px) {
    font-size: 4vw;
  }

  .products {
    margin-top: 30px;
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

      @media screen and (min-width: 992px) {
        margin: 0 -6px;
      }

      :hover {
        transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1.05)
          rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg);
        transform-style: preserve-3d;
      }
    }

    display: flex;
    align-items: center;
    .small {
      width: 61px;
      height: 80px;

      @media screen and (min-width: 768px) {
        width: 111px;
        height: 130px;
      }

      @media screen and (min-width: 992px) {
        width: 141px;
        height: 275px;
      }

      @media screen and (min-width: 1200px) {
        width: 241px;
        height: 375px;
      }
    }

    .medium {
      width: 99px;
      height: 155px;
      @media screen and (min-width: 768px) {
        width: 149px;
        height: 205px;
      }

      @media screen and (min-width: 992px) {
        width: 179px;
        height: 320px;
      }

      @media screen and (min-width: 1200px) {
        width: 279px;
        height: 420px;
      }
    }

    .large {
      width: 137px;
      height: 218px;

      @media screen and (min-width: 768px) {
        width: 187px;
        height: 268px;
      }

      @media screen and (min-width: 992px) {
        width: 217px;
        height: 393px;
      }

      @media screen and (min-width: 1200px) {
        width: 317px;
        height: 493px;
      }
    }
  }
`;
