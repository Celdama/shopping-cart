import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  width: 100%;

  .link {
    text-align: none;
    color: var(--rose);
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .index {
      width: 20%;
    }
  }
`;

export const ContentSavour = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  :hover .savour {
    color: var(--black);
  }

  :hover .arrow {
    opacity: 1;
  }
`;

export const Savour = styled.span`
  font-size: 3.8rem;
  text-transform: uppercase;
  text-shadow: -1px 0 var(--rose), 0 1px var(--rose), 1px 0 var(--rose),
    0 -1px var(--rose);
  transition: all ease-in-out 0.2s;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 4.5vw;
  }
`;

export const ArrowIcon = styled.img`
  opacity: 0;
  width: 30px;
  transition: opacity ease-in-out 0.4s;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 65px;
  }
`;
