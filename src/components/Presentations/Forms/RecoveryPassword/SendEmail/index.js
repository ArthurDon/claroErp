import React from 'react';
import PropTypes from 'prop-types';

const FormSendEmail = ({ onSubmit, onChange, email }) => (
  <>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>Digite seu e-mail de cadastro</h1>
    </header>
    <form onSubmit={onSubmit} className="frm-login">
      <label htmlFor="email">Seu e-mail</label>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="email"
        id="email"
        placeholder="Digite seu e-mail de cadastro"
        autoComplete="off"
        required
      />
      <span className="msg-error hidden">
        <p>Esse número está associadoà conta: de*****froi@fs.com.br</p>
        <p>
          Se este for o seu e-mail, <a href="/#">faça login</a> utilizando ele.
          Se você não tiver acesso a este e-mail{' '}
          <a href="/#">entre em contato com o suporte técnico</a>
        </p>
      </span>
      <input type="submit" value="Recuperar senha" />
    </form>
  </>
);

FormSendEmail.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSendEmail;
