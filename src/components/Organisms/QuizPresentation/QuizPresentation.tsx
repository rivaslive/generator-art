import Image from '@/components/Atoms/Image';
import Title from '@/components/Atoms/Title';
import Button from '@/components/Atoms/Button';
import { QuizPresentationStyle } from './style';

type QuizProps = BaseComponent & {
  image: string;
  title: string;
  onStart: () => void;
};

const QuizPresentation = ({ image, title, onStart, ...props }: QuizProps) => {
  return (
    <QuizPresentationStyle {...props}>
      <Image
        src={image}
        width={200}
        height={200}
        style={{ margin: '0 auto', display: 'block' }}
      />
      <Title align="center">{title}</Title>
      <Button onClick={onStart} margin="20px auto">
        Start Survey
      </Button>
    </QuizPresentationStyle>
  );
};

export default QuizPresentation;
