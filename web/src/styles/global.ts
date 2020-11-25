import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #2D2D2D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
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
