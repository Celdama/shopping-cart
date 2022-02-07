import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Content = styled.div`
  display: flex;
  padding: 10px 18px;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (min-width: 992px) {
    max-width: 95%;
  }

  @media screen and (min-width: 766px) {
    flex-direction: row;
    padding: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  @media screen and (min-width: 766px) {
    width: 50%;
  }
`;

export const ProductList = styled.div`
  width: 100%;
  padding: 16px 30px;
  z-index: 2;
  display: none;

  @media screen and (min-width: 766px) {
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

    @media screen and (min-width: 766px) {
      width: 80%;
      padding: 0 30px;
    }
  }
`;

export const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  outline: 1px solid red;
  @media screen and (min-width: 766px) {
    flex-direction: row;
    height: 100vh;
  }
`;
