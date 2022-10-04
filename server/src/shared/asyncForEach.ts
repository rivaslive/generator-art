export default function asyncForEach<ArrayType = any, Return = any>(
  arr: ArrayType[],
  callback: (item: ArrayType, index: number) => Promise<Return>
) {
  return Promise.all(arr.map(async (item, index) => {
    return await callback(item, index);
  }));
}
