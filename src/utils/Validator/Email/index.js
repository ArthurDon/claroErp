import emailValidator from 'email-validator';

/**
 * Function Validator Email
 * @param {string} value
 */
export function validatorEmail(value) {
  if (emailValidator.validate(value) === false) {
    return {
      status: false,
      message: 'Por favor, digite um endereço de e-mail válido!',
    };
  }

  return { status: true, email: value };
}

/**
 * Function Validator Identical Email
 * @param {string} value1
 * @param {string} value2
 */
export function validatorIdenticalEmail(value1, value2) {
  if (emailValidator.validate(value1) === false) {
    return {
      status: false,
      message: 'Por favor, digite um endereço de e-mail válido!',
    };
  }

  if (emailValidator.validate(value2) === false) {
    return {
      status: false,
      message: 'Por favor, confirme seu email com um endereço válido!',
    };
  }

  if (value1 !== value2) {
    return {
      status: false,
      message:
        'Ops, os emails não conferem. Verifique os campos e tente novamente!',
    };
  }

  return { status: true, email: value1 };
}
