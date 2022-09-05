import { CreditCardOutlined } from '@ant-design/icons';

import Text from '@/components/Atoms/Text';
import Button from '@/components/Atoms/Button';
import WrapperWithBorder from '@/components/Atoms/WrapperWithBorder';

import { CardIconStyle, StyleContent } from './style';

type ConnectWalletCardProps = BaseComponent & {
  connect: () => void;
};

const ConnectWalletCard = ({ connect, ...props }: ConnectWalletCardProps) => {
  return (
    <WrapperWithBorder {...props}>
      <StyleContent>
        <CardIconStyle>
          <CreditCardOutlined />
        </CardIconStyle>
        <Text margin="24px 0 0" color="white" fontWeight={600}>
          Connect your wallet to see which QUIZ you are in
        </Text>
        <Button onClick={connect} margin="24px auto 0">
          Connect wallet
        </Button>
      </StyleContent>
    </WrapperWithBorder>
  );
};

export default ConnectWalletCard;
