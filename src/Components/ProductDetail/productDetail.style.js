import styled from 'styled-components';

export const Wrapper = styled.section`
  .compare-container {
    display: flex;
    height: 100vh;
  }
`;

export const Content = styled.div`
  padding: 10px 10px;
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);

  display: flex;
  @media screen and (min-width: 992px) {
    max-width: 95%;
  }

  .left {
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;

    .product-list {
      width: 100%;
      padding: 16px 30px;
      z-index: 2;

      ul {
        text-transform: uppercase;
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
    }

    .product-info {
      padding: 0 30px;
      height: 58%;
      width: 100%;

      display: flex;

      .product-text {
        width: 80%;
      }

      .product-photos {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;
