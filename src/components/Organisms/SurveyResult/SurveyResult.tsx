import Link from 'next/link';
import { Avatar, List } from 'antd';

import ROUTES from '@/config/routes';
import Title from '@/components/Atoms/Title';
import Button from '@/components/Atoms/Button';
import type { Answer } from '@/context/SurveyContext';
import QuizPresentation from '@/components/Organisms/QuizPresentation';

type SurveyResultProps = {
  answers: Answer[];
  title: string;
  image: string;
  error?: string;
  onSubmitSurvey: () => void;
};

const SurveyResult = ({
  answers,
  image,
  title,
  onSubmitSurvey,
  error,
}: SurveyResultProps) => {
  return (
    <div>
      <QuizPresentation
        image={image}
        title={title}
        btnText="Submit"
        error={error}
        callback={onSubmitSurvey}
        style={{ marginBottom: 30 }}
        extra={
          <Link href={ROUTES.DASHBOARD.path} passHref>
            <a>
              <Button margin="20px auto 0" bgColor="errorOpacity" color="error">
                Cancel
              </Button>
            </a>
          </Link>
        }
      />

      <Title fontSize="1.5rem" margin="0 0 30px">
        Resume answers:
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={answers}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.question}
              description={item.answer}
              avatar={<Avatar size="large" src={item.image} />}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SurveyResult;
