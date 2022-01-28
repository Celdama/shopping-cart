import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);

  .title {
    display: flex;
    font-size: 12px;
    text-transform: uppercase;
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .photos {
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const InstagramItem = styled.div`
  height: 158px;
  width: 158px;
  background: url(${({ img }) => (img ? img : 'transparent')});
  background-position: center;
  filter: ${({ img }) =>
    img ? 'drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.9))' : ''};
  background-size: cover;
`;
