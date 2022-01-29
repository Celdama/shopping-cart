import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;

  @media screen and (min-width: 992px) {
    font-size: 3.3vw;
  }

  .answers {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 180px;

    p {
      margin: 0;
    }
  }

  .yes-container,
  .no-container {
    position: relative;
    padding: 10px 0;
    height: auto;
    width: 200px;
    text-align: center;
    :hover img {
      opacity: 1;
    }

    img {
      width: 190px;
      position: absolute;
      z-index: -1;
      height: auto;
      opacity: 0;
      transform: rotate(17deg);
      transition: opacity ease 0.3s;

      @media screen and (min-width: 992px) {
        width: 290px;
      }
    }
  }
`;

export const BananaGif = styled.img`
  top: ${({ top }) => (top ? `${top - 150}%` : '')};
  left: ${({ left }) => (left ? `${left - 100}%` : '')};

  @media screen and (min-width: 992px) {
    top: ${({ top }) => (top ? `${top - 160}%` : '')};
    left: ${({ left }) => (left ? `${left - 140}%` : '')};
  }
`;

export const SyrupGif = styled.img`
  top: ${({ top }) => (top ? `${top - 150}%` : '')};
  left: ${({ left }) => (left ? `${left - 100}%` : '')};

  @media screen and (min-width: 992px) {
    top: ${({ top }) => (top ? `${top - 160}%` : '')};
    left: ${({ left }) => (left ? `${left - 140}%` : '')};
  }
`;
