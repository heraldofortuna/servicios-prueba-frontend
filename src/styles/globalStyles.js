import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  p, span {
    font-size: 14px;
    line-height: 24px;
    word-wrap: break-word;      /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
    white-space: pre-wrap;      /* current browsers */
  }
`;

export default GlobalStyle;
