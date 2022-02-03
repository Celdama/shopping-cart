import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  width: 50%;
  padding: 60px;
  background-color: ${({ tala }) => (tala ? 'var(--rose)' : 'var(--black)')};
  color: ${({ tala }) => (tala ? 'var(--black)' : 'var(--rose)')};

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
    padding: 10px 40px;
    text-transform: uppercase;
    font-size: 8.5vw;
  }

  .container {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      width: 50%;
      font-size: 3.3vw;
      padding-left: 30px;

      .value {
        font-size: 8vw;
        font-weight: bold;
      }
    }
  }
`;
