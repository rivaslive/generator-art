import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useEthers, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core';

import config from '@/shared/config';
import useModal from '@/shared/hooks/useModal';
import ModalNetworkNotValid from '@/components/Molecules/ModalNetworkNotValid';
import ModalNotExtension from '@/components/Molecules/ModalNotExtension';

const { ETH_ROPSTEN_NETWORK_ID } = config;

type Network = {
  name: string;
  chainId: number;
};

type Web3ContextType = {
  active: boolean;
  isActive: boolean;
  account: string | null;
  isLoading: boolean;
  network: Network | null;
  connect: () => void;
  disconnect: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
};

const defaultContext: Web3ContextType = {
  active: false,
  isActive: false,
  account: null,
  isLoading: true,
  network: null,
  connect() {},
  disconnect() {},
  async switchNetwork() {},
};

const Web3Context = createContext<Web3ContextType>(defaultContext);

const networks = [...DEFAULT_SUPPORTED_CHAINS];

export const Web3Provider = ({ children }: { children?: ReactNode }) => {
  // modals
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isOpenNotExt,
    openModal: openModalNotExt,
    closeModal: closeModalNotExt,
  } = useModal();

  // states
  const [network, setNetwork] = useState<Network | null>(null);
  const {
    active,
    isLoading,
    account,
    chainId,
    deactivate,
    activateBrowserWallet,
    switchNetwork: ethSwitchNetwork,
  } = useEthers();

  // callbacks
  const connect = useCallback(() => {
    return activateBrowserWallet();
  }, [activateBrowserWallet]);

  const disconnect = useCallback(() => {
    return deactivate();
  }, [deactivate]);

  const switchNetwork = useCallback(
    (chainId: number) => {
      return ethSwitchNetwork(chainId);
    },
    [ethSwitchNetwork],
  );

  const isActive = useMemo(() => {
    return active && !!account && !isLoading;
  }, [account, active, isLoading]);

  // effects
  useEffect(() => {
    if (chainId) {
      const net = networks.find((net) => net.chainId === chainId);
      net &&
        setNetwork({
          chainId: net.chainId,
          name: net.chainName,
        });
    }
  }, [chainId]);

  useEffect(() => {
    if (isActive && chainId !== ETH_ROPSTEN_NETWORK_ID) {
      openModal();
    }
  }, [chainId, isActive, openModal]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      if (!window?.ethereum) openModalNotExt();
    }
  }, [openModalNotExt]);

  // return data
  const output = useMemo(() => {
    return {
      isLoading: isLoading,
      connect,
      active,
      network,
      disconnect,
      switchNetwork,
      isActive,
      account: account || null,
    };
  }, [
    isLoading,
    connect,
    active,
    network,
    disconnect,
    switchNetwork,
    isActive,
    account,
  ]);

  return (
    <Web3Context.Provider value={output}>
      {children}
      <ModalNetworkNotValid isOpen={isOpen} onClose={closeModal} />
      <ModalNotExtension isOpen={isOpenNotExt} onClose={closeModalNotExt} />
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
