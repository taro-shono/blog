import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/base';
import { defaults } from '../themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaults}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
