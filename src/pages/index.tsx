import Layout from '@/components/Organisms/Layout';
import PrivateRoute from '@/shared/layout/PrivateRoute';
import DashboardTemplate from '@/components/Templates/Dashboard';

function DashboardPage() {
  return (
    <Layout>
      <PrivateRoute>
        <DashboardTemplate />
      </PrivateRoute>
    </Layout>
  );
}

export default DashboardPage;
