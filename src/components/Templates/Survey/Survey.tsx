import Link from 'next/link';
import { useState } from 'react';
import { Result, Spin } from 'antd';
import { useRouter } from 'next/router';
import ROUTES from '@/routes';

import Button from '@/components/Atoms/Button';
import Title from '@/components/Atoms/Title';
import Container from '@/components/Atoms/Container';
import SurveyResult from '@/components/Organisms/SurveyResult';
import SurveyQuestion from '@/components/Organisms/SurveyQuestion';
import { useSurvey, STEP_SURVEY_ENUM } from '@/context/SurveyContext';
import QuizPresentation from '@/components/Organisms/QuizPresentation';

type SurveyTemplateProps = BaseComponent & {};

const SurveyTemplate = (props: SurveyTemplateProps) => {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const {
    survey,
    isLoading,
    step,
    startQuiz,
    onCompletedSurvey,
    answers,
    onSubmitSurvey,
  } = useSurvey();

  const onFinish = async () => {
    setError('');
    const { error: errors } = await onSubmitSurvey();
    if (errors) return setError(errors);
    router.push(ROUTES.DASHBOARD.path).then();
  };

  if (isLoading) return <Spin size="large" />;
  if (!survey)
    return (
      <Container size="small">
        <Result
          status={404}
          title={
            <Title align="center" fontSize="2rem">
              Not survey available, try after.
            </Title>
          }
          extra={
            <Link href={ROUTES.DASHBOARD.path} passHref>
              <a>
                <Button margin="0 auto" bgColor="infoOpacity" color="primary">
                  Go to dashboard
                </Button>
              </a>
            </Link>
          }
        />
      </Container>
    );

  return (
    <Container {...props} size="small" style={{ padding: '30px 10px' }}>
      {step === STEP_SURVEY_ENUM.INIT && (
        <QuizPresentation
          callback={startQuiz}
          image={survey.image}
          title={survey.title}
        />
      )}
      {step === STEP_SURVEY_ENUM.ANSWERING && (
        <SurveyQuestion
          questions={survey.questions}
          onCompleted={onCompletedSurvey}
        />
      )}
      {step === STEP_SURVEY_ENUM.END_ANSWERING && (
        <SurveyResult
          answers={answers}
          error={error}
          image={survey.image}
          title={survey.title}
          onSubmitSurvey={onFinish}
        />
      )}
    </Container>
  );
};

export default SurveyTemplate;
