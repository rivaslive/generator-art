import Text from '@/components/Atoms/Text';
import { BalanceStyle } from './style';

type BalanceTokenProps = BaseComponent & {
  balance: string;
  networkName?: string;
  balanceAccount?: string;
};

const BalanceToken = ({
  balance,
  balanceAccount,
  networkName = 'Ropsten',
  ...props
}: BalanceTokenProps) => {
  return (
    <BalanceStyle {...props}>
      <Text margin="10px 0" fontWeight={600} fontSize="1.5rem">
        <strong>Quiz Token (QUIZ)</strong>
      </Text>
      {balanceAccount && (
        <Text margin="10px 0" fontWeight={600}>
          <strong>Account Balance:</strong> {balanceAccount} {networkName}ETH
        </Text>
      )}
      <Text margin="10px 0" fontWeight={600}>
        <strong>Token Balance:</strong> {balance} {networkName}ETH
      </Text>
    </BalanceStyle>
  );
};

export default BalanceToken;
