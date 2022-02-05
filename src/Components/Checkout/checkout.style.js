import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  color: var(--black);
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .left-side {
    width: 600px;

    @media screen and (min-width: 992px) {
      flex: 1 1 auto;
      max-width: 600px;
    }
  }

  .right-side {
    width: 100%;

    @media screen and (min-width: 992px) {
      width: 35%;
      max-width: 320px;
    }
  }
`;
