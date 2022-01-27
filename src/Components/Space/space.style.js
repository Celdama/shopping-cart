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
    font-size: 5vw;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  div {
    margin: 50px 0 70px 0;
    width: 30%;
    p {
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      margin: 0;
      text-align: start;
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
