import { WalletOutlined } from '@ant-design/icons';

import Text from '@/components/Atoms/Text';
import WrapperWithBorder from '@/components/Atoms/WrapperWithBorder';

import { CardIconStyle, ConnectWalletStyle, StyleContent } from './style';

type ConnectWalletCardProps = BaseComponent & {
  // connect: () => void;
};

const ConnectWalletCard = ({ ...props }: ConnectWalletCardProps) => {
  return (
    <WrapperWithBorder {...props}>
      <StyleContent>
        <CardIconStyle>
          <WalletOutlined />
        </CardIconStyle>
        <Text margin="24px 0 0" align="center" color="white" fontWeight={600}>
          Connect your wallet for created collection arts
        </Text>
        <ConnectWalletStyle />
      </StyleContent>
    </WrapperWithBorder>
  );
};

export default ConnectWalletCard;
