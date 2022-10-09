import Text from '@/components/Atoms/Text';
import {FileStyle, FilePreviewStyle, FileContentStyle} from './style';

type FileItemProps = {
  id: string;
  filename: string;
  url: string;
  size: number;
  mimetype: string;
};

const FileItem = ({ filename, url, size, mimetype }: FileItemProps) => {
  return (
    <FileStyle>
      <FilePreviewStyle>
        <img
          src={url}
          width="100%"
          height="100%"
          alt={filename}
          style={{
            objectFit: 'cover',
          }}
        />
      </FilePreviewStyle>

      <FileContentStyle>
        <Text fontSize="1rem" fontWeight="bold">
          {filename}
        </Text>
        <Text fontSize=".8rem">
          {mimetype} - {size}KB
        </Text>
      </FileContentStyle>
    </FileStyle>
  );
};

export default FileItem;
