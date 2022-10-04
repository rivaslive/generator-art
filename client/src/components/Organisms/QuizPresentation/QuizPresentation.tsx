import { Alert } from 'antd';
import { ReactNode } from 'react';

import Image from '@/components/Atoms/Image';
import Title from '@/components/Atoms/Title';
import Button from '@/components/Atoms/Button';
import { QuizPresentationStyle } from './style';

type QuizProps = BaseComponent & {
  image: string;
  title: string;
  error?: string;
  btnText?: string;
  extra?: ReactNode;
  callback?: () => void;
};

const QuizPresentation = ({
  image,
  title,
  callback,
  error,
  extra,
  btnText = 'Start Survey',
  ...props
}: QuizProps) => {
  return (
    <QuizPresentationStyle {...props}>
      <Image
        src={image}
        width={200}
        height={200}
        style={{ margin: '0 auto', display: 'block' }}
      />
      <Title align="center">{title}</Title>
      {callback && (
        <Button onClick={callback} margin="20px auto 0">
          {btnText}
        </Button>
      )}
      {extra}
      {error && (
        <Alert style={{ marginTop: 20 }} type="error" message={error} />
      )}
    </QuizPresentationStyle>
  );
};

export default QuizPresentation;
