import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 80px 20px;
`;

export const Content = styled.div`
  position: relative;
  /* padding: 20px 0; */
  width: 100%;
  /* outline: 1px solid yellow; */
  display: flex;

  .left {
    /* outline: 1px solid blue; */
  }

  .right {
    /* outline: 1px solid green; */
    /* padding: 160px 0; */
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    align-items: flex-end;

    .product-list {
      /* outline: 1px solid red; */
      width: 100%;
      padding: 16px 30px;

      ul {
        text-transform: uppercase;
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
    }

    .product-info {
      /* outline: 1px solid red; */
      padding: 0 30px;
      height: 58%;

      display: flex;

      .product-text {
        width: 70%;
        /* outline: 1px solid white; */
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        .product-desc {
          width: 60%;
        }

        button {
          width: 280px;
          height: 64px;
          background-color: transparent;
          border-radius: 32px;
          font-size: 12px;
          text-transform: uppercase;
          border: 1px solid var(--rose);
          color: var(--rose);
        }
      }

      .product-photos {
        /* outline: 1px solid red; */
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .thumbnail {
          height: 43px;
          width: 72px;
        }
      }
    }

    h3 {
      font-size: 15vw;
      letter-spacing: 22px;
      position: absolute;
      text-transform: uppercase;
      top: 40px;
      text-align: right;
      left: 0;
      /* outline: 1px solid violet; */
      width: 100%;
      margin: 0;
      padding: 0 30px;
      text-shadow: -1px 0 0 #d5cdc4, 0 1px 0 #d5cdc4, 1px 0 0 #d5cdc4,
        0 -1px 0 #d5cdc4;
      color: #232025;
    }
  }
`;

export const Image = styled.img`
  height: 733px;
  width: 639px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; ;;;
`;

export const Item = styled.li`
  border-bottom: ${({ current }) => (current ? '2px solid yellow' : '')};
`;
