import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: none;

  @media screen and (min-width: 766px) {
    display: block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;

    flex-direction: column;
  }
`;

export const Thumbnail = styled(motion.img)`
  height: 67px;
  width: 99px;
  padding: 6px;
  cursor: pointer;
`;
