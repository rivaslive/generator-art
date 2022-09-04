import Layout from '@/components/Organisms/Layout';
import PrivateRoute from '@/shared/layout/PrivateRoute';
import SurveyTemplate from '@/components/Templates/Survey';
import { SurveyProvider } from '@/context/SurveyContext';

function SurveyPage() {
  return (
    <Layout>
      <PrivateRoute>
        <SurveyProvider>
          <SurveyTemplate />
        </SurveyProvider>
      </PrivateRoute>
    </Layout>
  );
}

export default SurveyPage;
