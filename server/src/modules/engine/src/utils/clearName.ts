const rarityDelimiter = '#';

const cleanName = (_str: string) => {
  const nameWithoutExtension = _str.slice(0, -4);
  return nameWithoutExtension.split(rarityDelimiter).shift();
};

export default cleanName;
