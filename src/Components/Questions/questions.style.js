import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--maxWidth);
  font-size: 2.4rem;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 3.3vw;
  }
`;

export const AnswersContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 18rem;

  p {
    margin: 0;
  }

  .yes-container,
  .no-container {
    position: relative;
    padding: 1rem 0;
    height: auto;
    width: 200px;
    text-align: center;
    cursor: pointer;

    :hover > img {
      opacity: 1;
    }

    img {
      width: 110px;
      position: absolute;
      z-index: -1;
      height: auto;
      opacity: 0;
      transform: rotate(17deg);
      transition: opacity ease 0.3s;

      @media screen and (min-width: ${breakpoints.md}) {
        width: 290px;
      }
    }
  }
`;

export const BananaGif = styled.img`
  top: ${({ top }) => (top ? `${top - 150}%` : '')};
  left: ${({ left }) => (left ? `${left - 100}%` : '')};

  @media screen and (min-width: ${breakpoints.md}) {
    top: ${({ top }) => (top ? `${top - 160}%` : '')};
    left: ${({ left }) => (left ? `${left - 140}%` : '')};
  }
`;

export const SyrupGif = styled.img`
  top: ${({ top }) => (top ? `${top - 150}%` : '')};
  left: ${({ left }) => (left ? `${left - 100}%` : '')};

  @media screen and (min-width: ${breakpoints.md}) {
    top: ${({ top }) => (top ? `${top - 160}%` : '')};
    left: ${({ left }) => (left ? `${left - 140}%` : '')};
  }
`;
