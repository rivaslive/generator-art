import { Button } from 'antd';
import styled from 'styled-components';
import type { ColorType } from '@/styles/theme';

type ButtonProps = {
  $color: ColorType;
  $margin: string;
  disabled: boolean;
  $withMinWidth: boolean;
  $bgColor: ColorType;
  $borderColor: ColorType;
};

export const ButtonStyle = styled(Button)<ButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $color, theme, disabled }) =>
      theme.colors[disabled ? 'disabledText' : $color]};
    margin: ${({ $margin }) => $margin};
    background-color: ${({ $bgColor, disabled, theme }) =>
      `${theme.colors[disabled ? 'disabled' : $bgColor]}`};
    border-color: ${({ $borderColor, disabled, theme }) =>
      `${theme.colors[disabled ? 'disabled' : $borderColor]}`};
    ${({ $withMinWidth }) => $withMinWidth && `min-width: 12rem`};

    span {
      font-weight: 600;
    }
  }
`;
