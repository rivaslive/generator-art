import Text from 'components/Atoms/Text';
import { ColorType } from 'styles/theme';
import { StyleTag } from './style';

type TagProps = BaseComponent & {
  text: string;
  bgColor?: ColorType;
  color?: ColorType;
  weight?: 'normal' | 'bold';
};

const Tag = ({
  text,
  weight = 'normal',
  color = 'primary',
  bgColor = 'primaryOpacity',
  ...props
}: TagProps) => {
  return (
    <StyleTag $bgColor={bgColor} {...props}>
      <Text fontWeight={weight} color={color} fontSize="12px" margin="inherit">
        {text}
      </Text>
    </StyleTag>
  );
};

export default Tag;
