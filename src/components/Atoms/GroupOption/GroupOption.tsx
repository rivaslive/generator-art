import {
  Children,
  cloneElement,
  ReactElement,
  useState,
} from 'react';
import Option, { OptionType } from './Option';
import { GroupStyle } from './style';

type GroupOptionProps = BaseComponent & {
  onChange?: (value: number, label: string) => void;
  readOnly?: boolean;
  canChangeSelection?: boolean;
  children: ReactElement<OptionType> | Array<ReactElement<OptionType>>;
};

const GroupOption = ({
  onChange,
  readOnly,
  children: _children,
  canChangeSelection = true,
  ...props
}: GroupOptionProps) => {
  const [selected, setSelected] = useState<string | number>('');
  const children = Children.count(_children) === 1 ? [_children] : _children;

  const onSelected = (value: number, label: string) => {
    if (readOnly) return;
    if (!canChangeSelection && selected) return;
    setSelected(value);
    onChange && onChange(value, label);
    return;
  };

  return (
    <GroupStyle {...props}>
      {Children.map(children, (child) => {
        return cloneElement<OptionType>(child as JSX.Element, {
          onSelected,
          // @ts-ignore
          isSelected: selected === child?.props?.value,
        });
      })}
    </GroupStyle>
  );
};

GroupOption.Option = Option;

export default GroupOption;
