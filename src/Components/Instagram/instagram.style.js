import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  padding: 8rem 2rem;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 18rem;
    padding: 10rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 90%;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    text-transform: uppercase;
    width: 50%;
  }

  .photos {
    padding: 6rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media screen and (min-width: ${breakpoints.md}) {
      justify-content: space-between;
    }
  }
`;

export const InstagramItem = styled.div`
  height: 158px;
  width: 158px;
  background: url(${({ img }) => (img ? img : 'transparent')});
  display: ${({ img }) => (!img ? 'none' : '')};
  background-position: center;
  filter: ${({ img }) =>
    img ? 'drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.9))' : ''};
  background-size: cover;
  margin: 1rem;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;
