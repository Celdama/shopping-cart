import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Thumbnail = styled(motion.img)`
  height: 67px;
  width: 99px;
  padding: 6px;
  cursor: pointer;
`;
