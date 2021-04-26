// to import a specific method
import ViaCep from 'node-viacep';

const viacep = new ViaCep({
  type: 'json',
});

/**
 * Function Validator CEP
 * @param {int} value
 */
export function validatorCEP(value) {
  const cep = value.replace(/[^0-9]+/g, '');
  const address = viacep.zipCod.getZip(cep);

  return address.then((data) => data.json()).then((data) => data);
}
