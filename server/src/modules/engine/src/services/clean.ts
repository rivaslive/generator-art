import fs from 'fs';

export const clearPreviusBuild = (assetRoot: string, exportGif: boolean) => {
  if (fs.existsSync(assetRoot)) {
    fs.rmdirSync(assetRoot, { recursive: true });
  }
  fs.mkdirSync(assetRoot);
  fs.mkdirSync(`${assetRoot}/json`);
  fs.mkdirSync(`${assetRoot}/images`);

  if (exportGif) {
    fs.mkdirSync(`${assetRoot}/gifs`);
  }
};
