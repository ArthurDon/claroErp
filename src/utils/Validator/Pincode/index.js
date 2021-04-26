/**
 * Function Validator Pincode
 * @param {int} value
 */
export function validatorPincode(value) {
  const pincode = value.replace(/[^0-9]+/g, '');

  if (pincode.length < 6) {
    return {
      status: false,
      message:
        'Código incorreto, verifique a mensagem enviada e tente novamente!',
    };
  }

  return { status: true, pincode };
}
