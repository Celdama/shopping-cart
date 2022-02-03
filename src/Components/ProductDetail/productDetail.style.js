import styled from 'styled-components';

export const Wrapper = styled.section`
  .compare-container {
    display: flex;
    height: 100vh;
  }
`;

export const Content = styled.div`
  padding: 10px 10px;
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);

  display: flex;
  @media screen and (min-width: 992px) {
    max-width: 95%;
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
  width: 50%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ProductList = styled.div`
  width: 100%;
  padding: 16px 30px;
  z-index: 2;

  ul {
    text-transform: uppercase;
    width: 80%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

export const ProductInfo = styled.div`
  padding: 0 30px;
  height: 58%;
  width: 100%;

  display: flex;
  .info-text {
    width: 80%;
  }

  .info-thumbnails {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
