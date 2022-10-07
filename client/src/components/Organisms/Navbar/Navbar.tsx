import { useRouter } from 'next/router';
import Image from '@/components/Atoms/Image';
import ConnectWalletButton from '@/components/Atoms/ConectWalletButton';

import Button from '@/components/Atoms/Button';
import MenuPersonalLinks from '@/components/Molecules/MenuPersonalLinks';
import {
  HeaderColumnStyle,
  HeaderContainerStyle,
  HeaderContentStyle,
  HeaderStyle,
} from './style';
import ROUTES from '@/config/routes';
import Link from 'next/link';

type NavbarProps = BaseComponent & {};

const Navbar = (props: NavbarProps) => {
  const { pathname } = useRouter();

  const isGallery = pathname === ROUTES.GALLERY.path;

  return (
    <HeaderStyle {...props}>
      <HeaderContainerStyle>
        <HeaderContentStyle>
          <HeaderColumnStyle>
            <Image
              width={220}
              alt="Generate Arts"
              className="only-desk"
              src="/brand.png"
            />
            <Image
              alt="Membrane icon"
              width={50}
              className="only-mobile"
              src="/brand-icon.png"
            />
          </HeaderColumnStyle>
          <HeaderColumnStyle>
            <Link href={ROUTES.GALLERY.path} passHref>
              <a>
                <Button
                  withMinWidth={false}
                  bgColor="transparent"
                  style={{
                    marginRight: 20,
                    borderRadius: 0,
                    borderBottom: '2px solid transparent',
                    borderBottomColor: isGallery ? '#4285F4' : 'transparent',
                  }}
                  color={isGallery ? 'primary' : 'text'}
                >
                  Gallery
                </Button>
              </a>
            </Link>
            <ConnectWalletButton className="only-desk flex" />
            <MenuPersonalLinks />
          </HeaderColumnStyle>
        </HeaderContentStyle>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};

export default Navbar;
