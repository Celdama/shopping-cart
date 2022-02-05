import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  .summary-section {
    background-color: #fff;
    margin: 20px 0;
    border: 1px solid lightgray;
  }

  .summary-header {
    display: flex;
    padding: 0 12px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
  }

  .summary-body {
    padding: 8px 12px;

    > div {
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
    }

    > div:last-child {
      margin-top: 22px;
      font-weight: bold;
    }
  }
  button {
    background-color: #3898ec;
    border: none;
    border-radius: 3px;
    padding: 9px 15px;
    width: 100%;
    color: #fff;
    cursor: pointer;
  }
`;
