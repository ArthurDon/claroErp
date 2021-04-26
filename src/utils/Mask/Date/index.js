/**
 * Function Validator Date
 * @param {int} value
 */
export function maskDate(value) {
  const dateTime = new Date(value);
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();
  const month = dateTime.getUTCMonth();

  const arrMonth = [];
  arrMonth[0] = 'janeiro';
  arrMonth[1] = 'fevereiro';
  arrMonth[2] = 'março';
  arrMonth[3] = 'abril';
  arrMonth[4] = 'maio';
  arrMonth[5] = 'junho';
  arrMonth[6] = 'julho';
  arrMonth[7] = 'agosto';
  arrMonth[8] = 'setembro';
  arrMonth[9] = 'outubro';
  arrMonth[10] = 'novembro';
  arrMonth[11] = 'dezembro';

  return `${date} de ${arrMonth[month]} de ${year}`;
}
