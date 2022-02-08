import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;

  @media screen and (min-width: ${breakpoints.sm}) {
    align-items: flex-end;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`;

export const ContentPrice = styled(motion.p)`
  font-size: 2.4rem;

  display: none;
  @media screen and (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;

export const ContentMarketing = styled(motion.p)`
  width: 60%;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 0.4rem;
  color: rgba(213, 205, 196, 0.5);
  font-weight: bold;
  background-color: rgba(213, 205, 196, 0.05);

  display: none;
  @media screen and (min-width: ${breakpoints.sm}) {
    display: block;
  }

  span {
    color: rgba(213, 205, 196, 1);
    text-decoration: underline;
  }
`;

export const ContentDesc = styled(motion.p)`
  width: 100%;
  padding: 1.2rem 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 60%;
    padding: 0;
  }
`;

export const Button = styled(motion.button)`
  width: 100%;
  background-color: transparent;
  border-radius: 32px;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 1px solid var(--rose);
  color: var(--rose);
  padding: 1rem 0;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 280px;
  }
`;
