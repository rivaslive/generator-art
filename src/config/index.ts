import { Mainnet, Ropsten, Config } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const connectKey = '@connect';
export const ETH_ROPSTEN_NETWORK_ID = Ropsten.chainId;
export const ETH_MAIN_NET_NETWORK_ID = Mainnet.chainId;
export const surveyToken = process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? '';
export const configWeb3: Config = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: false,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
  },
};

