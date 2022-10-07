import styled from 'styled-components';
import { mediaQueries } from '@/styles/theme';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const HeaderStyle = styled.header`
  border-bottom: 1px solid rgba(224, 224, 255, 0.12);
`;

export const HeaderContainerStyle = styled.div`
  padding: 0 20px;

  ${mediaQueries.tablet} {
    padding: 0 40px;
  }
`;

export const HeaderContentStyle = styled.div`
  min-height: 72px;
  transition: 0.3s;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeaderColumnStyle = styled.div`
  align-items: center;
  display: flex;

  .only-desk,
  button.only-desk {
    display: none;
  }

  .only-mobile {
    display: inline-block;
  }

  ${mediaQueries.tablet} {
    .only-desk,
    button.only-desk {
      display: inline-block;
    }

    .only-desk.flex,
    button.only-desk.flex {
      display: flex;
    }

    .only-mobile {
      display: none;
    }
  }
`;
