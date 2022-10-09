import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { FileItemType, GalleryContextProps } from './types';
import { FolderItemType, GalleryListProps } from './types';
import useQueryFetch from '@/hooks/useQueryFetch';
import { API_ROUTES } from '@/config/routes';

const initialValue: GalleryContextProps = {
  onDelete() {},
  onSelected() {},
  onOpenFolder() {},
  goBack() {},
  files: [],
  loading: true,
  openFolder: null,
  folders: [],
  selected: [],
};

const GalleryContext = createContext<GalleryContextProps>(initialValue);

export const GalleryProvider = ({ children }: { children?: ReactNode }) => {
  const [selected, setSelected] = useState([]);
  const [openFolder, setOpenFolder] = useState<FolderItemType | null>(null);

  const { data, loading } = useQueryFetch<GalleryListProps>(API_ROUTES.GALLERY);

  const onSelected = useCallback(() => {}, []);

  const onDelete = useCallback(() => {}, []);

  const onOpenFolder = useCallback(
    (name: string) => {
      const find = data?.folders?.find((folder) => folder.name === name);
      find && setOpenFolder(find);
    },
    [data?.folders],
  );

  const goBack = useCallback(() => {
    setOpenFolder(null);
  }, []);

  const output = useMemo(() => {
    return {
      folders: data?.folders ?? [],
      files: data?.files ?? [],
      selected,
      onOpenFolder,
      openFolder,
      onSelected,
      onDelete,
      loading,
      goBack,
    };
  }, [
    data,
    selected,
    loading,
    onSelected,
    onDelete,
    openFolder,
    onOpenFolder,
    goBack,
  ]);

  return (
    <GalleryContext.Provider value={output}>{children}</GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
