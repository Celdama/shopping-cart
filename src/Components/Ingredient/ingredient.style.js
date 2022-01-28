import styled from 'styled-components';

export const Wrapper = styled.section``;

export const ContentQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  flex-direction: column;

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 3.5vw;
  }
`;

export const ContentAnswer = styled.div`
  font-size: 14.5vw;
  overflow: hidden;

  div {
    display: flex;

    p {
      text-shadow: -2px 0 #d5cdc4, 0 2px #d5cdc4, 2px 0 #d5cdc4, 0 -2px #d5cdc4;
      margin: 0;
      line-height: 0.9em;
    }

    .odd {
      color: var(--black);
    }
  }
`;
