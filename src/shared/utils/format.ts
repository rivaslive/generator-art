import { BigNumberish, utils } from 'ethers';

export const formatEth = (eth: BigNumberish) => {
  return utils.formatUnits(eth);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US').format(date);
};
