import { Typography } from 'antd';
import styled from 'styled-components';
import type { ColorType } from '@/styles/theme';

type TitleProps = {
  $color: ColorType;
  $margin: string;
  $fontSize?: string;
  $lineHeight?: string;
  $align?: AlignType;
  $fontWeight?: FontWeightType;
};

export const TitleStyle = styled(Typography.Title)<TitleProps>`
  &.ant-typography {
    color: ${({ $color, theme }) => theme.colors[$color]};
    margin: ${({ $margin }) => $margin};
    text-align: ${({ $align }) => $align};
    ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize}`};
    ${({ $lineHeight }) => $lineHeight && `line-height: ${$lineHeight}`};
    ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight}`};
  }
`;
