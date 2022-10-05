import { GoogleOutlined } from '@ant-design/icons';

import Text from '@/components/Atoms/Text';
import Button from '@/components/Atoms/Button';
import WrapperWithBorder from '@/components/Atoms/WrapperWithBorder';

import { CardIconStyle, StyleContent } from './style';

type ConnectWalletCardProps = BaseComponent & {
  // connect: () => void;
};

const ConnectDriveCard = ({ id, ...props }: ConnectWalletCardProps) => {
  return (
    <WrapperWithBorder {...props}>
      <StyleContent>
        <CardIconStyle>
          <GoogleOutlined />
        </CardIconStyle>
        <Text margin="24px 0 0" color="white" fontWeight={600}>
          Connect your drive for created arts
        </Text>
        <Button id={id} margin="24px auto 0">
          Connect Google Drive
        </Button>
      </StyleContent>
    </WrapperWithBorder>
  );
};

export default ConnectDriveCard;
