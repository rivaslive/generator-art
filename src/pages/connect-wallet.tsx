import Head from 'next/head';
import Layout from '@/components/Organisms/Layout';
import PublicRoute from '@/shared/layout/PublicRoute';
import ConnectWalletTemplate from '@/components/Templates/ConnectWallet';

function ConnectWalletPage() {
  return (
    <Layout>
      <Head>
        <title>Membrane test - Connect wallet</title>
      </Head>
      <PublicRoute>
        <ConnectWalletTemplate />
      </PublicRoute>
    </Layout>
  );
}

export default ConnectWalletPage;
