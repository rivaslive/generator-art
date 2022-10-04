import { useWeb3 } from '@/context/Web3Context';
import Container from '@/components/Atoms/Container';
import ConnectDriveCard from '@/components/Molecules/ConnectDriveCard';
import { TitleStyle } from './style';

type ConnectDriveTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectDriveTemplateProps) => {
  const { connect } = useWeb3();
  return (
    <Container {...props} size="small">
      <TitleStyle>Connect</TitleStyle>
      <ConnectDriveCard connect={connect} />
    </Container>
  );
};

export default ConnectWalletTemplate;
