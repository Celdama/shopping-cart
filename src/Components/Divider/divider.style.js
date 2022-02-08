import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  height: 20px;
  padding: 0 2rem;
`;

export const Content = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }
`;

export const DividerBox = styled(motion.div)`
  height: 1px;
  border: 1px dotted var(--rose);
  background-color: transparent;
  text-align: center;
`;

export const Title = styled(motion.h6)`
  text-transform: uppercase;
  margin: 0.6rem 0;
  font-size: 1.2rem;
`;
