import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 281px;
  min-width: 320px;
  max-width: 320px;
  background-color: var(--rose);
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
  .header-cart {
    padding: 18px 24px;
    border-bottom: 1px dotted var(--black);
    width: 100%;
    flex: 0 1 auto;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        padding: 0;
        margin: 0;
        font-size: 16px;
        text-transform: uppercase;
        color: var(--black);
      }
      span {
        font-size: 24px;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
      }
    }
  }

  .content-cart {
    /* height: 100%; */
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    div {
      padding: 0 24px;
      width: 100%;

      p {
        text-transform: uppercase;
        font-size: 12px;
        color: var(--black);
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
