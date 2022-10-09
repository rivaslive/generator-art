import { PlusOutlined } from '@ant-design/icons';

import Button from '@/components/Atoms/Button';
import Container from '@/components/Atoms/Container';
import GalleryList from '@/components/Organisms/GalleryList';

import { TitleStyle, WrapperStyle, ActionStyle } from './style';

type GalleryTemplateProps = BaseComponent & {};

const files = [
  {
    id: '100',
    filename: 'Asset.png',
    path: 'https://img.freepik.com/vector-premium/vector-logo-sensei_8124-9.jpg?w=2000',
    size: 800,
    mimetype: 'PNG'
  },
  {
    id: '200',
    filename: 'Asset2.png',
    path: 'https://media.istockphoto.com/vectors/sensei-logo-old-master-kung-fu-vector-id1170107846',
    size: 600,
    mimetype: 'PNG'
  },
];

const gallery = {
  files,
  folders: [
    { name: 'Folder 1', id: '2000', files: [] },
    { name: 'Folder 2', id: '3000', files },
  ],
};

const GalleryTemplate = ({ ...props }: GalleryTemplateProps) => {
  return (
    <Container {...props} size="small">
      <WrapperStyle>
        <TitleStyle>Media Library</TitleStyle>

        <ActionStyle>
          <Button icon={<PlusOutlined />} bgColor="borderColor">
            <span className="only-desk">Add new folder</span>
          </Button>
          <Button icon={<PlusOutlined />}>
            <span className="only-desk">Add new image</span>
          </Button>
        </ActionStyle>
      </WrapperStyle>

      <GalleryList />
    </Container>
  );
};

export default GalleryTemplate;
