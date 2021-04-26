/**
 * Function Validator Progress
 * @param {int} value
 */
export function maskProgress(campo1, campo2) {
  const value = (campo2 / campo1) * 100;
  return `${Math.round(value)}%`;
}
