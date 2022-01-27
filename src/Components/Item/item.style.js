import styled from 'styled-components';

export const Content = styled.li`
  outline: 1px solid white;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;

  .index {
    outline: 1px solid yellow;
    width: 20%;
  }

  div {
    outline: 1px solid green;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .savour {
      font-size: 4.5vw;
      text-align: left;
      text-shadow: -1px 0 var(--rose), 0 1px var(--rose), 1px 0 var(--rose),
        0 -1px var(--rose);

      text-transform: uppercase;
      transition: all ease-in-out 0.2s;
    }

    :hover .savour {
      color: var(--black);
    }

    :hover img {
      opacity: 1;
    }
  }

  img {
    opacity: 0;
    width: 65px;
    height: auto;
    transition: opacity ease-in-out 0.4s;
  }
`;
