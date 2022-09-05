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

import useModal from '@/hooks/useModal';
import storage from '@/shared/utils/storage';
import { ETH_ROPSTEN_NETWORK_ID, connectKey } from '@/config';
import ModalNotExtension from '@/components/Molecules/ModalNotExtension';
import ModalNetworkNotValid from '@/components/Molecules/ModalNetworkNotValid';
import type { Network, Web3ContextType } from './types';

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
  const [loading, setLoading] = useState<boolean>(true);
  const [network, setNetwork] = useState<Network | null>(null);
  const {
    active,
    isLoading,
    account,
    chainId,
    deactivate,
    library,
    activateBrowserWallet,
    switchNetwork: ethSwitchNetwork,
  } = useEthers();

  // callbacks
  const connect = useCallback(async () => {
    storage.setItem(connectKey, true);
    await activateBrowserWallet();
    return;
  }, [activateBrowserWallet]);

  const disconnect = useCallback(() => {
    storage.setItem(connectKey, false);
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
    if (storage.getItem(connectKey)) {
      connect().then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [connect]);

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
  const output = useMemo<Web3ContextType>(() => {
    return {
      connect,
      active,
      network,
      disconnect,
      switchNetwork,
      isActive,
      provider: library,
      isLoading: loading || isLoading,
      account: account || null,
    };
  }, [
    account,
    active,
    connect,
    disconnect,
    isActive,
    isLoading,
    loading,
    network,
    library,
    switchNetwork,
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
