export default function getRandomArbitrary(_min = 0, _max = 0) {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
