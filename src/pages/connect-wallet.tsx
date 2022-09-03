import Layout from '@/components/Organisms/Layout';
import PublicRoute from '@/shared/layout/PublicRoute';
import ConnectWalletTemplate from '@/components/Templates/ConnectWallet';

function ConnectWalletPage() {
  return (
    <Layout>
      <PublicRoute>
        <ConnectWalletTemplate />
      </PublicRoute>
    </Layout>
  );
}

export default ConnectWalletPage;
