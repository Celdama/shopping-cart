import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 46px 20px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 20px 0;
  width: 100%;
  max-width: var(--maxWidth);

  .text-content {
    display: flex;
    justify-content: center;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;

      h1 {
        margin: 0;
        font-size: 13vw;
      }

      p {
        width: 55%;
        align-self: flex-end;
        font-size: 3vw;

        span {
          padding-left: 170px;
        }
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      flex-direction: column;

      p {
        text-align: left;
        margin: 0;
        text-transform: uppercase;
        font-size: var(--fontSuperSmall);
      }
    }
  }
`;
