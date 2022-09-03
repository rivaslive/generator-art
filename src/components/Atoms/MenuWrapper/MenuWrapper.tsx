import { MenuProps } from 'antd';
import { MenuStyle } from './style';

const MenuWrapper = (props: Omit<MenuProps, 'theme'>) => (
  <MenuStyle {...props} />
);

export default MenuWrapper;
