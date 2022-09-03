import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import ROUTES from '@/routes';
import { useWeb3 } from '@/context/Web3Context';

function PrivateRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [passAuth, setPassAuth] = useState(false);
  const { active, isLoading, account } = useWeb3();

  useEffect(() => {
    if (!active && !account && !isLoading) {
      setPassAuth(false);
      router?.push(ROUTES.CONNECT_WALLET.path);
    } else {
      setPassAuth(true);
    }
  }, [account, active, router, isLoading]);

  if ((!active && !account) || isLoading)
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
