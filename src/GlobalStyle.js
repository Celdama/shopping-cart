import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #232025;
    --rose: #d5cdc4
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background-color: var(--black);
    color: var(--rose);
  }

  a {
    text-decoration: none;
  }
`;
