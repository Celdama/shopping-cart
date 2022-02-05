import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Content = styled.div`
  background-color: #fff;
  margin: 20px 0;
  border: 1px solid lightgray;

  .section-header {
    display: flex;
    padding: 0 12px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
  }

  .section-body {
    padding-top: 10px;

    div {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }
  }
`;
