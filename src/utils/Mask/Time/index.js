/**
 * Function Validator Time
 * @param {int} value
 */
export function maskTime(value, type = null) {
  const hours = Math.floor(value / 60);
  const remainingMinutes = value % 60;

  switch (type) {
    case 1:
      return `${hours}h ${remainingMinutes}m`;

    default:
      return `${hours} horas e ${remainingMinutes} minutos`;
  }
}
