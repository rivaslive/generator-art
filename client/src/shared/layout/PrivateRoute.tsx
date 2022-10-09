import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import { useAuth } from '@/context/Auth';
import ROUTES from '@/config/routes';
import { GalleryProvider } from '@/context/Gallery';

function PrivateRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [passAuth, setPassAuth] = useState(false);
  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      setPassAuth(true);
    }
    if (!isAuthenticated && !loading) {
      setPassAuth(false);
      router.replace(ROUTES.CONNECT_WALLET.path).then();
    }
  }, [router, loading, isAuthenticated]);

  if (passAuth) {
    return <GalleryProvider>{children}</GalleryProvider>;
  }

  return (
    <Spin
      size="large"
      style={{ textAlign: 'center', margin: '30px 0', display: 'block' }}
    />
  );
}

export default PrivateRoute;
