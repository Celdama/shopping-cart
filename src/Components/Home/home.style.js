import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1600px) {
    padding: 200px 20px;
  }
`;

export const Content = styled.div`
  padding: 20px 0;
  width: 100%;

  max-width: var(--maxWidth);

  // small devices (landscape phone, 576px and up)
  @media screen and (min-width: 576px) {
  }

  // medium devices (tablets, 768px and up)
  @media screen and (min-width: 768px) {
  }

  // large devices (desktops, 992px and up)
  @media screen and (min-width: 992px) {
    max-width: 90%;
  }

  // x-large device (large desktops, 992px and up)
  @media screen and (min-width: 1200px) {
  }

  // xx-large devices (larger desktops, 1400px and up)
  @media screen and (min-width: 1400px) {
  }

  // xxx-large devices (x larger desktops, 1600px and up)
  @media screen and (min-width: 1600px) {
  }

  .text-content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 992px) {
      /* width: 50%; */
      flex-direction: row;
    }
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 992px) {
        width: 50%;
      }

      h1 {
        margin: 0;
        font-size: 130px;
        @media screen and (min-width: 992px) {
          font-size: 13vw;
        }
      }

      p {
        width: 55%;
        align-self: flex-start;
        font-size: 22px;

        @media screen and (min-width: 992px) {
          font-size: 3vw;
          align-self: flex-end;
        }

        span {
          padding-left: 76px;

          @media screen and (min-width: 992px) {
            padding-left: 170px;
          }
        }
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 96%;
      flex-direction: column;

      @media screen and (min-width: 992px) {
        display: flex;
        width: 50%;
        align-items: center;
      }

      p {
        margin: 0;
        text-transform: uppercase;
        font-size: var(--fontSuperSmall);
      }
    }
  }
`;
