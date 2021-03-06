import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled(motion.div)`
  display: none;

  @media screen and (min-width: ${breakpoints.sm}) {
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
  padding: 0.6rem;
  cursor: pointer;
`;
