import styled from 'styled-components';

// premier Wrapper
// export const Wrapper = styled.div`
//   padding: 20px 0;
//   align-self: center;
//   margin: 0 auto;
//   width: 100vw;
//   width: ${({ width }) => (width ? `${width}vw` : '')};
//   max-width: 99vw;
//   min-width: 88.5vw;
//   transition: all ease 0.2s;
// `;

export const Wrapper = styled.div`
  background: url(${({ image }) => image || ''});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;

  div {
    background-color: var(--black);
    width: 100px;
    height: 109.3vh;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
`;
