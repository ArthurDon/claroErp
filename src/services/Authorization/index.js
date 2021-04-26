import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  URL_BACKEND,
  BRAND_NAME,
  REQUESTER_NAME,
  CLIENT_ID,
  CLIENT_SECRET,
} from '../../constants';

const HEADERS = {
  'Content-Type': 'application/json',
  'X-FS-Correlation-ID': uuidv4(),
  'X-FS-Requester-Name': REQUESTER_NAME,
  'X-FS-Brand-Name': BRAND_NAME,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  'X-FS-Is-BFF': 'true',
};

/**
 * Function Authorize FS Auth Token
 * @param {json} fsAuthToken
 */
export async function authorization(fsAuthToken) {
  const body = {
    'fs-auth-token': fsAuthToken,
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/authorization/api/v1/authorize`,
      body,
      { headers: HEADERS }
    );
    return {
      status: true,
      customToken: response.data.authorization.custom_token,
    };
  } catch (error) {
    if (error.response.status === 404) {
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
