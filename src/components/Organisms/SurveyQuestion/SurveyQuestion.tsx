import {useEffect, useState} from 'react';
import Image from '@/components/Atoms/Image';
import { Question } from '@/context/SurveyContext';
import Button from '@/components/Atoms/Button';
import WrapperWithBorder from '@/components/Atoms/WrapperWithBorder';
import {
  ContentFooterStyle,
  ContentStyle,
  WrapperStyle,
} from '@/components/Organisms/SurveyQuestion/style';
import Text from '@/components/Atoms/Text';
import useTime from '@/shared/hooks/useTime';

type QuizProps = BaseComponent & {
  questions: Question[];
  onCompleted: (answers: Answer[]) => void;
};

type Answer = {
  question: string;
  answer?: string;
};

const SurveyQuestion = ({ questions, onCompleted, ...props }: QuizProps) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const question = questions[indexQuestion];

  const [startTime, { time, stopTime }] = useTime(question.lifetimeSeconds);

  const onNextQuestion = () => {
    setIndexQuestion((prev) => {
      const newQuestionIndex = prev + 1;
      if (newQuestionIndex === questions.length) {
        return prev;
      }
      return newQuestionIndex;
    });
  };

  useEffect(() => {
    startTime();
  }, [startTime])

  return (
    <WrapperStyle {...props}>
      <ContentStyle>
        <Image width="100%" height={300} src={question.image} />
        {question.text}
        <Button onClick={onNextQuestion}>Next Question</Button>
        <Button margin="20px 0" onClick={() => onCompleted(answers)}>
          Complete
        </Button>
      </ContentStyle>
      <ContentFooterStyle>
        <Text>Time: {time}</Text>
      </ContentFooterStyle>
    </WrapperStyle>
  );
};

export default SurveyQuestion;
