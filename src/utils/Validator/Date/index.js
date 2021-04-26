import moment from 'moment';

/**
 * Function Validator Date
 * @param {int} value
 */
export function validatorDate(value) {
  if (!moment(value, 'DD-MM-YYYY').isValid()) {
    return {
      status: false,
      message: 'Data incorreta, verifique a data digitada e tente novamente!',
    };
  }

  return { status: true, date: value };
}
