import fs from 'fs';
import path from 'path';

import log from '@/engine/services/log';
import { layersDir } from '@/engine/config';
import { Store } from '@/engine/core/store';
import Image, { ImageType } from '@/engine/services/image';
import { FileType, LayerType } from '@/engine/interfaces/types';
import { LayoutSettings } from '@/engine/core/LayoutSettings';
import DNAService, { OutSelectVariantType } from '@/engine/services/dna';

const dnaInstance = new DNAService();

const writeMetaData = (data: string, buildDir: string) => {
  fs.writeFileSync(path.resolve(buildDir, 'json', '_metadata.json'), data);
};

type SelectedFileProps = {
  name: string;
  variant?: string;
  weight?: number;
  absolutePath: string;
  description?: string;
  files: FileType[];
};

export class CreateArts {
  public store: Store;

  constructor(public layoutsSettings: LayoutSettings) {
    this.store = new Store(layoutsSettings);
    this.store.init();

    this.preConfigure = this.preConfigure.bind(this);
    this.generate = this.generate.bind(this);
  }

  selectLayerFile({
    files,
    name,
    weight,
    absolutePath,
    variant = '',
    description = '',
  }: SelectedFileProps): LayerType | null {
    return dnaInstance.createDnaFile({
      files,
      name,
      weight,
      absolutePath,
      variant,
      description,
    });
  }

  preConfigure(): LayerType[] {
    const { layers, withAbsolutePath } = this.layoutsSettings;
    const layersInOrder = layers?.layersInOrder || [];
    const layersOutput: LayerType[] = [];
    let beforeVariantName: string = '';

    layersInOrder.map((layer: any) => {
      if (layer.files.length) {
        const file = this.selectLayerFile({
          files: layer.files,
          name: layer.name,
          absolutePath: withAbsolutePath ? '' : layersDir,
          description: layer.description,
        });
        if (!file) {
          throw new Error('DNA could not be created');
        }
        layersOutput.push(file);
        log(`${layer.name}: ${file.name}`);
        return null;
      }

      if (layer?.variants && layer?.variants?.length) {
        const variant = dnaInstance.selectVariant({
          beforeVariantName,
          variants: layer?.variants,
          nameDir: layer.name,
        }) as OutSelectVariantType;

        if (variant && variant?.files?.length) {
          if (!beforeVariantName) {
            beforeVariantName = variant.name;
          }
          const file = this.selectLayerFile({
            files: variant.files.map((fil) => ({
              ...fil,
              weight: variant.weight,
            })),
            name: variant.nameDir,
            weight: variant.weight,
            variant: variant.name,
            absolutePath: withAbsolutePath ? '' : layersDir,
            description: variant.description,
          });
          if (!file) {
            throw new Error('DNA could not be created');
          }
          layersOutput.push(file);
          log(`${layer.name}: ${variant.name}/${file.name}`);
          return null;
        }
      }
      return null;
    });

    return layersOutput;
  }

  async generate() {
    const {
      layers: layerSettings,
      imageOptions,
      pathBuild,
    } = this.layoutsSettings;

    while (this.store.currentVariantIndex < layerSettings.growEditionSizeTo) {
      const indexEdition = this.store.currentVariantIndex + 1;
      log(`*** Generating DNA #${indexEdition} ***`, { type: 'info' });

      const layers = this.preConfigure();
      const loadedElements: Promise<ImageType | null>[] = [];

      const imageInstance = new Image(imageOptions, this.store);
      const { width, height } = imageInstance;

      layers.forEach((layer) => {
        loadedElements.push(imageInstance.loadLayerImg(layer));
      });

      await Promise.all(loadedElements).then((renderObjectArray) => {
        imageInstance.ctx.clearRect(0, 0, width, height);

        renderObjectArray.forEach((renderObject) => {
          renderObject && imageInstance.drawElement(renderObject);
        });
        imageInstance.saveImage(indexEdition, pathBuild);
        imageInstance.addMetadata(
          renderObjectArray[0]?.layer as LayerType,
          indexEdition
        );
        imageInstance.saveMetaDataSingleFile(indexEdition, pathBuild);
      });

      dnaInstance.nextCount();
      this.store.continue();
    }

    writeMetaData(
      JSON.stringify(this.store.getMetaDataList(), null, 2),
      pathBuild
    );
  }
}
