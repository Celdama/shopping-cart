import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px dotted var(--black);
  padding-bottom: 2rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.8rem 2.4rem;
  font-weight: bold;
`;

export const Button = styled.button`
  height: 50px;
  width: 272px;
  border: 1px solid var(--black);
  border-radius: 32px;
  background-color: var(--black);
  color: var(--rose);
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
`;
