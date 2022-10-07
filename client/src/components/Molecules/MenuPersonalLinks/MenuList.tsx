import {
  CodeOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

import ROUTES from '@/config/routes';
import MenuWrapper from '@/components/Atoms/MenuWrapper';
import MenuItem from './MenuItem';

type MenuListProps = { isActive: boolean, onLogout: any };

const menuList = ({ isActive, onLogout }: MenuListProps) => {
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
    // @ts-ignore
    items.push({
      key: 'disconnect',
      label: <WalletDisconnectButton onClick={onLogout} />,
    });
  }

  return <MenuWrapper items={items} />;
};

export default menuList;
