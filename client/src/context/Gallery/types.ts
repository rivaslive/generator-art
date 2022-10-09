export type FileItemType = {
  id: string;
  filename: string;
  url: string;
  mimetype: string;
  size: number;
};

export type FolderItemType = {
  id: string;
  name: string;
  files: FileItemType[];
};

export type GalleryListProps = {
  files: FileItemType[];
  folders: FolderItemType[];
};

export type GalleryContextProps = GalleryListProps & {
  onDelete(): void;
  onSelected(): void;
  goBack(): void;
  onOpenFolder(id: string): void;
  loading: boolean;
  openFolder: FolderItemType | null;
  selected: {
    id: string;
    isFolder: boolean;
  }[];
};
