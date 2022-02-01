import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0px 10px;
`;

export const Content = styled.div`
  padding: 10px 0;
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

        li {
          cursor: pointer;
        }
      }
    }

    .product-info {
      padding: 0 30px;
      height: 58%;
      width: 100%;

      display: flex;

      .product-text {
        width: 70%;
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
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;

export const Image = styled.img`
  height: 90vh;
  width: 44vw;
  min-height: 640px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Thumbnail = styled.img`
  height: 67px;
  width: 99px;
  padding: 6px;
  outline: ${({ isCurrent }) => (isCurrent ? '1px solid yellow' : '')};
`;

export const Item = styled.li`
  border-bottom: ${({ current }) => (current ? '2px solid yellow' : '')};
`;
