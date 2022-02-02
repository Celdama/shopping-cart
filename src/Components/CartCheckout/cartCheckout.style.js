import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px dotted var(--black);
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PriceInfo = styled.div`
  width: 100%;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const Button = styled.button`
  height: 50px;
  width: 272px;
  border: 1px solid #232025;
  border-radius: 32px;
  background-color: #232025;
  color: var(--rose);
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;
