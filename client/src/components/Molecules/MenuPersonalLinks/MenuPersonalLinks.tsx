import { Dropdown, DropdownProps } from 'antd';
import { DashOutlined } from '@ant-design/icons';

import { useAuth } from '@/context/Auth';
import Button from '@/components/Atoms/Button';
import menuList from './MenuList';

type MenuPersonalLinksProps = BaseComponent &
  Omit<DropdownProps, 'overlay' | 'trigger' | 'arrow'>;

const MenuPersonalLinks = (props: MenuPersonalLinksProps) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Dropdown
      {...props}
      arrow
      trigger={['click']}
      overlay={menuList({ isActive: isAuthenticated, onLogout: logout })}
    >
      <Button
        margin="0 0 0 10px"
        withMinWidth={false}
        bgColor="borderColor"
        icon={<DashOutlined />}
        style={{ height: 35 }}
      />
    </Dropdown>
  );
};

export default MenuPersonalLinks;
