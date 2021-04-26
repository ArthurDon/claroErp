import React from 'react';
import PropTypes from 'prop-types';
import PasswordMask from 'react-password-mask';

const FormLogin = ({ onSubmit, email, onChange, password }) => (
  <form onSubmit={onSubmit} className="frm-login">
    <label htmlFor="email">Digite seu e-mail</label>

    <input
      name="email"
      value={email}
      type="email"
      onChange={onChange}
      id="email"
      placeholder="Seu e-mail"
      autoComplete="off"
      required
    />
    <label htmlFor="pass">Digite sua senha</label>
    <PasswordMask
      name="password"
      id="password"
      placeholder="Sua senha"
      value={password}
      onChange={onChange}
      showButtonContent="Exibir"
      hideButtonContent="Ocultar"
      required
    />
    <input type="submit" value="Entrar" />
  </form>
);

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormLogin;
