import Container from '@/components/Atoms/Container';
import CompleteProfile from '@/components/Organisms/CompleteProfile';

import { TitleStyle } from './style';

type ConnectDriveTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectDriveTemplateProps) => {
  return (
    <Container {...props} size="small">
      <TitleStyle>Complete Your Profile</TitleStyle>
      <CompleteProfile />
    </Container>
  );
};

export default ConnectWalletTemplate;
