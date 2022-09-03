import styled from 'styled-components';
import type { ColorType } from '@/styles/theme';

type TextProps = {
  $color: ColorType;
  $margin: string;
  $fontSize: string;
  $lineHeight?: string;
  $fontWeight?: FontWeightType;
};

export const TextStyle = styled.p<TextProps>`
  color: ${({ $color, theme }) => theme.colors[$color]};
  margin: ${({ $margin }) => $margin};
  font-size: ${({ $fontSize }) => $fontSize};
  ${({ $lineHeight }) => $lineHeight && `line-height: ${$lineHeight}`};
  ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight}`};
`;
