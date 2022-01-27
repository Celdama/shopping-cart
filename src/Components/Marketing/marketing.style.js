import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 80px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .main-content {
    padding: 95px 0;
  }

  .quote {
    max-width: var(--maxWidth);
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 8vw;
    display: flex;
    flex-direction: column;

    span {
      line-height: 8rem;
    }
  }

  display: flex;
  flex-direction: column;

  .sub-content {
    border-bottom: 1px dotted var(--rose);
    border-top: 1px dotted var(--rose);

    .container {
      display: flex;
      max-width: var(--maxWidth);
      height: 290px;
      margin: 0 auto;

      .left {
        width: 60%;
        font-size: 4vw;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        p {
          display: flex;
          flex-direction: column;
          line-height: 4rem;
        }
      }

      .divider {
        width: 1px;
        background-color: transparent;
        border: 1px dotted var(--rose);
      }

      .right {
        width: 40%;
        font-size: 1.6vw;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
