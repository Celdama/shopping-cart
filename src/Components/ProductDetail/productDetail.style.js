import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.8rem;
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 95%;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    padding: 1rem;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    width: 50%;
  }
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 50%;
  }
`;

export const ProductList = styled.div`
  width: 100%;
  padding: 1.6rem 3rem;
  z-index: 2;
  display: none;

  @media screen and (min-width: ${breakpoints.sm}) {
    display: block;
  }
  ul {
    text-transform: uppercase;
    width: 80%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

export const ProductInfo = styled.div`
  padding: 0;
  height: 58%;
  width: 100%;

  display: flex;
  .info-text {
    width: 100%;

    @media screen and (min-width: ${breakpoints.sm}) {
      width: 80%;
      padding: 0 3rem;
    }
  }
`;

export const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    height: 100vh;
  }
`;
