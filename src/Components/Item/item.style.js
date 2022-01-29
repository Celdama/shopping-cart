import styled from 'styled-components';

export const Content = styled.li`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;

  .index {
    width: 20%;
  }

  div {
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
`;
