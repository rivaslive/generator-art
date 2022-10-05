import { useCallback, useEffect, useState } from 'react';
import Container from '@/components/Atoms/Container';
import ConnectDriveCard from '@/components/Molecules/ConnectDriveCard';
import { TitleStyle } from './style';
import { googleId } from '@/config';

type ConnectDriveTemplateProps = BaseComponent & {};

const ConnectWalletTemplate = (props: ConnectDriveTemplateProps) => {
  const [gapi, setGapi] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const updateUser = (currentUser: any) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setUser({
      name,
      profileImg: profileImg,
    });
  };

  const attachSignin = useCallback((element: any, auth2: any) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        updateUser(googleUser);
      },
      (error: any) => {
        console.log(JSON.stringify(error));
      },
    );
  }, []);

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log('User signed out.');
    });
  };

  useEffect(() => {
    const loaderGapi = async () => {
      const _gapi = await import('gapi-script').then((pack) => pack.gapi);
      const loadAuth2 = await import('gapi-script').then(
        (pack) => pack.loadAuth2,
      );
      const auth2 = await loadAuth2(_gapi, googleId, '');
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById('customBtn'), auth2);
      }

      setGapi(auth2);
    };

    loaderGapi();
  }, [attachSignin]);

  return (
    <Container {...props} size="small">
      <TitleStyle>Connect</TitleStyle>
      <div id="g-signin2" data-onsuccess={console.log} />
      <ConnectDriveCard  id="customBtn"/>
    </Container>
  );
};

export default ConnectWalletTemplate;
