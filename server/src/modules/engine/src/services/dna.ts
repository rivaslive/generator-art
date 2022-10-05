import path from 'path';
import {
  FileType,
  FileTypeInVariant,
  LayerType,
  VariantType,
} from '@/engine/interfaces/types';
import { WEIGHT_IN_BASE_OF } from '@/engine/config';
import getRandomArbitrary from '@/engine/utils/getRandomArbitrary';

type SelectedFileProps = {
  name: string;
  variant?: string;
  absolutePath: string;
  weight?: number;
  description?: string;
  files: FileType[] | FileTypeInVariant[];
};

type SelectedVariantProps = {
  variants: VariantType[];
  nameDir: string;
  beforeVariantName: string;
};

export type OutSelectVariantType = {
  nameDir: string;
  name: string;
  variant: string;
  weight: number;
  description?: string;
  files: FileTypeInVariant[];
};

type IsValidProps = {
  file: FileType;
  nameDir: string;
  variant?: string;
};

export default class DnaService {
  private count: number = 1;

  private countVariant: number = 1;

  private dnaList: {
    id: string;
    name: string;
    indexes: number[];
    layer: LayerType;
  }[] = [];

  private dnaVariantList: {
    name: string;
    nameDir: string;
    indexes: number[];
  }[] = [];

  constructor() {
    this.isValidFile = this.isValidFile.bind(this);
    this.createDnaFile = this.createDnaFile.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    this.count = 1;
    this.dnaList = [];
    this.countVariant = 1;
    this.dnaVariantList = [];
  }

  nextCount() {
    if (this.count === WEIGHT_IN_BASE_OF) {
      console.log('******** Cleaning count ***********');
      this.clearList();
    } else {
      this.count += 1;
    }
  }

  isValidFile({ file, nameDir, variant }: IsValidProps): {
    index?: number;
    isNew: boolean;
    isValid: boolean;
  } {
    const dnaIndex = this.dnaList.findIndex((element) => {
      if (variant) {
        return (
          `${element.layer.nameDir}/${variant}/${element.name}` ===
          `${nameDir}/${variant}/${file.name}`
        );
      }

      return element.name === `${nameDir}/${file.name}`;
    });

    if (dnaIndex !== -1) {
      const dna = this.dnaList[dnaIndex];
      return {
        index: dnaIndex,
        isNew: false,
        isValid: dna.indexes.length < file.weight,
      };
    }
    // If exist file in list verify weight else exist in list is valid file
    return {
      index: undefined,
      isNew: true,
      isValid: true,
    };
  }

  createDnaFile({
    files,
    name,
    variant,
    absolutePath,
    description,
    weight,
  }: SelectedFileProps): LayerType | null {
    let repeat = true;
    let outReturn: LayerType | undefined;

    while (repeat) {
      const randomIndexDir = getRandomArbitrary(1, files.length);

      const file = files[randomIndexDir - 1] as FileType;
      const isValidFile = this.isValidFile({
        variant,
        nameDir: name,
        file: {
          ...file,
          weight: file?.weight || weight || WEIGHT_IN_BASE_OF,
        },
      });

      if (isValidFile.isValid) {
        outReturn = {
          ...file,
          variant,
          nameDir: name,
          opacity: 1,
          bypassDNA: false,
          path: absolutePath
            ? path.resolve(absolutePath, file.path)
            : file.path,
          blend: 'source-over',
          description: file?.description || description || '',
          weight: file?.weight || weight || WEIGHT_IN_BASE_OF,
        };

        if (isValidFile.isNew) {
          this.dnaList.push({
            indexes: [this.count],
            name: `${name}/${file.name}`,
            id: `${name}/${file.name}`,
            layer: outReturn,
          });
        } else {
          this.dnaList[isValidFile.index as number].indexes.push(this.count);
        }

        repeat = false;
      } else {
        console.log(`---- Generating other file ----`);
      }
    }
    return outReturn || null;
  }

  isValidVariant({
    name,
    nameDir,
    weight,
  }: {
    name: string;
    nameDir: string;
    weight: number;
  }): {
    index?: number;
    isNew: boolean;
    isValid: boolean;
  } {
    const dnaVariantIndex = this.dnaVariantList.findIndex(
      (variant) => variant.name === name && variant.nameDir === nameDir
    );

    if (dnaVariantIndex !== -1) {
      const dna = this.dnaVariantList[dnaVariantIndex];
      return {
        index: dnaVariantIndex,
        isNew: false,
        isValid: dna.indexes.length < weight,
      };
    }
    // If exist file in list verify weight else exist in list is valid file
    return {
      index: undefined,
      isNew: true,
      isValid: true,
    };
  }

  selectVariant({
    variants,
    nameDir,
    beforeVariantName,
  }: SelectedVariantProps): OutSelectVariantType | null {
    let repeat = true;
    let outReturn: OutSelectVariantType | undefined;

    while (repeat) {
      let randomIndexDir: number;
      if (beforeVariantName) {
        const findIndex = variants.findIndex(
          (item) => item.name === beforeVariantName
        );
        if (findIndex !== -1) {
          randomIndexDir = findIndex + 1;
        } else {
          randomIndexDir = getRandomArbitrary(1, variants.length);
        }
      } else {
        randomIndexDir = getRandomArbitrary(1, variants.length);
      }

      const getVariant = variants[randomIndexDir - 1] as VariantType;
      const isValidVariant = this.isValidVariant({
        nameDir,
        name: getVariant.name,
        weight: getVariant.weight,
      });

      if (isValidVariant.isValid) {
        outReturn = {
          nameDir,
          name: getVariant.name,
          variant: getVariant.name,
          weight: getVariant.weight,
          description: getVariant.description,
          files: getVariant.files,
        };

        if (isValidVariant.isNew) {
          this.dnaVariantList.push({
            nameDir,
            indexes: [this.count],
            name: getVariant.name,
          });
        } else {
          // const indexDnaList =
          //   this.dnaVariantList[isValidVariant.index as number];
          // @ts-ignore
          this.dnaVariantList[isValidVariant.index as number].indexes.push(
            this.count
          );
        }

        repeat = false;
      } else {
        console.log(`---- Generating other variant ----`);
      }
    }
    return outReturn || null;
  }
}
