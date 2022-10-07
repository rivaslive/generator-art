import { PlusOutlined } from '@ant-design/icons';

import Button from '@/components/Atoms/Button';
import Container from '@/components/Atoms/Container';

import { TitleStyle, WrapperStyle } from './style';

type GalleryTemplateProps = BaseComponent & {};

const GalleryTemplate = ({ ...props }: GalleryTemplateProps) => {
  return (
    <Container {...props} size="small">
      <WrapperStyle>
        <TitleStyle>Gallery</TitleStyle>
        <Button icon={<PlusOutlined />}>
          <span className="only-desk">Upload File</span>
        </Button>
      </WrapperStyle>
    </Container>
  );
};

export default GalleryTemplate;
