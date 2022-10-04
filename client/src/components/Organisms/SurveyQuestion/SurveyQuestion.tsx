import { useState } from 'react';

import Text from '@/components/Atoms/Text';
import Image from '@/components/Atoms/Image';
import useTime from '@/hooks/useTime';
import Button from '@/components/Atoms/Button';
import { Answer, Question } from '@/context/SurveyContext';
import GroupOption from '@/components/Atoms/GroupOption';
import { ContentFooterStyle, ContentStyle, WrapperStyle } from './style';

type QuizProps = BaseComponent & {
  questions: Question[];
  onCompleted: (answers: Answer[]) => void;
};

const SurveyQuestion = ({ questions, onCompleted, ...props }: QuizProps) => {
  const [answer, setAnswer] = useState<{
    answerId: number;
    answer: string;
  } | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const question = questions[indexQuestion];

  const [startTime, { time, stopTime, finishedTime }] = useTime(
    question.lifetimeSeconds,
    true,
  );

  const newAnswer = (answerId: number = 0, answer: string = '') => {
    setAnswers((prev) => {
      return [
        ...prev,
        {
          answer,
          answerId,
          image: question.image,
          question: question.text,
          questionId: question.id,
        },
      ];
    });
  };

  const onNextQuestion = () => {
    stopTime();
    newAnswer(answer?.answerId, answer?.answer);
    setAnswer(null);
    setIsAnswered(false);
    setIndexQuestion((prev) => {
      const newQuestionIndex = prev + 1;
      if (newQuestionIndex === questions.length) {
        return prev;
      }
      startTime();
      return newQuestionIndex;
    });
  };

  const onChangeOption = (value: number, label: string) => {
    setAnswer({
      answer: label,
      answerId: value,
    });
    setIsAnswered(true);
  };

  const onFinishQuiz = () => {
    answers.length < questions.length && onNextQuestion();
    setAnswers((prev) => {
      onCompleted(prev);
      return prev;
    });
  };

  return (
    <WrapperStyle {...props}>
      <ContentStyle key={`key-${indexQuestion}`}>
        <Image width="100%" height={300} src={question.image} />

        <Text margin="20px 0" align="center" fontSize="1.2rem">
          {question.text}
        </Text>

        <GroupOption readOnly={finishedTime} onChange={onChangeOption}>
          {question.options.map((option, index) => (
            <GroupOption.Option
              label={option.text}
              value={index + 1}
              key={option.text.trim()}
            />
          ))}
        </GroupOption>
      </ContentStyle>
      <ContentFooterStyle>
        <Text margin="8px 0" fontWeight={800}>
          Time available: {time}
        </Text>

        {indexQuestion !== questions.length - 1 && (
          <Button
            withMinWidth={false}
            onClick={onNextQuestion}
            disabled={!finishedTime && !isAnswered}
          >
            Next
          </Button>
        )}
        {indexQuestion === questions.length - 1 && (
          <Button
            withMinWidth={false}
            onClick={onFinishQuiz}
            disabled={!finishedTime && !isAnswered}
          >
            Finnish survey
          </Button>
        )}
      </ContentFooterStyle>
    </WrapperStyle>
  );
};

export default SurveyQuestion;
