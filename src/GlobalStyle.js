import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 2100px;
    --white: #fff;
    --inputFocus: #3898ec;
    --black: #232025;
    --rose: #d5cdc4;
    --bgCart: #e2ddd7;
    --bgCheckout: #f5f5f5;
    --paypalColor: #ffc439;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontSuperSmall: 0.8rem;
    font-size: 10px
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

  .serif {
    font-family: serif;
    font-style: italic;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .show-menu {
    transform: translateY(0px);
  }

  .hide-menu {
    transform: translateY(-101%);
  }


`;
