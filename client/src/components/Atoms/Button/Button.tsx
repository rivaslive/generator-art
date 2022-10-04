import { forwardRef, useMemo } from 'react';
import type { ButtonProps as ButtonPropsAntd } from 'antd';

import type { ColorType } from '@/styles/theme';
import { ButtonStyle } from './style';

type ButtonProps = ButtonPropsAntd & {
  color?: ColorType;
  bgColor?: ColorType;
  withMinWidth?: boolean;
  margin?: string | number;
};

type ResolveBgType = {
  bg: ColorType;
  border: ColorType;
  color: ColorType;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      bgColor,
      withMinWidth = true,
      size = 'middle',
      type = 'primary',
      margin = 'initial',
      ...restAntdProps
    },
    _ref,
  ) => {
    const formatMargin = useMemo<string>(() => {
      if (typeof margin === 'number') return `${margin}px`;
      return margin;
    }, [margin]);

    const resolveColors = useMemo<ResolveBgType>(() => {
      const defaultBg = bgColor ?? 'primary';
      if (type === 'default' || type === 'dashed')
        return {
          bg: 'transparent',
          color: color || defaultBg,
          border: defaultBg,
        };
      if (type === 'primary')
        return {
          bg: defaultBg,
          border: defaultBg,
          color: color || 'white',
        };

      return {
        bg: 'transparent',
        border: 'transparent',
        color: 'white',
      };
    }, [bgColor, type, color]);

    return (
      <ButtonStyle
        {...restAntdProps}
        type={type}
        ref={_ref}
        $margin={formatMargin}
        $bgColor={resolveColors.bg}
        $color={resolveColors.color}
        $withMinWidth={withMinWidth}
        $borderColor={resolveColors.border}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
