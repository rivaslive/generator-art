import { memo, ReactNode } from 'react';
import Navbar from '@/components/Organisms/Navbar';

type LayoutProps = { children?: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default memo(Layout);
