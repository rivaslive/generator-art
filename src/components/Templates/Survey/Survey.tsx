import Container from '@/components/Atoms/Container';
import { useSurvey, STEP_SURVEY_ENUM } from '@/context/SurveyContext';
import QuizPresentation from '@/components/Organisms/QuizPresentation';
import SurveyQuestion from '@/components/Organisms/SurveyQuestion';

type SurveyTemplateProps = BaseComponent & {};

const SurveyTemplate = (props: SurveyTemplateProps) => {
  const { title, image, questions, step, startQuiz } = useSurvey();
  return (
    <Container {...props} size="small" style={{ padding: '30px 10px' }}>
      {step === STEP_SURVEY_ENUM.INIT && (
        <QuizPresentation onStart={startQuiz} image={image} title={title} />
      )}
      {step === STEP_SURVEY_ENUM.ANSWERING && (
        <SurveyQuestion questions={questions} onCompleted={console.log} />
      )}
    </Container>
  );
};

export default SurveyTemplate;
