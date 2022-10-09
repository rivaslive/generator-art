// modules import
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

// locals imports
import GlobalStyle from '@/styles/global';
import { themeVars } from '@/styles/theme';
import AuthProvider from '@/context/Auth/Auth';

// styles
import '@/styles/antd.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Generator arts</title>
      </Head>
      <ThemeProvider theme={themeVars}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
