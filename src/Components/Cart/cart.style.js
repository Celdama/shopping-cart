import styled from 'styled-components';

export const Wrapper = styled.div`
  /* min-height: 281px; */
  min-width: 320px;
  max-width: 320px;
  background-color: #e2ddd7;
  position: fixed;
  border: 1px solid #000;
  border-radius: 8px;
  /* padding: 16px 0px; */
  top: 80px;
  right: 180px;
  color: var(--black);
  z-index: 5;
  display: ${({ displayCart }) => (displayCart ? 'block' : 'none')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-cart {
    .container {
      /* padding: 0 24px; */

      .empty-product {
        text-transform: uppercase;
        font-size: 12px;
        color: var(--black);
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;

export const ContentCart = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
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
