import Sanitize from 'styled-sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${Sanitize};
  html {
    height: 100%;
    line-height: 1.6;
  }
  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    font-size: 14px;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  h1, h2, h3 {
    font-size: 14px;
  }
`;

export default GlobalStyle;
