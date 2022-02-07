import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bgCart);
  position: fixed;
  border: 1px solid #000;
  border-radius: 8px;
  top: 0px;
  left: 0px;
  height: 100%;
  right: 18rem;
  color: var(--black);
  z-index: 5;
  display: ${({ displayCart }) => (displayCart ? 'block' : 'none')};

  @media screen and (min-width: ${breakpoints.xs}) {
    min-width: 320px;
    max-width: 320px;
    top: 8rem;
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
  @media screen and (min-width: ${breakpoints.xs}) {
    height: 100%;
    width: 100%;
  }

  .empty-product {
    text-transform: uppercase;
    font-size: 1rem;
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
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1 1 auto;
    padding: 0;
  }
`;

export const Item = styled.li`
  display: ${({ quantity }) => (quantity ? 'block' : 'none')};
  padding: 1.2rem 0;
`;
