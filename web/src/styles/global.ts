import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    overflow-x: hidden;
  }

  body {
    background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
    width: 100vw;
    color: #2D2D2D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  body, input, button {
    font-family: Rubik, sans-serif;
    font-size: 24px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
