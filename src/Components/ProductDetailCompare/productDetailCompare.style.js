import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${({ tala }) => (tala ? 'var(--rose)' : 'var(--black)')};
  color: ${({ tala }) => (tala ? 'var(--black)' : 'var(--rose)')};

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 50%;
    padding: 6rem;
  }
`;

export const Content = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled(motion.h2)`
  padding: 0px;
  text-transform: uppercase;
  font-size: 24vw;
  margin: 4rem 0;
  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 8.5vw;
    padding: 1rem 4rem;
    margin: 9rem 0;
  }
`;

export const ContentContainer = styled(motion.div)`
  display: flex;
  margin-bottom: 4rem;
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    font-size: 7vw;
    padding-left: 3rem;

    @media screen and (min-width: ${breakpoints.sm}) {
      font-size: 3.3vw;
    }

    .value {
      font-size: 20vw;
      font-weight: bold;
      @media screen and (min-width: ${breakpoints.sm}) {
        font-size: 8vw;
      }
    }
  }
  .sugar {
    border-right: ${({ tala }) =>
      tala ? '1px dotted var(--black)' : '1px dotted var(--rose)'};
  }
`;
