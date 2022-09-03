import { BigNumberish, utils } from 'ethers';

export const formatEth = (eth: BigNumberish) => {
  return utils.formatUnits(eth);
};
