import type { ModalProps as ModalPropsAntd } from 'antd';
import { ModalStyle } from './style';

type ModalProps = ModalPropsAntd & {
  isBlur?: boolean;
};

const Modal = ({ isBlur, ...modalAntdProps }: ModalProps) => {
  return (
    <ModalStyle
      {...modalAntdProps}
      maskStyle={
        isBlur
          ? {
              ...modalAntdProps?.maskStyle,
              backdropFilter: 'blur(10px)',
            }
          : modalAntdProps?.maskStyle
      }
    />
  );
};

export default Modal;
