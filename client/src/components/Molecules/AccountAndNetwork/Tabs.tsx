import { Tabs } from 'antd';
import { BigNumberish } from 'ethers';
import { Network } from '@ethersproject/networks';

import Text from '@/components/Atoms/Text';
import { formatEth } from '@/shared/utils/format';
import { TabStyle } from './style';

type TabsAddressType = {
  balanceAccount?: BigNumberish;
  balance?: BigNumberish;
  network: Network;
};

const TabsAddress = ({ balance, balanceAccount, network }: TabsAddressType) => {
  return (
    <TabStyle defaultActiveKey="address">
      <Tabs.TabPane tab="Address" key="address">
        {balanceAccount ? (
          <Text margin="10px 0" fontSize="1.5rem" fontWeight={700}>
            {formatEth(balanceAccount, 4)} {network?.name}ETH
          </Text>
        ) : null}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Token Quiz" key="token">
        {balance ? (
          <Text margin="10px 0" fontSize="1.5rem" fontWeight={700}>
            {formatEth(balance)} {network?.name}ETH
          </Text>
        ) : null}
      </Tabs.TabPane>
    </TabStyle>
  );
};

export default TabsAddress;
