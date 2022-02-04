import styled from 'styled-components';

export const Wrapper = styled.div`
  outline: 1px solid red;
  padding: 10px;
`;

export const Content = styled.div`
  outline: 1px solid blue;

  .form-section {
    outline: 1px solid red;
    width: 50%;

    background-color: #fff;
    margin: 20px 0;

    .section-header {
      display: flex;
      padding: 0 12px;
      align-items: center;
      justify-content: space-between;
      outline: 1px solid green;
    }

    .section-body {
      background-color: red;
    }
  }
`;
