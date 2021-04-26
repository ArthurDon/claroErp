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
 * Function Send Pincode
 * @param {int} phone
 */
export async function sendPincode(phone) {
  const body = {
    msisdn: phone,
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/authentication/v1/send`,
      body,
      { headers: HEADERS }
    );
    return { status: true, transactionId: response.data.transaction_id };
  } catch (error) {
    if (error.response) {
      return { status: false, message: `Ops, ocorreu um erro.` };
    }

    if (error.request) {
      return { status: false, message: `Ops, ocorreu um erro.` };
    }

    return { status: false, message: `Ops, ocorreu um erro.` };
  }
}

/**
 * Function Validate Pincode
 * @param {int} pincode
 * @param {string} transactionId
 */
export async function validatePincode(pincode, transactionId) {
  const body = {
    pincode,
    transaction_id: transactionId,
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/authentication/v1/validate`,
      body,
      { headers: HEADERS }
    );
    return { status: true, fsAuthToken: response.data['fs-custom-token'] };
  } catch (error) {
    if (error.response.data.code === 401) {
      return {
        status: false,
        message:
          'Código incorreto, verifique a mensagem enviada e tente novamente!',
      };
    }

    if (error.response.data.code === 403) {
      return {
        status: false,
        message:
          'Código inválido ou expirado, solicite um novo código e tente novamente!',
      };
    }

    if (error.response.data.code === 406) {
      return {
        status: false,
        code: 406,
        message: `Máximo de tentativas excedido.`,
      };
    }

    if (error.request) {
      return { status: false, message: `Ops, ocorreu um erro.` };
    }

    return { status: false, message: `Ops, ocorreu um erro.` };
  }
}
