import Link from 'next/link';

import ROUTES from '@/routes';
import Title from '@/components/Atoms/Title';
import Button from '@/components/Atoms/Button';

function NotFound() {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title fontWeight={800}>404 NOT FOUND</Title>
        <Link href={ROUTES.DASHBOARD.path} passHref>
          <a>
            <Button margin="25px 0">Go to safe page</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
