import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled(motion.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  span {
    cursor: pointer;
  }

  .product-price,
  .product-marketing {
    display: none;
    @media screen and (min-width: 766px) {
      display: block;
    }
  }

  .product-desc {
    width: 100%;

    @media screen and (min-width: 766px) {
      width: 60%;
    }
  }
`;

export const Button = styled(motion.button)`
  width: 100%;
  height: 64px;
  background-color: transparent;
  border-radius: 32px;
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid var(--rose);
  color: var(--rose);
  cursor: pointer;

  @media screen and (min-width: 766px) {
    width: 280px;
  }
`;
