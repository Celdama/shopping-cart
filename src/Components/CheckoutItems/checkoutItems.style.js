import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Content = styled.div`
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
    margin: 10px;
    font-size: 14px;

    .product-list {
      .product-items {
        margin: 18px 10px;
        display: flex;
        justify-content: space-between;

        div:first-child {
          display: flex;
          gap: 10px;

          img {
            width: 60px;
            height: 67px;
          }

          div {
            .product-name {
              padding: 8px 0;
              font-weight: bold;
              text-transform: capitalize;
            }

            p {
              padding: 0;
              margin: 0;
            }
          }
        }
      }
    }
  }
`;
