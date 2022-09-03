import { Dropdown } from 'antd';

import config from '@/shared/config';
import { useWeb3 } from '@/context/Web3Context';

import menu from './menu';
import { AccountTextStyle, ButtonStyle, ImageStyle } from './style';
import { CreditCardOutlined } from '@ant-design/icons';

const { ETH_ROPSTEN_NETWORK_ID } = config;

const AccountAndNetwork = (props: BaseComponent) => {
  const { switchNetwork, network, account } = useWeb3();

  if (!network) return null;

  const isRopstenNet = network.chainId === ETH_ROPSTEN_NETWORK_ID;

  return (
    <Dropdown
      arrow
      placement="bottom"
      trigger={['click']}
      key={`network-${network.chainId}`}
      overlay={menu({ network, switchNetwork, account })}
      {...props}
    >
      <ButtonStyle
        margin="0 0 0 10px"
        withMinWidth={false}
        bgColor={isRopstenNet ? 'borderColor' : 'error'}
        icon={
          isRopstenNet ? (
            <CreditCardOutlined
              style={{ marginRight: 10, fontSize: 16, marginTop: 3 }}
            />
          ) : (
            <ImageStyle width={20} height={20} src="/metamask.svg" />
          )
        }
      >
        <AccountTextStyle $width={isRopstenNet ? 100 : 150} fontSize="13px" fontWeight={700}>
          {isRopstenNet ? account : 'Select Ropsten Network'}
        </AccountTextStyle>
      </ButtonStyle>
    </Dropdown>
  );
};

export default AccountAndNetwork;
