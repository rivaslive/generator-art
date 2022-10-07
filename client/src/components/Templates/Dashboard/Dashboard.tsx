import Link from 'next/link';
import { PlusOutlined } from '@ant-design/icons';

import ROUTES from '@/config/routes';
import Button from '@/components/Atoms/Button';
import Container from '@/components/Atoms/Container';

import { TitleStyle, WrapperStyle } from './style';

type DashboardTemplateProps = BaseComponent & {};

const DashboardTemplate = ({ ...props }: DashboardTemplateProps) => {
  return (
    <Container {...props} size="small">
      <WrapperStyle>
        <TitleStyle>Dashboard</TitleStyle>
        <Link href={ROUTES.NEW_SURVEY.path}>
          <Button icon={<PlusOutlined />}>
            <span className="only-desk">New collection</span>
          </Button>
        </Link>
      </WrapperStyle>
    </Container>
  );
};

export default DashboardTemplate;
