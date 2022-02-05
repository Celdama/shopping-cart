import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Content = styled.div`
  justify-content: center;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;

  .form-container {
    width: 100%;
    @media screen and (min-width: 992px) {
      flex: 1 1 auto;
      max-width: 600px;
    }

    .payment-btn-container {
      .paypal,
      .credit-card {
        width: 100%;
        background-color: #ffc439;
        border: none;
        border-radius: 3px;
        padding: 9px 15px;
        cursor: pointer;

        img {
          width: 95px;
          height: auto;
        }
      }

      .credit-card {
        background-color: var(--black);
        color: #fff;
        margin-top: 12px;
        font-size: 18px;
        height: 45px;
      }
    }
  }
  .form-section {
    background-color: #fff;
    margin: 20px 0;
    border: 1px solid lightgray;

    .section-header {
      display: flex;
      padding: 0 12px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
    }

    .section-body {
      padding-top: 10px;
      label {
        font-weight: 500;
        font-size: 14px;
      }

      .shipping {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 12px;

        input {
          margin: 0;
        }

        label {
          text-transform: uppercase;
        }
      }

      input {
        margin: 10px 0;
        padding: 8px 6px;
        background-color: #f5f5f5;
        border: 1px solid lightgray;
        border-radius: 3px;
        outline: none;

        :focus {
          border-color: #3898ec;
        }
      }

      .collapse-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;

        @media screen and (min-width: 992px) {
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
        margin: 10px;
      }
    }

    .discount {
      color: red;
      padding: 0;

      div {
        padding: 0 12px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin: 0;

        input {
          flex: 1 1 auto;
        }

        button {
          padding: 9px 15px;
          border-radius: 3px;
          border: none;
          background-color: #3898ec;
          color: #fff;
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`;
