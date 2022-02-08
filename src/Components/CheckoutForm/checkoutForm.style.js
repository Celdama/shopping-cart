import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  font-size: 1.3rem;

  .form-container {
    width: 100%;
    @media screen and (min-width: ${breakpoints.md}) {
      flex: 1 1 auto;
      max-width: 600px;
    }

    .payment-btn-container {
      .paypal,
      .credit-card {
        width: 100%;
        background-color: var(--paypalColor);
        border: none;
        border-radius: 3px;
        padding: 0.9rem 1.5rem;
        cursor: pointer;

        img {
          width: 95px;
          height: auto;
        }
      }

      .credit-card {
        background-color: var(--black);
        color: var(--white);
        margin-top: 1.2rem;
        font-size: 1.8rem;
        height: 45px;
      }
    }
  }
  .form-section {
    background-color: var(--white);
    margin: 2rem 0;
    border: 1px solid lightgray;

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.2rem;
      border-bottom: 1px solid lightgray;

      h4 {
        font-size: 1.6rem;
      }
    }

    .section-body {
      padding-top: 1rem;
      label {
        font-weight: 500;
        font-size: 1.4rem;
      }

      .shipping {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1.2rem;

        input {
          margin: 0;
        }

        label {
          text-transform: uppercase;
        }
      }

      input {
        margin: 1rem 0;
        padding: 0.8rem 0.6rem;
        background-color: var(--bgCheckout);
        border: 1px solid lightgray;
        border-radius: 3px;
        outline: none;

        :focus {
          border-color: var(--inputFocus);
        }
      }

      .collapse-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.8rem;

        @media screen and (min-width: ${breakpoints.md}) {
          flex-direction: row;
        }
        > div {
          display: flex;
          flex-direction: column;

          flex: 1 1 auto;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        margin: 1rem;
      }
    }

    .discount {
      padding: 0;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 1.2rem;
        align-items: center;
        gap: 1.2rem;
        margin: 0;

        input {
          flex: 1 1 auto;
        }

        button {
          padding: 0.9rem 1.5rem;
          border-radius: 3px;
          border: none;
          background-color: var(--inputFocus);
          color: var(--white);
          flex-shrink: 0;
          cursor: pointer;
        }
      }
    }
  }
`;
