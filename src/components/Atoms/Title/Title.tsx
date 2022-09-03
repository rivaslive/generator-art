import { useMemo } from 'react';
import type { TitleProps as TitlePropsAntd } from 'antd/lib/typography/Title';
import type { ColorType } from '@/styles/theme';
import { TitleStyle } from './style';

type TitleProps = TitlePropsAntd & {
  color?: ColorType;
  margin?: string | number;
  fontSize?: string | number;
  lineHeight?: string | number;
  fontWeight?: FontWeightType;
};

const Title = ({
  fontSize,
  lineHeight,
  fontWeight = 800,
  color = 'text',
  margin = 'initial',
  ...restAntdProps
}: TitleProps) => {
  const formatMargin = useMemo<string>(() => {
    if (typeof margin === 'number') return `${margin}px`;
    return margin;
  }, [margin]);

  const formatFontSize = useMemo<string | undefined>(() => {
    if (typeof fontSize === 'number') return `${fontSize}px`;
    return fontSize;
  }, [fontSize]);

  const formatLineHeight = useMemo<string | undefined>(() => {
    if (typeof lineHeight === 'number') return `${lineHeight}px`;
    if (lineHeight) return lineHeight;
    if (typeof fontSize === 'number') return `${fontSize + 5}px`;
    return lineHeight;
  }, [lineHeight, fontSize]);

  return (
    <TitleStyle
      {...restAntdProps}
      $color={color}
      $margin={formatMargin}
      $fontWeight={fontWeight}
      $fontSize={formatFontSize}
      $lineHeight={formatLineHeight}
    />
  );
};

export default Title;
