import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://uploads-ssl.webflow.com/61defec4a021d8fe954c11bd/61defec4a021d83ede4c11f8_stars.gif');
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 4rem 0 9rem 0;
    width: 70%;
    @media screen and (min-width: ${breakpoints.md}) {
      width: 30%;
    }
    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
      @media screen and (min-width: ${breakpoints.md}) {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Title = styled(motion.h2)`
  font-size: 3.2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 5vw;
  }
`;

export const Smiley = styled.img`
  animation-name: rotate;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
