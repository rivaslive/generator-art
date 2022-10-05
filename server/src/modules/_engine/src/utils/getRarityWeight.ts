const rarityDelimiter = "#";

const getRarityWeight = (_str: string) => {
  const nameWithoutExtension = _str.slice(0, -4);
  let nameWithoutWeight = Number(
    nameWithoutExtension.split(rarityDelimiter).pop()
  );
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(nameWithoutWeight)) {
    nameWithoutWeight = 1;
  }
  return nameWithoutWeight;
};

export default getRarityWeight;
