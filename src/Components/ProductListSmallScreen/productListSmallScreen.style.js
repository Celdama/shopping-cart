import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const Content = styled.div`
  .collapse {
    max-height: 0px;
  }

  .not-collapse {
    max-height: 300px;
  }

  .price {
    font-size: 2.4rem;
    margin: 0;
  }
`;

export const Dropdown = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 90px;

  span {
    cursor: pointer;

    .icon {
      transition: transform 0.3s ease-out;
      height: 20px;
    }

    .down {
      transform: rotate(180deg);
    }
  }
`;

export const ProductList = styled.ul`
  background-color: var(--black);
  position: absolute;
  top: 74px;
  width: 95%;
  list-style: none;
  padding: 0 0 20px 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
`;

export const ProductListItems = styled.li`
  padding: 1rem 0;
  margin: 1.5rem 0;
  font-size: 1.6rem;
  text-transform: uppercase;
  width: 10%;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 12vw;
  text-transform: uppercase;
  margin: 0;
`;
