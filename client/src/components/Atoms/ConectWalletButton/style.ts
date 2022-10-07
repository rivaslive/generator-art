import styled from 'styled-components';
import Button from '@/components/Atoms/Button';

export const ConnectWalletStyle = styled.div`
  button.wallet-adapter-button {
    height: 40px;
    background: #313538;
    border-radius: 12px;
    padding: 0 20px;
  }
`;

export const ButtonStyle = styled(Button)`
  height: 40px;
  background: #313538;
  border-radius: 12px;
  padding: 0 10px;

  img {
    width: 25px;
    margin-right: 10px;
  }
`;
