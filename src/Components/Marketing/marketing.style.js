import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 90px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;

  .main-content {
    padding: 0px;
    width: 100%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    @media screen and (min-width: 992px) {
      max-width: 90%;
      padding: 0px;
    }
  }

  .horizontal-divider {
    height: 1px;
    border: 1px dotted var(--rose);
    background-color: transparent;
  }

  .quote {
    text-transform: uppercase;
    font-size: 52px;
    display: flex;
    flex-direction: column;
    margin: 40px 20px;

    @media screen and (min-width: 992px) {
      font-size: 8vw;
      margin: 40px 0px;
    }
  }

  display: flex;
  flex-direction: column;

  .sub-content {
    max-width: var(--maxWidth);
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    @media screen and (min-width: 992px) {
      max-width: 90%;
      padding: 0px;
    }
    .container {
      display: flex;
      max-width: var(--maxWidth);
      height: 140px;

      @media screen and (min-width: 992px) {
        height: 290px;
      }

      .left {
        width: 60%;
        font-size: 4vw;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        p {
          display: flex;
          flex-direction: column;
        }
      }

      .divider {
        width: 1px;
        background-color: transparent;
        border: 1px dotted var(--rose);
      }

      .right {
        width: 40%;
        font-size: 10px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 992px) {
          font-size: 1.6vw;
        }

        p {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
