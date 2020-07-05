import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/base';
import { dark } from '../themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
