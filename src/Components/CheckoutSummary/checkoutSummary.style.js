import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  .summary-section {
    background-color: var(--white);
    margin: 2rem 0;
    border: 1px solid lightgray;
  }

  .summary-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.2rem;
    border-bottom: 1px solid lightgray;
  }

  .summary-body {
    padding: 0.8rem 1.2rem;

    > div {
      display: flex;
      justify-content: space-between;
      margin: 1.2rem 0;
    }

    > div:last-child {
      margin-top: 2.2rem;
      font-weight: bold;
    }
  }

  button {
    background-color: var(--inputFocus);
    border: none;
    border-radius: 3px;
    padding: 0.9rem 1.5rem;
    width: 100%;
    color: var(--white);
    cursor: pointer;
  }
`;
