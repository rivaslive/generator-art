import { ArrowRightOutlined } from '@ant-design/icons';

import Modal from '@/components/Atoms/Modal';
import { ButtonStyle, IconStyle, TextStyle, TitleStyle } from './style';


type ModalNotExtensionProps = BaseComponent & {
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
};

const ModalNotExtension = ({
  onOk,
  isOpen,
  onClose,
  ...restProps
}: ModalNotExtensionProps) => {
  return (
    <Modal
      isBlur
      title=""
      onOk={onOk}
      footer={null}
      visible={isOpen}
      onCancel={onClose}
      maskClosable={false}
      {...restProps}
    >
      <IconStyle src="/metamask.svg" width={70} height={70} />

      <TitleStyle>Metamask not found!</TitleStyle>
      <TextStyle>Install the Metamask or the one of your choice.</TextStyle>

      <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/">
        <ButtonStyle type="primary" onClick={onClose}>
          Install Metamask <ArrowRightOutlined />
        </ButtonStyle>
      </a>
    </Modal>
  );
};

export default ModalNotExtension;
