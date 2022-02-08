import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section``;

export const ContentQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 14rem 0;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 32rem 0;
  }

  h3 {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 3.2rem;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 3.5vw;
    }
  }
`;

export const ContentAnswer = styled.div`
  font-size: 14rem;
  overflow: hidden;
  padding: 1rem 0;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 14.5vw;
  }

  div {
    display: flex;
    width: 4000px;
    text-transform: uppercase;

    p {
      text-shadow: -1px 0 var(--rose), 0 1px var(--rose), 1px 0 var(--rose),
        0 -1px var(--rose);
      margin: 0;
      line-height: 0.9em;
      padding: 0;
    }

    .odd {
      color: var(--black);
    }
  }
`;
