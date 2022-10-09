import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useWallet } from '@solana/wallet-adapter-react';

import { authKey } from '@/config';
import storage from '@/utils/storage';
import ROUTES, { API_ROUTES } from '@/config/routes';
import useMutationFetch from '@/hooks/useMutationFetch';

import Web3Provider from './Web3Provider';
import {
  AuthContextType,
  AuthResponse,
  CompleteProfile,
  UserType,
} from './types';

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  jwt: '',
  loading: true,
  async completeProfile() {},
  logout() {},
  loadingCallbacks: false,
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [walletProvider, setWalletProvider] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [loadingCallbacks, setLoadingCallbacks] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [authPost] = useMutationFetch<AuthResponse>(API_ROUTES.AUTH);
  const [completeProfilePost] = useMutationFetch<UserType, CompleteProfile>(
    API_ROUTES.COMPLETE_PROFILE,
  );

  const provider = useWallet();

  const { publicKey, wallet } = useMemo(() => {
    return {
      publicKey: provider.publicKey,
      wallet: provider.wallet,
      disconnecting: provider.disconnecting,
    };
  }, [provider.publicKey, provider.wallet, provider.disconnecting]);

  const logout = useCallback(() => {
    provider.disconnect().then(() => {
      setUser(null);
      storage.setItem(authKey, false);
      setWalletProvider('');
      setWalletAddress('');
    })
  }, [provider]);

  const completeProfile = useCallback(
    ({
      firstName,
      lastName,
      email,
    }: Omit<CompleteProfile, 'wallet' | 'provider'>) => {
      setLoadingCallbacks(true);

      return completeProfilePost({
        firstName,
        email,
        lastName,
        provider: walletProvider as any,
        wallet: walletAddress,
      }).then(({ data, errors }) => {
        if (data) setUser(data);
        if (errors) {
          notification.error({
            message: 'Error to complete profile',
            description: errors,
          });
        }
        setLoading(false);
        setLoadingCallbacks(false);
      });
    },
    [completeProfilePost, walletAddress, walletProvider],
  );

  useEffect(() => {
    const walletProviderName = wallet?.adapter?.name?.toLowerCase();
    if (walletProviderName) {
      setWalletProvider((prov) => {
        if (prov !== walletProviderName) return walletProviderName;
        return prov;
      });
    }
  }, [wallet]);

  useEffect(() => {
    const walletAddr = publicKey?.toJSON();
    if (walletAddr) {
      setWalletAddress((addr) => {
        if (addr !== walletAddr) return walletAddr;
        return addr;
      });
    }
  }, [publicKey]);

  useEffect(() => {
    const existSession = storage.getItem(authKey);

    if (!existSession) {
      setLoading(false);
    }

    if (walletAddress && walletProvider) {
      setLoadingCallbacks(true);

      authPost({
        wallet: walletAddress,
        provider: walletProvider,
      }).then(({ data }) => {
        if (data?.user) {
          setUser(data.user);
          storage.setItem(authKey, true);
        }
        if (
          data?.newUser &&
          !router.pathname.includes('/auth/complete-profile')
        ) {
          router.push(ROUTES.COMPLETE_PROFILE.path);
        }

        setLoadingCallbacks(false);
        setLoading(false);
      });
    }
  }, [authPost, router, walletProvider, walletAddress]);

  const out = useMemo(() => {
    return {
      user,
      jwt: user?.jwt || '',
      loading,
      logout,
      loadingCallbacks,
      completeProfile,
      isAuthenticated: !!user && user?.status === 'completed',
    };
  }, [user, loading, loadingCallbacks, completeProfile, logout]);

  return <AuthContext.Provider value={out}>{children}</AuthContext.Provider>;
};

const AuthMiddleWare = ({ children }: { children: ReactNode }) => {
  return (
    <Web3Provider>
      <AuthProvider>{children}</AuthProvider>
    </Web3Provider>
  );
};

export default AuthMiddleWare;

export const useAuth = () => useContext(AuthContext);
