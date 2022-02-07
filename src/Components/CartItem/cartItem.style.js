import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
`;

export const Thumbnail = styled.img`
  width: 64px;
  height: 64px;
`;

export const ContentProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 1 auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;

  .name {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .delete {
    text-decoration: underline;
    cursor: pointer;
    width: fit-content;
  }
`;

export const ContentQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54px;
  height: 32px;
  background-color: var(--rose);
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 4px;
  color: var(--black);

  .decremente {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .incremente {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const QuantityBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 14px;
  background-color: var(--black);
  color: var(--rose);
  cursor: pointer;
  border: none;
`;
