import Link from 'next/link';
import { useWeb3 } from '@/context/Web3Context';
import { PlusOutlined } from '@ant-design/icons';

import ROUTES from '@/config/routes';
import Button from '@/components/Atoms/Button';
import { formatEth } from '@/shared/utils/format';
import Container from '@/components/Atoms/Container';
import BalanceToken from '@/components/Molecules/BalanceToken';

import { TitleStyle, WrapperStyle } from './style';

type DashboardTemplateProps = BaseComponent & {};

const DashboardTemplate = ({ ...props }: DashboardTemplateProps) => {
  const { network, balanceAccount, balance } = useWeb3();

  return (
    <Container {...props} size="small">
      <WrapperStyle>
        <TitleStyle>Dashboard</TitleStyle>
        <Link href={ROUTES.NEW_SURVEY.path}>
          <Button icon={<PlusOutlined />}>
            <span className="only-desk">New Survey</span>
          </Button>
        </Link>
      </WrapperStyle>
      {balance ? (
        <BalanceToken
          networkName={network?.name}
          balance={formatEth(balance)}
          balanceAccount={
            balanceAccount ? formatEth(balanceAccount, 4) : undefined
          }
        />
      ) : null}
    </Container>
  );
};

export default DashboardTemplate;
