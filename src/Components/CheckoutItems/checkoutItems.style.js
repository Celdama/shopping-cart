import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const Content = styled.div`
  background-color: var(--white);
  margin: 2rem 0;
  border: 1px solid lightgray;

  .section-header {
    display: flex;
    padding: 0 1.2rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    font-size: 1.6rem;
  }

  .section-body {
    padding-top: 1rem;
    margin: 1rem;
    font-size: 1.4rem;

    .product-list {
      .product-items {
        display: flex;
        justify-content: space-between;
        margin: 1.8rem 1rem;

        div:first-child {
          display: flex;
          gap: 1rem;

          img {
            width: 60px;
            height: 67px;
          }

          div {
            .product-name {
              padding: 0.8rem 0;
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
