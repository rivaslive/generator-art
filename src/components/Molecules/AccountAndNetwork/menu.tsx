import { message } from 'antd';
import { BigNumberish } from 'ethers';
import { CopyOutlined } from '@ant-design/icons';
import type { Network } from '@ethersproject/networks';
import { ItemType, MenuDividerType } from 'antd/es/menu/hooks/useItems';

import Text from '@/components/Atoms/Text';
import Button from '@/components/Atoms/Button';
import { ETH_ROPSTEN_NETWORK_ID } from '@/config';
import TabsAddress from '@/components/Molecules/AccountAndNetwork/Tabs';
import {
  AccountImageStyle,
  AccountTextStyle,
  AccountWrapperStyle,
  DotStyle,
  MenuWrapperStyle,
} from './style';

type SwitchNetworkProps = (chanId: number) => void;

type MenuItemType = ItemType | MenuDividerType;

type MenuProps = {
  network: Network;
  switchNetwork: SwitchNetworkProps;
  account: string | null;
  balance?: BigNumberish;
  balanceAccount?: BigNumberish;
};

const PLACEHOLDER_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAMZJREFUWEdj3Cty/T8DCWAN/zq8qkM+BpFgGgMD46gDBjwEMpVbUdIAehyixzmhOCakHl2ecdQBAx4C6ImQUBySlMkZGBgImYdRDhDSMOoAmodA/YHPKHbo+u8m1U4U9Zc3uqLwGx14UfgYaWDUAXQPAfSCiFCEo8cpunpS0wxGXTDqALqHAKEGCXqiRM/H6A4mVT3BNiGpBpKqftQBBLMhoTYgoURLqB8x6oCBDwGbK6dQ+gWE8jmhOCckj55NGUcdMNAhAAAMieq1Yy/WUAAAAABJRU5ErkJggg==';

const menu = ({
  network,
  switchNetwork,
  account,
  balanceAccount,
  balance,
}: MenuProps) => {
  const copy = () => {
    message.success('Copy wallet direction');
  };

  const haveOtherNet = network?.chainId !== ETH_ROPSTEN_NETWORK_ID;
  const otherNetwork = haveOtherNet
    ? [
        {
          key: network.name,
          icon: <DotStyle $color="error" $check />,
          label: (
            <div onClick={() => switchNetwork(network.chainId)}>
              {network.name}
            </div>
          ),
        },
      ]
    : [];

  const networks: MenuItemType[] = [
    {
      key: 'network',
      label: (
        <Text fontWeight={800} fontSize="1.3rem">
          Networks
        </Text>
      ),
    },
    {
      key: 'divider1',
      type: 'divider',
    },
    {
      key: 'ropsten',
      label: (
        <div onClick={() => switchNetwork(ETH_ROPSTEN_NETWORK_ID)}>
          Ropsten (Testnet)
        </div>
      ),
      icon: (
        <DotStyle
          $check={network.chainId === ETH_ROPSTEN_NETWORK_ID}
          $color="success"
        />
      ),
    },
    ...otherNetwork,
  ];

  networks.push({
    key: 'divider2',
    type: 'divider',
  });

  networks.push({
    key: 'account',
    label: (
      <Text fontWeight={800} fontSize="1.3rem">
        Account
      </Text>
    ),
  });

  networks.push({
    key: 'divider3',
    type: 'divider',
  });

  networks.push({
    key: 'account-value',
    label: (
      <div
        onClick={(event) => {
          event?.stopPropagation();
        }}
      >
        <AccountWrapperStyle>
          <AccountImageStyle src={PLACEHOLDER_IMAGE} />
          <AccountTextStyle>{account}</AccountTextStyle>
          <Button
            onClick={copy}
            withMinWidth={false}
            bgColor="borderColor"
            icon={<CopyOutlined />}
          />
        </AccountWrapperStyle>

        <TabsAddress
          network={network}
          balance={balance}
          balanceAccount={balanceAccount}
        />
      </div>
    ),
  });

  return <MenuWrapperStyle items={networks} />;
};

export default menu;
