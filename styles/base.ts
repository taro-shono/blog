import { createGlobalStyle } from 'styled-components';
import { dark, light } from '../themes';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: ${light.colors.bg};
    --color-fg: ${light.colors.fg};
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg: ${dark.colors.bg};
      --color-fg: ${dark.colors.fg};
    }
  }
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
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
  img {
    width: 100%;
  }
  h1, h2, h3 {
    font-size: 14px;
  }
`;
