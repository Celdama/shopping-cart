import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../Helpers/breakpoints';

export const Title = styled(motion.h3)`
  font-size: 14vw;
  letter-spacing: 2.2rem;
  position: absolute;
  text-transform: uppercase;
  top: 3rem;
  text-align: right;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0 3rem;
  text-shadow: -1px 0 0 var(--rose), 0 1px 0 var(--rose), 1px 0 0 var(--rose),
    0 -1px 0 var(--rose);
  color: var(--black);
  display: none;

  @media screen and (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;
