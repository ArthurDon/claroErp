/**
 * Function Validator Landline
 * @param {int} landline
 */
export async function validatorLandline(value) {
  const phone = value.replace(/[^0-9]+/g, '');

  if (phone.length < 10) {
    return {
      status: false,
      message: 'Por favor, digite um numero de telefone válido!',
    };
  }

  if (
    ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].indexOf(
      phone.substring(0, 2)
    ) !== -1
  ) {
    return {
      status: false,
      message: 'Por favor, digite um numero de telefone válido!',
    };
  }

  return { status: true, phone };
}
