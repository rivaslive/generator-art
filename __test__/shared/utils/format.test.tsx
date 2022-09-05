import { formatEth, formatDate } from '@/shared/utils/format';
import { BigNumber } from 'ethers';

describe('Format utils', () => {
  it('Format Date', () => {
    const date = formatDate(new Date('2022/09/03'));
    expect(date).toBe('9/3/2022');
  });

  it('Format ETH', () => {
    const THREE_ETH_IN_HEX = '0x29a2241af62c0000';
    const eth = formatEth(BigNumber.from(THREE_ETH_IN_HEX));
    expect(eth).toBe('3.0');
  });
});
