import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 80px;
  padding: 80px 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 992px) {
    margin-top: 180px;
    padding: 100px 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);

  @media screen and (min-width: 992px) {
    max-width: 90%;
  }

  .title {
    display: flex;
    font-size: 12px;
    text-transform: uppercase;
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .photos {
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;

    @media screen and (min-width: 992px) {
      gap: 20px;
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

  @media screen and (min-width: 992px) {
    display: block;
  }
`;
