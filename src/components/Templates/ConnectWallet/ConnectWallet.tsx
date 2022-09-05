import { useWeb3 } from '@/context/Web3Context';
import Container from '@/components/Atoms/Container';
import ConnectWalletCard from '@/components/Molecules/ConnectWalletCard';
import { TitleStyle } from './style';

type ConnectWalletTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectWalletTemplateProps) => {
  const { connect } = useWeb3();
  return (
    <Container {...props} size="small">
      <TitleStyle>Connect</TitleStyle>
      <ConnectWalletCard connect={connect} />
    </Container>
  );
};

export default ConnectWalletTemplate;
