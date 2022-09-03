import Container from '@/components/Atoms/Container';
import ConnectWalletCard from '@/components/Molecules/ConnectWalletCard';
import { TitleStyle } from './style';

type ConnectWalletTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectWalletTemplateProps) => {
  return (
    <Container {...props} size="small">
      <TitleStyle>Connect</TitleStyle>
      <ConnectWalletCard />
    </Container>
  );
};

export default ConnectWalletTemplate;
