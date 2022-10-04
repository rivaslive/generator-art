import styled from 'styled-components';
import type { ColorType } from '@/styles/theme';

type TextProps = {
  $color: ColorType;
  $margin: string;
  $fontSize: string;
  $align: AlignType;
  $lineHeight?: string;
  $fontWeight?: FontWeightType;
};

export const TextStyle = styled.p<TextProps>`
  color: ${({ $color, theme }) => theme.colors[$color]};
  margin: ${({ $margin }) => $margin};
  font-size: ${({ $fontSize }) => $fontSize};
  text-align: ${({ $align }) => $align};
  ${({ $lineHeight }) => $lineHeight && `line-height: ${$lineHeight}`};
  ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight}`};
`;
