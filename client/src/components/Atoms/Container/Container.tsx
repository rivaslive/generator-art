import { ReactNode } from 'react';
import { SizeType } from '@/components/Atoms/Container/Config';

// styles
import { StyleContainer } from './style';

export interface ContainerProps extends BaseComponent {
  children?: ReactNode;
  size?: SizeType;
}

function Container({
  children,
  id,
  style,
  className,
  size = 'middle',
  ...rest
}: ContainerProps) {
  return (
    <StyleContainer
      id={id}
      $size={size}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyleContainer>
  );
}

export default Container;
