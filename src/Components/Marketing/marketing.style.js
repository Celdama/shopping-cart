import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 9rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainContent = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
    padding: 0px;
  }
`;

export const SubContent = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
    padding: 0px;
  }
`;

export const SubContentContainer = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  height: 140px;

  .left-side {
    width: 60%;
    font-size: 4vw;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    p {
      display: flex;
      flex-direction: column;
    }
  }

  .right-side {
    width: 40%;
    font-size: 10px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 1.6vw;
    }

    p {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    height: 290px;
  }
`;

export const HorizontalDivider = styled(motion.div)`
  height: 1px;
  border: 1px dotted var(--rose);
  background-color: transparent;
`;

export const Quote = styled(motion.p)`
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;
  font-size: 5.2rem;
  text-transform: uppercase;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 8vw;
    margin: 4rem 0;
  }
`;

export const VerticalDivider = styled(motion.div)`
  width: 1px;
  background-color: transparent;
  border: 1px dotted var(--rose);
`;
