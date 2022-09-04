import Link from 'next/link';
import { useWeb3 } from '@/context/Web3Context';
import { useTokenBalance } from '@usedapp/core';
import { PlusOutlined } from '@ant-design/icons';

import Container from '@/components/Atoms/Container';
import config from '@/shared/config';
import Button from '@/components/Atoms/Button';
import { formatEth } from '@/shared/utils/format';

import BalanceToken from '@/components/Molecules/BalanceToken';
import { TitleStyle, WrapperStyle } from './style';
import ROUTES from '@/routes';

const { contractToken } = config;

type DashboardTemplateProps = BaseComponent & {};

const DashboardTemplate = (props: DashboardTemplateProps) => {
  const { account } = useWeb3();
  const balance = useTokenBalance(contractToken, account);

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
      {balance && <BalanceToken balance={formatEth(balance)} />}
    </Container>
  );
};

export default DashboardTemplate;
