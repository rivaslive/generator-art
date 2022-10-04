import { ReactNode } from 'react';
import { WrapperStyle } from './style';

type WrapperWithBorderProps = BaseComponent & {
  children: ReactNode;
};

const WrapperWithBorder = ({ children, ...props }: WrapperWithBorderProps) => {
  return <WrapperStyle {...props}>{children}</WrapperStyle>;
};

export default WrapperWithBorder;
