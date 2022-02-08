import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 20rem 2rem;
  }
`;

export const Content = styled.div`
  padding: 2rem 0;
  width: 90%;

  max-width: var(--maxWidth);

  .text-content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.md}) {
      flex-direction: row;
    }
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: ${breakpoints.md}) {
        width: 50%;
      }

      h1 {
        margin: 0;
        font-size: 13rem;
        @media screen and (min-width: ${breakpoints.md}) {
          font-size: 13vw;
        }
      }

      p {
        width: 55%;
        align-self: flex-start;
        font-size: 2.2rem;

        @media screen and (min-width: ${breakpoints.md}) {
          font-size: 3vw;
          align-self: flex-end;
        }

        span {
          padding-left: 7.6rem;

          @media screen and (min-width: ${breakpoints.md}) {
            padding-left: 17rem;
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

      @media screen and (min-width: ${breakpoints.md}) {
        display: flex;
        width: 50%;
        align-items: center;
      }

      p {
        margin: 0;
        text-transform: uppercase;
        font-size: 1.4rem;
      }
    }
  }
`;
