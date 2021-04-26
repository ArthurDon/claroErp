import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { URL_BACKEND, BRAND_NAME, REQUESTER_NAME } from '../../constants';

import { validateToken, enCrypto } from '../../utils';

const HEADERS = {
  'Content-Type': 'application/json',
  'X-FS-Correlation-ID': uuidv4(),
  'X-FS-Requester-Name': REQUESTER_NAME,
  'X-FS-Brand-Name': BRAND_NAME,
  Authorization: `Bearer ${validateToken('token')}`,
};

const HEADERS1 = {
  'Content-Type': 'application/json',
  'X-FS-Correlation-ID': uuidv4(),
  'X-FS-Requester-Name': REQUESTER_NAME,
  'X-FS-Brand-Name': BRAND_NAME,
};

/**
 * Function Send Forgot Password
 * @param {string} email
 */
export async function sendForgotPassword(email) {
  const body = { email };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/forgotpassword`,
      body,
      { headers: HEADERS1 }
    );
    return { status: true, data: response };
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

/**
 * Function Send Check Password
 * @param {string} password
 * @param {string} email
 */
export async function sendCheckPassword(email, password) {
  const body = {
    email,
    password: enCrypto(password),
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/check-password`,
      body,
      { headers: HEADERS }
    );
    return { status: true, customToken: response.data.custom_token };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, você nao tem permissão para acessar. Tente novamente!`,
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

/**
 * Function Get Subscriptions
 */
export async function getSubscriptions() {
  try {
    const response = await axios.get(
      `${URL_BACKEND}/bff/api/v2/erp/subscriptions`,
      { headers: HEADERS }
    );
    return { status: true, data: response };
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

/**
 * Function Send Change Password
 * @param {string} hash
 * @param {string} password
 */
export async function sendChangePassword(hash, password) {
  const body = {
    password: enCrypto(password),
  };

  let hashUrl = '';
  let header = HEADERS;

  if (hash) {
    header = HEADERS1;
    hashUrl = `/${hash}`;
  }

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/changepassword${hashUrl}`,
      body,
      { headers: header }
    );
    return { status: true, data: response };
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

/**
 * Function Send Merge Account
 * @param {string} idToken
 * @param {string} password
 * @param {int} cnpj
 * @param {string} email
 * @param {int} msisdn
 */
export async function sendMergeAccount(idToken, password, cnpj, email, msisdn) {
  HEADERS1.Authorization = `Bearer ${idToken}`;

  const body = {
    password: enCrypto(password),
    cnpj,
    email,
    msisdn,
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/mergeAccount`,
      body,
      { headers: HEADERS1 }
    );
    return { status: true, data: response };
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

/**
 * Function Get Merge Account
 * @param {string} hash
 */
export async function getMergeAccount(hash) {
  try {
    const response = await axios.get(
      `${URL_BACKEND}/bff/api/v2/erp/mergeAccount/${hash}`,
      { headers: HEADERS }
    );
    return { status: true, data: response };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: `Ops, ocorreu um erro ao ativar seu produto. Tente novamente!`,
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

/**
 * Function Send External Token
 * @param {string} code
 */
export async function sendExternalToken(code) {
  const body = {
    code: code.toString(),
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/externalToken`,
      body,
      { headers: HEADERS }
    );
    return { status: true, accessUrl: response.data.access_url };
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

/**
 * Function Send User
 * @param {string} name
 * @param {string} email
 */
export async function sendUser(name, email) {
  const body = {
    name,
    email,
  };

  try {
    const response = await axios.post(
      `${URL_BACKEND}/bff/api/v2/erp/user`,
      body,
      { headers: HEADERS }
    );
    return { status: true, data: response.data };
  } catch (error) {
    if (error.response) {
      if (error.response.status === 409) {
        return {
          status: false,
          message: `Ops, você atingiu o limite de cadastro de usuários!`,
        };
      }

      if (error.response.status === 406) {
        return {
          status: false,
          message: `Ops, este e-mail já está em uso. Por favor tente outro e-mail!`,
        };
      }

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

/**
 * Function Delete User
 * @param {string} email
 * @param {int} code
 */
export async function deleteUser(code, email) {
  const body = {
    user_code: code,
    email,
  };

  try {
    const response = await axios.delete(
      `${URL_BACKEND}/bff/api/v2/erp/userDelete`,
      {
        headers: HEADERS,
        data: body,
      }
    );
    return { status: true, data: response.data };
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

/**
 * Function Get Plans
 */
export async function getPlans() {
  try {
    const response = await axios.get(
      `${URL_BACKEND}/bff/api/v2/erp/subscriptions?partner=egestor`,
      { headers: HEADERS }
    );

    return {
      status: true,
      subscriptions: response.data.subscriptions,
      user: {
        phone:
          response.data.user.phone !== null
            ? response.data.user.phone.toString()
            : '',
        email: response.data.user.email,
        name: response.data.user.name,
      },
    };
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
