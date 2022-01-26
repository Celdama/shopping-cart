import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --maxWidth: 1800px;
    --black: #232025;
    --rose: #d5cdc4;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--black);
    color: var(--rose);
  }

  a {
    text-decoration: none;
  }
`;
