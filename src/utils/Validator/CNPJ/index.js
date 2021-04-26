/**
 * Function Validator CNPJ
 * @param {int} value
 */
export function validatorCNPJ(value) {
  const cnpj = value.replace(/[^0-9]+/g, '');

  if (cnpj.length < 14) {
    return {
      status: false,
      message: 'Por favor, digite um número de CNPJ válido!',
    };
  }

  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  )
    return {
      status: false,
      message: 'Por favor, digite um número de CNPJ válido!',
    };

  return { status: true, cnpj };
}
