import { BigNumberish, utils } from 'ethers';

export const formatEth = (eth: BigNumberish, decimalsNumber?: number) => {
  const ethRes = utils.formatUnits(eth);
  if (decimalsNumber) {
    return Number(ethRes).toFixed(decimalsNumber)
  }
  return ethRes;
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US').format(date);
};
