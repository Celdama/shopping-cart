import styled from 'styled-components';

export const Wrapper = styled.div`
  /* padding: 0 20px; */
  display: block;

  @media screen and (min-width: 766px) {
    display: none;
  }
`;

export const Content = styled.div`
  /* padding: 0 10px; */

  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90px;

    span {
      cursor: pointer;

      .down {
        transform: rotate(180deg);
      }
    }
  }

  ul {
    background-color: var(--black);
    position: absolute;
    top: 80px;
    width: 97%;
    list-style: none;
    padding: 0 0 20px 0;
    /* left: 90px; */
    /* z-index: 10; */

    li {
      padding: 18px 0;
      font-size: 16px;
      text-transform: uppercase;
      width: 10%;
      cursor: pointer;
    }
  }

  .collapse {
    max-height: 0px;
    overflow: hidden;
  }

  .not-collapse {
    max-height: 300px;
    overflow: hidden;
  }
  /* 
  ul {
    max-height: 300px;
    overflow: hidden;
  } */
`;

export const Title = styled.h3`
  font-size: 12vw;
  text-transform: uppercase;
  margin: 0;
`;
