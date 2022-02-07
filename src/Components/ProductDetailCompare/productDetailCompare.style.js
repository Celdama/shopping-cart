import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ tala }) => (tala ? 'var(--rose)' : 'var(--black)')};
  color: ${({ tala }) => (tala ? 'var(--black)' : 'var(--rose)')};

  @media screen and (min-width: 766px) {
    width: 50%;
    padding: 60px;
  }
  .sugar {
    border-right: ${({ tala }) =>
      tala ? '1px dotted var(--black)' : '1px dotted var(--rose)'};
  }
`;

export const Content = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    padding: 0px;
    text-transform: uppercase;
    font-size: 24vw;
    margin: 40px 0;
    @media screen and (min-width: 766px) {
      font-size: 8.5vw;
      padding: 10px 40px;
      margin: 90px 0;
    }
  }

  .container {
    display: flex;
    margin-bottom: 40px;
    div {
      display: flex;
      flex-direction: column;
      width: 50%;
      font-size: 7vw;
      padding-left: 30px;

      @media screen and (min-width: 766px) {
        font-size: 3.3vw;
      }

      .value {
        font-size: 20vw;
        font-weight: bold;
        @media screen and (min-width: 766px) {
          font-size: 8vw;
        }
      }
    }
  }
`;
