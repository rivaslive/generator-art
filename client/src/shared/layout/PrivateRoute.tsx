import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import ROUTES from '@/config/routes';
import { useWeb3 } from '@/context/Web3Context';

function PrivateRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [passAuth, setPassAuth] = useState(false);
  const { isLoading, account, active } = useWeb3();

  useEffect(() => {
    if (active && !account && !isLoading) {
      setPassAuth(false);
      router?.push(ROUTES.CONNECT_DRIVE.path);
    } else {
      setPassAuth(true);
    }
  }, [account, router, isLoading, active]);

  if (!account || isLoading)
    return (
      <Spin
        size="large"
        style={{ textAlign: 'center', margin: '30px 0', display: 'block' }}
      />
    );

  if (passAuth) return <>{children}</>;

  return (
    <Spin
      size="large"
      style={{ textAlign: 'center', margin: '30px 0', display: 'block' }}
    />
  );
}

export default PrivateRoute;
