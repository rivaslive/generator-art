import Image from '@/components/Atoms/Image';
import {useWeb3} from '@/context/Web3Context';
import AccountAndNetwork from '@/components/Molecules/AccountAndNetwork';
import MenuPersonalLinks from '@/components/Molecules/MenuPersonalLinks';

import {
  HeaderColumnStyle,
  HeaderContainerStyle,
  HeaderContentStyle,
  HeaderStyle,
} from './style';

type NavbarProps = BaseComponent & {};

const Navbar = (props: NavbarProps) => {
  const { isActive } = useWeb3();

  return (
    <HeaderStyle {...props}>
      <HeaderContainerStyle>
        <HeaderContentStyle>
          <HeaderColumnStyle>
            <Image
              width={220}
              alt="Membrane"
              className="only-desk"
              src="https://assets.website-files.com/62b354280426aa3e41c0b1ec/62b354280426aa6f2bc0b1f7_logo.svg"
            />
            <Image
              alt="Membrane icon"
              className="only-mobile"
              src="https://assets.website-files.com/62b354280426aa3e41c0b1ec/62b354280426aa1addc0b210_logo-mobile.svg"
            />
          </HeaderColumnStyle>
          <HeaderColumnStyle>
            {isActive && <AccountAndNetwork />}
            <MenuPersonalLinks />
          </HeaderColumnStyle>
        </HeaderContentStyle>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};

export default Navbar;
