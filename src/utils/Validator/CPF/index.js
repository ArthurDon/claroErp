import CPF from 'cpf';

/**
 * Function Validator CPF
 * @param {int} value
 */
export function validatorCPF(value) {
  if (!CPF.isValid(value)) {
    return {
      status: false,
      message: 'Por favor, digite um número de CPF válido!',
    };
  }

  const cpf = value.replace(/[^0-9]+/g, '');
  return { status: true, cpf };
}
