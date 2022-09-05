import {
  CodeOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import ROUTES from '@/config/routes';
import MenuItem from './MenuItem';
import MenuWrapper from '@/components/Atoms/MenuWrapper';
import Text from '@/components/Atoms/Text';

type MenuListProps = { disconnect: () => void; isActive: boolean };

const menuList = ({ disconnect, isActive }: MenuListProps) => {
  const items = [
    {
      key: 'git',
      icon: <GithubOutlined />,
      label: <MenuItem href={ROUTES.GITHUB.path} label="Github" />,
    },
    {
      key: 'portfolio',
      icon: <GlobalOutlined />,
      label: <MenuItem href={ROUTES.PORTFOLIO.path} label="Portfolio" />,
    },
    {
      key: 'linkedin',
      icon: <LinkedinOutlined />,
      label: <MenuItem href={ROUTES.LINKEDIN.path} label="Linkedin" />,
    },
    {
      key: 'repo',
      icon: <CodeOutlined />,
      label: <MenuItem href={ROUTES.REPOSITORY.path} label="Code in Github" />,
    },
  ];

  if (isActive) {
    // @ts-ignore
    items.push({ type: 'divider' });
    items.push({
      key: 'disconnect',
      icon: <LogoutOutlined />,
      label: (
        <Text onClick={disconnect} fontWeight={600}>
          Disconnect
        </Text>
      ),
    });
  }

  return <MenuWrapper items={items} />;
};

export default menuList;
