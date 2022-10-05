import { LayoutSettings } from '@/engine/core/LayoutSettings';

export class Store {
  public editionCount: number = 1;

  private metadataList: any[] = [];

  public abstractedIndexes: number[] = [];

  public currentVariantIndex: number = 0;

  constructor(private readonly layout: LayoutSettings) {}

  init() {
    const { layers } = this.layout;

    // creating array from number
    this.abstractedIndexes = Array.from(
      Array(layers.growEditionSizeTo + 1).keys()
    );
  }

  continue() {
    this.editionCount += 1;
    this.currentVariantIndex += 1;
    this.abstractedIndexes.shift();
  }

  getMetaDataList() {
    return this.metadataList;
  }

  setMetaDataList(data: any) {
    this.metadataList.push(data);
  }
}
