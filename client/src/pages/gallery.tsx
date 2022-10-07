import Head from 'next/head';
import Layout from '@/components/Organisms/Layout';
import PrivateRoute from '@/shared/layout/PrivateRoute';
import GalleryTemplate from '@/components/Templates/Gallery';

function DashboardPage() {
  return (
    <Layout>
      <Head>
        <title>Generator arts - Gallery</title>
      </Head>
      <PrivateRoute>
        <GalleryTemplate />
      </PrivateRoute>
    </Layout>
  );
}

export default DashboardPage;
