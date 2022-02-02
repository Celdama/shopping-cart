import styled from 'styled-components';

export const Wrapper = styled.div`
  /* min-height: 281px; */
  min-width: 320px;
  max-width: 320px;
  background-color: #e2ddd7;
  position: fixed;
  border: 1px solid #000;
  border-radius: 8px;
  /* padding: 16px 0px; */
  top: 80px;
  right: 180px;
  color: var(--black);
  z-index: 5;
  display: ${({ displayCart }) => (displayCart ? 'block' : 'none')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* outline: 1px solid red; */
  .header-cart {
    padding: 18px 24px;
    border-bottom: 1px dotted var(--black);
    width: 100%;
    flex: 0 1 auto;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        padding: 0;
        margin: 0;
        font-size: 16px;
        text-transform: uppercase;
        color: var(--black);
      }
      span {
        font-size: 24px;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
      }
    }
  }

  .content-cart {
    /* height: 100%; */
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    .container {
      /* padding: 0 24px; */
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;

      .list-items {
        height: 100%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;

        ul {
          /* outline: 1px solid green; */
          flex: 1 1 auto;
          padding: 0;

          li {
            /* width: 100%; */

            .item-container {
              display: flex;
              justify-content: space-between;
              /* flex-direction: row; */
              text-transform: uppercase;
              color: var(--black);

              .left {
                img {
                  width: 64px;
                  height: 64px;
                }
              }

              .center {
                flex: 1 1 auto;
                padding: 0 10px;

                display: flex;
                flex-direction: column;
                justify-content: space-around;

                .name {
                  font-size: 16px;
                  font-weight: bold;
                }

                .price,
                .delete {
                  font-size: 12px;
                  font-weight: 600;
                }

                .delete {
                  text-decoration: underline;
                }
              }

              .right {
                width: 48px;
                height: 32px;
                background-color: #d5cdc4;
                font-weight: 600;
                font-size: 12px;
                border-radius: 4px;
                color: var(--black);
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }

      .checkout {
        border-top: 1px dotted var(--black);

        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;

        .total {
          width: 100%;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          /* text-transform: uppercase; */
          font-weight: bold;
          font-size: 14px;
        }

        button {
          height: 56px;
          width: 272px;
          border: 1px solid #232025;
          border-radius: 32px;
          background-color: #232025;
          color: var(--rose);
          text-transform: uppercase;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }
      }

      .empty-product {
        text-transform: uppercase;
        font-size: 12px;
        color: var(--black);
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;

export const Item = styled.li`
  display: ${({ quantity }) => (quantity ? 'block' : 'none')};
  padding: 12px 0;
`;
