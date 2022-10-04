import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/config';

const client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'postmessage'
);

async function verify(code: string, type: TokenType) {
  try {
    let token = code;

    if (type === 'code') {
      const { tokens } = await client.getToken(code);
      token = tokens?.id_token || code;
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (payload && payload.email_verified) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { email, given_name, family_name } = payload;
      return {
        email,
        firstName: given_name,
        lastName: family_name,
      };
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const GoogleAuth = {
  verify,
};

export default GoogleAuth;
