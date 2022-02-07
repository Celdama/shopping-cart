import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #e2ddd7;
  position: fixed;
  border: 1px solid #000;
  border-radius: 8px;
  top: 0px;
  left: 0px;
  height: 100%;
  right: 180px;
  color: var(--black);
  z-index: 5;
  display: ${({ displayCart }) => (displayCart ? 'block' : 'none')};

  @media screen and (min-width: 562px) {
    min-width: 320px;
    max-width: 320px;
    top: 80px;
    left: initial;
    right: 10%;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 70%;
  margin: 0 auto;
  @media screen and (min-width: 562px) {
    height: 100%;
    width: 100%;
  }

  .empty-product {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--black);
    font-weight: bold;
    text-align: center;
  }
`;

export const ContentCart = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
`;

export const ListItems = styled.div`
  height: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1 1 auto;
    padding: 0;
  }
`;

export const Item = styled.li`
  display: ${({ quantity }) => (quantity ? 'block' : 'none')};
  padding: 12px 0;
`;
