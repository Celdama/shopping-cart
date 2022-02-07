import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 766px) {
    display: none;
  }
`;

export const Content = styled.div`
  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90px;

    span {
      cursor: pointer;

      .icon {
        transition: transform 0.3s ease-out;
      }

      .down {
        transform: rotate(180deg);
      }
    }
  }

  ul {
    background-color: var(--black);
    position: absolute;
    top: 68px;
    width: 95%;
    list-style: none;
    padding: 0 0 20px 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;

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
  }

  .not-collapse {
    max-height: 300px;
  }
`;

export const Title = styled.h3`
  font-size: 12vw;
  text-transform: uppercase;
  margin: 0;
`;
