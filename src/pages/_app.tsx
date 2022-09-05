// modules import
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DAppProvider } from '@usedapp/core';

// locals imports
import GlobalStyle from '@/styles/global';
import { themeVars } from '@/styles/theme';
import { configWeb3 } from '@/config';
import { Web3Provider } from '@/context/Web3Context';

// styles
import '@/styles/antd.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeVars}>
      <DAppProvider config={configWeb3}>
        <Web3Provider>
          <GlobalStyle />
          <Component {...pageProps} />
        </Web3Provider>
      </DAppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
