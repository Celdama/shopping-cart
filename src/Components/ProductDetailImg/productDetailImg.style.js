import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  height: 420px;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 50%;
    height: 90vh;
  }
`;

export const Image = styled(motion.img)`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: ${breakpoints.sm}) {
    min-height: 640px;
  }
`;
