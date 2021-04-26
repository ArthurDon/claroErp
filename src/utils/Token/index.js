import IP from 'ip';
import Bowser from 'bowser';
import JWT from 'jsonwebtoken';

import { SECRET_KEY } from '../../constants';

import { enCrypto, deCrypto } from '..';

/**
 * Function Authorize Token
 */
export const isAuthorizated = () => {
  const ip = IP.address();
  const token = localStorage.getItem('token');
  const browserParse = Bowser.getParser(window.navigator.userAgent);
  const browser = browserParse.getBrowserName();

  return JWT.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      localStorage.removeItem('token');
      return false;
    }

    const response = deCrypto(decoded.data);

    if (!(browser === response.browser) && ip === response.ip) {
      localStorage.removeItem('token');
      return false;
    }

    return true;
  });
};

/**
 * Function Create Token
 * @param {obj} idToken
 * @param {string} email
 */
export function createToken(idToken, email) {
  const ip = IP.address();
  const browserParse = Bowser.getParser(window.navigator.userAgent);
  const browser = browserParse.getBrowserName();

  return JWT.sign(
    {
      data: enCrypto({
        token: idToken,
        email,
        browser,
        ip,
      }),
    },
    SECRET_KEY,
    { expiresIn: '1h' },
    (err, token) => {
      if (err) {
        return false;
      }
      localStorage.setItem('token', token);
      return true;
    }
  );
}

/**
 * Function Validate Token
 * @param {string} type
 */
export function validateToken(type) {
  const token = localStorage.getItem('token');

  return JWT.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return false;
    }

    const response = deCrypto(decoded.data);

    switch (type) {
      case 'token':
        return response.token;
      case 'email':
        return response.email;
      case 'phone':
        return response.phone;
      case 'idToken':
        return response.idToken;
      case 'refresh_token':
        return response.refresh_token;
      default:
        return response.token;
    }
  });
}

/**
 * Function Remove Token
 */
export function removeToken() {
  const token = localStorage.getItem('token');

  return JWT.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return false;
    }
    localStorage.removeItem('token');
    window.location = '/';
    return true;
  });
}
