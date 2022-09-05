import { Spin } from 'antd';
import Container from '@/components/Atoms/Container';
import SurveyResult from '@/components/Organisms/SurveyResult';
import SurveyQuestion from '@/components/Organisms/SurveyQuestion';
import { useSurvey, STEP_SURVEY_ENUM } from '@/context/SurveyContext';
import QuizPresentation from '@/components/Organisms/QuizPresentation';
import Title from '@/components/Atoms/Title';
import Link from 'next/link';
import ROUTES from '@/routes';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
      <Title>
        Not survey available, try after.{' '}
        <Link href={ROUTES.DASHBOARD.path} passHref>
          <a>Go to dashboard</a>
        </Link>
      </Title>
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
