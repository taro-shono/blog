import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/base';
import { dark, light } from '../themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (!window) return;
    setIsDark(
      window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    );
  }, []);

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
