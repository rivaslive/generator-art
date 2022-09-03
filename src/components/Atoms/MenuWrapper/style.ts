import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuStyle = styled(Menu)`
  padding: 10px 0;

  .ant-dropdown-menu-item {
    min-width: 200px;
    padding: 10px 30px;

    .anticon {
      font-size: 1.2rem;
    }
  }
`;
