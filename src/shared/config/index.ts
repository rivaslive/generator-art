import { Mainnet, Ropsten, Config } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const configWeb3: Config = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: false,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
  },
};

const config = {
  ETH_ROPSTEN_NETWORK_ID: Ropsten.chainId,
  ETH_MAIN_NET_NETWORK_ID: Mainnet.chainId,
  contractToken: process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? '',
  connectKey: '@connect',
  configWeb3,
};

export default config;
