import Text from '@/components/Atoms/Text';
import { BalanceStyle } from './style';

type BalanceTokenProps = BaseComponent & {
  balance: string;
};

const BalanceToken = ({ balance, ...props }: BalanceTokenProps) => {
  return (
    <BalanceStyle {...props}>
      <Text margin="10px 0" fontWeight={600} fontSize="1.5rem">
        <strong>Quiz Token (QUIZ)</strong>
      </Text>
      <Text margin="10px 0" fontWeight={600}>
        <strong>Balance:</strong> {balance} ETH
      </Text>
    </BalanceStyle>
  );
};

export default BalanceToken;
