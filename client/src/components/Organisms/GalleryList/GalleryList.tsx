import { Empty, PageHeader } from 'antd';
import { useMemo } from 'react';

import Title from '@/components/Atoms/Title';
import { useGallery } from '@/context/Gallery';
import FileItem from '@/components/Molecules/FileItem';
import FolderItem from '@/components/Molecules/FolderItem';

import { WrapperStyle, ItemStyle, GridStyle, HeadStyle } from './style';
import Button from '@/components/Atoms/Button';
import { ArrowLeftOutlined } from '@ant-design/icons';

const GalleryList = () => {
  const { files, folders, openFolder, goBack } = useGallery();
  const isOpenFile = !!openFolder;

  const filesToRender = useMemo(() => {
    if (isOpenFile) return openFolder.files;
    return files;
  }, [files, isOpenFile, openFolder]);

  return (
    <WrapperStyle>
      {!isOpenFile && (
        <>
          <Title level={5} margin="0 0 10px">
            Folders
          </Title>
          <GridStyle gutter={20}>
            {!folders.length && (
              <ItemStyle xs={24}>
                <Empty />
              </ItemStyle>
            )}

            {folders.map((folder) => {
              return (
                <ItemStyle key={folder.id}>
                  <FolderItem {...folder} />
                </ItemStyle>
              );
            })}
          </GridStyle>
        </>
      )}

      {isOpenFile && (
        <PageHeader
          title="Go back"
          onBack={goBack}
          subTitle={openFolder?.name}
        />
      )}

      {!isOpenFile && (
        <Title level={5} margin="20px 0 10px">
          Files
        </Title>
      )}

      {!files.length && (
        <ItemStyle xs={24}>
          <Empty />
        </ItemStyle>
      )}

      <GridStyle gutter={20}>
        {filesToRender.map((file) => {
          return (
            <ItemStyle key={file.id}>
              <FileItem {...file} />
            </ItemStyle>
          );
        })}
      </GridStyle>
    </WrapperStyle>
  );
};

export default GalleryList;
