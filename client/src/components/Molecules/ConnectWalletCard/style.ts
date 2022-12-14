import styled from 'styled-components';
import ConnectWalletButton from '@/components/Atoms/ConectWalletButton';

export const StyleContent = styled.div`
  text-align: center;

  p {
    width: 100%;
    max-width: 250px;
  }
`;

export const CardIconStyle = styled.div`
  width: 96px;
  height: 96px;
  margin: auto;
  display: grid;
  place-items: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.info};
  border-radius: ${({ theme }) => theme.vars.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.info};
  background: ${({ theme }) => theme.colors.infoOpacity};
`;

export const ConnectWalletStyle = styled(ConnectWalletButton)`
  margin: 20px auto;
  background: ${({ theme }) => theme.colors.primary};
`;
