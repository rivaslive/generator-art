import { JsonRpcProvider } from '@ethersproject/providers';
import {BigNumberish} from 'ethers';

export type Network = {
  name: string;
  chainId: number;
};

export type Web3ContextType = {
  active: boolean;
  isActive: boolean;
  provider?: JsonRpcProvider;
  account: string | null;
  isLoading: boolean;
  balance?: BigNumberish;
  balanceAccount?: BigNumberish;
  network: Network | null;
  connect: () => void;
  disconnect: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
};