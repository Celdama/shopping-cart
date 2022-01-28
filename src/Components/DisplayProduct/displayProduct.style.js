import styled from 'styled-components';

export const Wrapper = styled.section`
  outline: 1px solid red;
  height: 90vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .products {
    position: relative;
    z-index: 1;
    div {
      margin: 0 -6px;
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
    }

    display: flex;
    align-items: center;
    .small {
      width: 241px;
      height: 375px;
    }

    .medium {
      width: 279px;
      height: 435px;
    }

    .large {
      width: 317px;
      height: 493px;
    }
  }
`;
