import { Mainnet, Ropsten, Config } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const ETH_ROPSTEN_NETWORK_ID = Ropsten.chainId;

export const connectKey = '@connect';
export const infuraEthApiKey = process.env.NEXT_PUBLIC_INFURA_ETH_KEY ?? '';
export const surveyToken = process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? '';

export const configWeb3: Config = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: false,
  readOnlyUrls: {
    [Mainnet.chainId]: infuraEthApiKey
      ? `https://mainnet.infura.io/v3/${infuraEthApiKey}`
      : getDefaultProvider('mainnet'),
    [Ropsten.chainId]: infuraEthApiKey
      ? `https://ropsten.infura.io/v3/${infuraEthApiKey}`
      : getDefaultProvider('ropsten'),
  },
};

export const googleId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
