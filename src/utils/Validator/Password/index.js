import PasswordValidator from 'password-validator';

/**
 * Function Validator Password
 * @param {string} password
 */
export function validatorPassword(password) {
  const schema = new PasswordValidator();

  if (!schema.is().min(8).validate(password)) {
    return {
      status: false,
      message: 'Ops, sua senha deve ter no mínimo 8 caracteres!',
    };
  }

  if (!schema.has().uppercase().validate(password)) {
    return {
      status: false,
      message: 'Ops, sua senha deve ter letras maiúsculas!',
    };
  }

  if (!schema.has().lowercase().validate(password)) {
    return {
      status: false,
      message: 'Ops, sua senha deve ter letras minúsculas!',
    };
  }

  if (!schema.has().digits(2).validate(password)) {
    return {
      status: false,
      message: 'Ops, sua senha deve ter pelo menos 2 números!',
    };
  }

  if (!schema.has().not().spaces().validate(password)) {
    return { status: false, message: 'Ops, sua senha não deve ter espaços!' };
  }

  return { status: true, password };
}

/**
 * Function Validator Identical Password
 * @param {string} password
 * @param {string} confirmPassword
 */
export function validatorIdenticalPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return {
      status: false,
      message:
        'Ops, as senhas não conferem. Verifique os campos e tente novamente!',
    };
  }

  return { status: true, password };
}
