import { ReactNode, useMemo } from 'react';
import type { ColorType } from '@/styles/theme';
// import type { TextProps as TextPropsAntd } from 'antd/lib/typography/Text';
import { TextStyle } from './style';

type TextProps = BaseComponent & {
  children?: ReactNode;
  color?: ColorType;
  margin?: string | number;
  fontSize?: string | number;
  align?: AlignType;
  lineHeight?: string | number;
  fontWeight?: FontWeightType;
  onClick?: any;
};

const Text = ({
  fontSize,
  lineHeight,
  fontWeight,
  children,
  align = 'left',
  color = 'text',
  margin = 'initial',
  ...restAntdProps
}: TextProps) => {
  const formatMargin = useMemo<string>(() => {
    if (typeof margin === 'number') return `${margin}px`;
    return margin;
  }, [margin]);

  const formatFontSize = useMemo<string>(() => {
    if (typeof fontSize === 'number') return `${fontSize}px`;
    return fontSize || '1rem';
  }, [fontSize]);

  const formatLineHeight = useMemo<string | undefined>(() => {
    if (typeof lineHeight === 'number') return `${lineHeight}px`;
    if (lineHeight) return lineHeight;
    if (typeof fontSize === 'number') return `${fontSize + 5}px`;
    return lineHeight || '1.23';
  }, [lineHeight, fontSize]);

  return (
    <TextStyle
      {...restAntdProps}
      $color={color}
      $align={align}
      $margin={formatMargin}
      $fontWeight={fontWeight}
      $fontSize={formatFontSize}
      $lineHeight={formatLineHeight}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
