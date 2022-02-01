import styled from 'styled-components';

export const Wrapper = styled.section``;

export const ContentQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 140px 0;

  @media screen and (min-width: 992px) {
    padding: 320px 0;
  }

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 32px;

    @media screen and (min-width: 992px) {
      font-size: 3.5vw;
    }
  }
`;

export const ContentAnswer = styled.div`
  font-size: 140px;
  overflow: hidden;
  padding: 10px 0;

  @media screen and (min-width: 992px) {
    font-size: 14.5vw;
  }

  div {
    display: flex;
    width: 4000px;
    text-transform: uppercase;

    p {
      text-shadow: -1px 0 #d5cdc4, 0 1px #d5cdc4, 1px 0 #d5cdc4, 0 -1px #d5cdc4;
      margin: 0;
      line-height: 0.9em;
      padding: 0;
    }

    .odd {
      color: var(--black);
    }
  }
`;
