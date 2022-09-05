import { Tabs } from 'antd';
import styled from 'styled-components';

import { ColorType } from '@/styles/theme';
import Text from '@/components/Atoms/Text';
import Image from '@/components/Atoms/Image';
import Button from '@/components/Atoms/Button';
import MenuWrapper from '@/components/Atoms/MenuWrapper';

export const ImageStyle = styled(Image)`
  display: grid;
  place-items: center;
  margin-right: 5px;
`;

export const ButtonStyle = styled(Button)`
  &.ant-btn {
    text-transform: capitalize;
    font-size: 12px;
    padding: 0 10px;
    height: 35px;
  }
`;

export const DotStyle = styled.span<{ $color: ColorType; $check: boolean }>`
  position: relative;
  width: 12px;
  height: 12px;
  margin-left: 15px;
  border-radius: 12px;
  background: ${({ $color, theme }) => theme.colors[$color]};

  &:before {
    content: '✔';
    font-size: 16px;
    position: absolute;
    left: -15px;
    top: -3px;
    display: ${({ $check }) => ($check ? 'block' : 'none')};
  }
`;

export const AccountWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button.ant-btn {
    padding: 7px 3px;
    height: auto;

    .anticon {
      font-size: 1rem;
    }
  }
`;

export const MenuWrapperStyle = styled(MenuWrapper)`
  li.ant-dropdown-menu-item {
    padding: 10px;
  }
`;

export const AccountImageStyle = styled(Image)`
  border-radius: 50%;
  padding: 3px;
  margin-right: 7px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  img {
    border-radius: 50%;
  }
`;

export const AccountTextStyle = styled(Text)<{ $width?: number }>`
  white-space: nowrap;
  width: ${({ $width = 150 }) => $width}px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TabStyle = styled(Tabs)`
  margin-top: 10px;
`;
