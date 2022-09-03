import { CreditCardOutlined } from '@ant-design/icons';

import Text from '@/components/Atoms/Text';
import Button from '@/components/Atoms/Button';
import { useWeb3 } from '@/context/Web3Context';

import { CardWrapperStyle, CardIconStyle, StyleContent } from './style';

type ConnectWalletCardProps = {};

const ConnectWalletCard = (props: ConnectWalletCardProps) => {
  const { connect } = useWeb3();

  return (
    <CardWrapperStyle>
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
    </CardWrapperStyle>
  );
};

export default ConnectWalletCard;
