import Container from '@/components/Atoms/Container';
import ConnectDriveCard from '@/components/Molecules/ConnectWalletCard';
import { TitleStyle } from './style';

type ConnectDriveTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectDriveTemplateProps) => {
  return (
    <Container {...props} size="small">
      <TitleStyle>Connect</TitleStyle>
      <ConnectDriveCard />
    </Container>
  );
};

export default ConnectWalletTemplate;
