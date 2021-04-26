import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import ModalHelp from '../../../../Containers/Modal/Help';

const FormSendPhone = ({ onSubmit, phone, onChange }) => (
  <section>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>
        Digite seu número de telefone <strong>CLARO</strong> utilizado no
        momento da compra do produto
      </h1>
    </header>
    <form className="frm-login" onSubmit={onSubmit}>
      <label htmlFor="cellphone">Digite seu número de celular CLARO</label>
      <NumberFormat
        value={phone}
        onChange={onChange}
        type="text"
        id="cellphone"
        className="phone"
        name="phone"
        placeholder="Seu número CLARO"
        required
        format="(##) #####-####"
        mask="_"
      />
      <input type="submit" value="Continuar" />
      <ModalHelp />
    </form>
  </section>
);

FormSendPhone.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSendPhone;
