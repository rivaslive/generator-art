import { FolderFilled } from '@ant-design/icons';

import Text from '@/components/Atoms/Text';
import { FolderStyle, FolderIconStyle } from './style';
import { useGallery } from '@/context/Gallery';

export type FolderItemProps = {
  id: string;
  name: string;
  files: any[];
};

const FolderItem = ({ name, files }: FolderItemProps) => {
  const { onOpenFolder } = useGallery();

  return (
    <FolderStyle onClick={() => onOpenFolder(name)}>
      <FolderIconStyle>
        <FolderFilled />
      </FolderIconStyle>

      <div>
        <Text fontSize="1rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize=".8rem">{files.length} asset</Text>
      </div>
    </FolderStyle>
  );
};

export default FolderItem;
