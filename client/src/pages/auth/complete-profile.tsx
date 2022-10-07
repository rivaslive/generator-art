import Head from 'next/head';
import Layout from '@/components/Organisms/Layout';
import PublicRoute from '@/shared/layout/PublicRoute';
import CompleteProfileTemplate from '@/components/Templates/CompleteProfile';

function CompleteProfilePage() {
  return (
    <Layout>
      <Head>
        <title>Generator arts - Complete profile</title>
      </Head>
      <PublicRoute>
        <CompleteProfileTemplate />
      </PublicRoute>
    </Layout>
  );
}

export default CompleteProfilePage;
