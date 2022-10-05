// modules import
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

// locals imports
import GlobalStyle from '@/styles/global';
import { themeVars } from '@/styles/theme';

// styles
import '@/styles/antd.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Membrane test</title>
      </Head>
      <ThemeProvider theme={themeVars}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
