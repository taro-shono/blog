import Sanitize from 'styled-sanitize.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    -webkit-font-smoothing: antialiased;
    @media (prefers-color-scheme: dark) {
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
    }
  }
  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
    cursor: pointer;
    @media (prefers-color-scheme: dark) {
      color: ${(props) => props.theme.colors.text};
    }
  }
  img {
    width: 100%;
  }
  h1, h2, h3 {
    font-size: 14px;
  }
`;
