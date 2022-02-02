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
          flex: 1 1 auto;
          padding: 0;
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
