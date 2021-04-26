import CryptoJS from 'crypto-js';

import { CRYPT_KEY, CRYPT_IV } from '../../constants';

/**
 * Function Encrypto
 * @param {any} decrypted
 * @returns {string}
 */
export function enCrypto(decrypted) {
  let message = '';

  switch (typeof decrypted) {
    case 'object':
      message = JSON.stringify(decrypted);
      break;
    case 'string':
      message = decrypted;
      break;
    default:
      message = String(decrypted);
  }

  const keyHex = CryptoJS.enc.Utf8.parse(CRYPT_KEY);
  const ivHex = CryptoJS.enc.Utf8.parse(CRYPT_IV);
  const messageHex = CryptoJS.enc.Utf8.parse(message);
  const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

/**
 * Function Decrypto
 * @param {string} encrypted
 * @returns {string}
 */
export function deCrypto(encrypted) {
  const keyHex = CryptoJS.enc.Utf8.parse(CRYPT_KEY);
  const ivHex = CryptoJS.enc.Utf8.parse(CRYPT_IV);
  const decrypt = CryptoJS.AES.decrypt(encrypted, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
}
