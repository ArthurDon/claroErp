import axios from 'axios';
import { URL_FIREBASE, API_KEY_FIREBASE } from '../../constants';

const HEADERS = {
  'Content-Type': 'application/json',
};

/**
 * Function Verify Custom Token
 * @param {json} customToken
 */
export async function verifyCustomToken(customToken) {
  const body = {
    token: customToken,
    returnSecureToken: true,
  };

  try {
    const response = await axios.post(
      `${URL_FIREBASE}/verifyCustomToken?key=${API_KEY_FIREBASE}`,
      body,
      { headers: HEADERS }
    );
    return {
      status: true,
      idToken: response.data.idToken,
      refresh_token: response.data.refreshToken,
    };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro. Tente novamente!`,
      };
    }

    if (error.request) {
      return {
        status: false,
        message: `Ops, ocorreu um erro. Tente novamente!`,
      };
    }

    return { status: false, message: `Ops, ocorreu um erro. Tente novamente!` };
  }
}
