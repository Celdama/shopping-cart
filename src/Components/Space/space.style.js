import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  background: url('https://uploads-ssl.webflow.com/61defec4a021d8fe954c11bd/61defec4a021d83ede4c11f8_stars.gif');
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 32px;
    margin: 0;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 992px) {
      font-size: 5vw;
    }
  }

  div {
    margin: 40px 0 90px 0;
    width: 70%;
    @media screen and (min-width: 992px) {
      width: 30%;
    }
    p {
      font-size: 12px;
      font-weight: bold;
      margin: 0;
      @media screen and (min-width: 992px) {
        font-size: 16px;
      }
    }
  }

  img {
    animation-name: rotate;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
