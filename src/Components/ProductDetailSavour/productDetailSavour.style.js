import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Item = styled(motion.li)`
  padding: 16px 0;
  border-bottom: ${({ current, color }) =>
    current ? `2px solid ${color}` : ''};
  cursor: pointer;
`;
