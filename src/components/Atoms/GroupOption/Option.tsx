import { OptionStyle } from './style';

export type OptionType = {
  value: number;
  label: string;
  isSelected?: boolean;
  onSelected?: (value: number, label: string) => void;
};

const Option = ({
  label,
  value,
  onSelected,
  isSelected = false,
}: OptionType) => {
  return (
    <OptionStyle
      $isSelected={isSelected}
      onClick={() => onSelected && onSelected(value, label)}
    >
      {label}
    </OptionStyle>
  );
};

export default Option;
