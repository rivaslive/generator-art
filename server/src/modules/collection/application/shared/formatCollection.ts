import path from 'path';
import { publicPath } from '@/config';
import { Layer } from '@/modules/collection/models';
import {
  FileTypeInVariant,
  FileType,
  Layer as LayerOutput,
} from '@/modules/engine/src/interfaces/types';

const resolvePath = (_path?: string) => {
  if (!_path) return '';
  return path.resolve(publicPath, _path);
};

type OutputFile = {
  name: string;
  weight?: number;
  path: string;
  description?: string;
  isNone?: boolean;
};
const formatFile = <T = any>(file: OutputFile): T =>
  ({
    name: file?.name,
    weight: file?.weight,
    // @ts-ignore
    path: resolvePath(file?.location?.fileName),
    description: file?.description,
    isNone: file.isNone,
  } as T);

export default function formatCollection(collection: Layer[]) {
  const output: LayerOutput[] = [];

  collection.forEach((item) => {
    output.push({
      name: item.name,
      description: item.description,
      files: item.files.map((file) => formatFile<FileType>(file as OutputFile)),
      variants:
        item?.variants?.map((variant) => {
          return {
            name: variant.name,
            description: variant.description,
            weight: variant.weight,
            files: variant.files.map((file) =>
              formatFile<FileTypeInVariant>(file as unknown as OutputFile)
            ),
          };
        }) ?? [],
    });
  });

  return output;
}
