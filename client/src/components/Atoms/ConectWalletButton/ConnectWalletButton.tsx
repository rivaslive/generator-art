import { useWallet } from '@solana/wallet-adapter-react';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  useWalletModal,
  WalletModalButton,
  WalletConnectButton,
  WalletIcon,
} from '@solana/wallet-adapter-react-ui';
import { useAuth } from '@/context/Auth';
import { ButtonStyle, ConnectWalletStyle } from './style';

type ButtonProps = BaseComponent & {
  children?: ReactNode;
};

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { publicKey, wallet } = useWallet();
  const { logout } = useAuth();
  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + '..' + base58.slice(-4);
  }, [children, wallet, base58]);

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [base58]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const openModal = useCallback(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target as Node)) return;

      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet)
    return (
      <ConnectWalletStyle>
        <WalletModalButton {...props}>{children}</WalletModalButton>
      </ConnectWalletStyle>
    );
  if (!base58)
    return (
      <ConnectWalletStyle>
        <WalletConnectButton {...props}>{children}</WalletConnectButton>
      </ConnectWalletStyle>
    );

  return (
    <div className="wallet-adapter-dropdown">
      <ButtonStyle
        withMinWidth={false}
        bgColor="borderColor"
        aria-expanded={active}
        className="wallet-adapter-button-trigger"
        style={{ pointerEvents: active ? 'none' : 'auto', ...props.style }}
        onClick={openDropdown}
        icon={<WalletIcon wallet={wallet} />}
        {...props}
      >
        {content}
      </ButtonStyle>
      <ul
        aria-label="dropdown-list"
        className={`wallet-adapter-dropdown-list ${
          active && 'wallet-adapter-dropdown-list-active'
        }`}
        ref={ref}
        role="menu"
      >
        <li
          onClick={copyAddress}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          {copied ? 'Copied' : 'Copy address'}
        </li>
        <li
          onClick={openModal}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Change wallet
        </li>
        <li
          onClick={logout}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Disconnect
        </li>
      </ul>
    </div>
  );
};

export default ConnectWalletButton;
