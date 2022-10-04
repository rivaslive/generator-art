import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import ROUTES from '@/config/routes';
import { useWeb3 } from '@/context/Web3Context';

function PublicRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [notAuth, setNotAuth] = useState(false);
  const { isLoading, account } = useWeb3();

  useEffect(() => {
    if (!!account && !isLoading) {
      setNotAuth(false);
      router?.push(ROUTES.DASHBOARD.path);
    } else {
      setNotAuth(true);
    }
  }, [router, isLoading, account]);

  if (!!account || isLoading)
    return (
      <Spin
        size="large"
        style={{ textAlign: 'center', margin: '30px 0', display: 'block' }}
      />
    );

  if (notAuth) return <>{children}</>;

  return (
    <Spin
      size="large"
      style={{ textAlign: 'center', margin: '30px 0', display: 'block' }}
    />
  );
}

export default PublicRoute;
