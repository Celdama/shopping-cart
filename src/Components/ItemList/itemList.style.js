import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);

  @media screen and (min-width: 992px) {
    max-width: 90%;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 12px 0;
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
          font-size: 38px;
          text-align: left;
          text-shadow: -1px 0 var(--rose), 0 1px var(--rose), 1px 0 var(--rose),
            0 -1px var(--rose);

          text-transform: uppercase;
          transition: all ease-in-out 0.2s;

          @media screen and (min-width: 768px) {
            font-size: 4.5vw;
          }
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
        width: 30px;
        transition: opacity ease-in-out 0.4s;

        @media screen and (min-width: 768px) {
          width: 65px;
        }
      }
    }
  }
`;
