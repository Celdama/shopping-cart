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
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .delete {
    text-decoration: underline;
    cursor: pointer;
    width: fit-content;
  }
`;

export const ContentQuantity = styled.div`
  width: 54px;
  height: 32px;
  background-color: #d5cdc4;
  font-weight: 600;
  font-size: 12px;
  border-radius: 4px;
  color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  height: 100%;
  display: flex;
  width: 14px;
  justify-content: center;
  background-color: var(--black);
  color: var(--rose);
  align-items: center;
  cursor: pointer;
  border: none;
`;
