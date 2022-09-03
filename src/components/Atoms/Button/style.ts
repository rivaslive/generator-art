import { Button } from 'antd';
import styled from 'styled-components';
import type { ColorType } from '@/styles/theme';

type ButtonProps = {
  $color: ColorType;
  $margin: string;
  $withMinWidth: boolean;
  $bgColor: ColorType;
  $borderColor: ColorType;
};

export const ButtonStyle = styled(Button)<ButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $color, theme }) => theme.colors[$color]};
    margin: ${({ $margin }) => $margin};
    background-color: ${({ $bgColor, theme }) => `${theme.colors[$bgColor]}`};
    border-color: ${({ $borderColor, theme }) =>
      `${theme.colors[$borderColor]}`};
    ${({ $withMinWidth }) => $withMinWidth && `min-width: 12rem`};

    span {
      font-weight: 600;
    }
  }
`;
