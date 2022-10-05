import path from 'path';
import {
  createCanvas,
  loadImage,
  Image as ImageCanvasType,
  CanvasRenderingContext2D,
  Canvas,
} from 'canvas';
import fs from 'fs';
import { LayerType } from '@/engine/interfaces/types';
import { Store } from '@/engine/core/store';

const sha1 = require('sha1');

export type ImageType = {
  layer: LayerType;
  loadedImage: ImageCanvasType | null;
};

// TODO: Generate Metadata
const namePrefix = 'Sensei';
const description =
  'A Sensei trained in the ancient arts of battle, brought to war against the imminent takeover of a corrupt system, led by Buddha A.I.';
// const baseUri = 'ipfs://NewUriToReplace';
const extraMetadata = {};
const solanaMetadata = {
  symbol: 'SSL',
  seller_fee_basis_points: 888, // Define how much % you want from secondary market sales 1000 = 10%
  // external_url: 'https://',
  creators: [
    {
      address: 'A9CQwKPdpAdpHNNCEJHhXNXjjzXJB9mEZ5sjBWsJnerd',
      share: 100,
    },
  ],
};

export default class Image {
  private canvas: Canvas;

  public ctx: CanvasRenderingContext2D;

  public width: number;

  public height: number;

  public attributesList: any[] = [];

  constructor(
    format: { width: number; height: number; smoothing: boolean },
    private store: Store
  ) {
    this.canvas = createCanvas(format.width, format.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = format.smoothing;
    this.width = format.width;
    this.height = format.height;
  }

  addAttributes(element: ImageType) {
    const selectedElement = element.layer;
    this.attributesList.push({
      trait_type: selectedElement.nameDir,
      value: selectedElement.isNone ? 'None' : selectedElement.name,
    });
  }

  drawElement(renderObject: ImageType) {
    if (renderObject.loadedImage) {
      const { ctx, height, width } = this;
      ctx.globalAlpha = renderObject.layer.opacity;
      ctx.globalCompositeOperation = renderObject.layer.blend;
      ctx.drawImage(renderObject.loadedImage, 0, 0, width, height);
    }

    this.addAttributes(renderObject);
  }

  async loadLayerImg(layer: LayerType) {
    try {
      return new Promise<ImageType | null>(async (resolve) => {
        if (layer?.isNone) {
          return resolve({ layer, loadedImage: null });
        }
        const image = await loadImage(`${layer.path}`);
        return resolve({ layer, loadedImage: image });
      });
    } catch (error) {
      console.error('Error loading image:', error);
      return Promise.resolve<null>(null);
    }
  }

  saveImage(editionCount: number, buildDir: string) {
    const imagesDir = path.resolve(buildDir, 'images')
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir)
    }

    fs.writeFileSync(
      path.resolve(imagesDir, `${editionCount}.png`),
      this.canvas.toBuffer('image/png')
    );
  }

  addMetadata(dna: LayerType, edition: number) {
    const dateTime = Date.now();
    const defaultMetadata = {
      name: `${namePrefix} #${edition}`,
      description,
      // image: `${baseUri}/${edition}.png`,
      dna: sha1(dna),
      edition,
      date: dateTime,
      ...extraMetadata,
      attributes: this.attributesList,
      compiler: 'Buddha A.I. Engine',
    };

    const tempMetadata = {
      // Added metadata for solana
      name: defaultMetadata.name,
      symbol: solanaMetadata.symbol,
      description: defaultMetadata.description,
      // Added metadata for solana
      seller_fee_basis_points: solanaMetadata.seller_fee_basis_points,
      image: `${edition}.png`,
      // Added metadata for solana
      // external_url: solanaMetadata.external_url,
      edition,
      ...extraMetadata,
      attributes: defaultMetadata.attributes,
      properties: {
        files: [
          {
            uri: `${edition}.png`,
            type: 'image/png',
          },
        ],
        category: 'image',
        creators: solanaMetadata.creators,
      },
    };
    this.store.setMetaDataList(tempMetadata);
    this.attributesList = [];
  }

  saveMetaDataSingleFile(editionCount: number, buildDir: string) {
    const metadata = this.store
      .getMetaDataList()
      .find((meta) => meta.edition === editionCount);

    const jsonDir = path.resolve(buildDir, 'json')
    if (!fs.existsSync(jsonDir)) {
      fs.mkdirSync(jsonDir)
    }

    fs.writeFileSync(
      path.resolve(jsonDir, `${editionCount}.json`),
      JSON.stringify(metadata, null, 2)
    );
  }
}
