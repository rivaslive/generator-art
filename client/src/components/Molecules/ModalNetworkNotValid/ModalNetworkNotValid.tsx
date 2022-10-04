import { ArrowRightOutlined } from '@ant-design/icons';
import Modal from '@/components/Atoms/Modal';
import { ButtonStyle, IconStyle, TextStyle, TitleStyle } from './style';

type ModalNetworkNotValidProps = BaseComponent & {
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
};

const ModalNetworkNotValid = ({
  onOk,
  isOpen,
  onClose,
  ...restProps
}: ModalNetworkNotValidProps) => {
  return (
    <Modal
      isBlur
      title=""
      onOk={onOk}
      footer={null}
      visible={isOpen}
      onCancel={onClose}
      {...restProps}
    >
      <TitleStyle>Waning!</TitleStyle>

      <IconStyle />
      <TextStyle>
        This QUIZ only works with the Ropsten network. Switch from the Metamask
        extension or with the button at the top of the page.
      </TextStyle>

      <ButtonStyle type="primary" onClick={onClose}>
        Continue <ArrowRightOutlined />
      </ButtonStyle>
    </Modal>
  );
};

export default ModalNetworkNotValid;
