import React from 'react';
import PropTypes from 'prop-types';
import PasswordMask from 'react-password-mask';

const FormSendPassword = ({
  onSubmit,
  onChange,
  password,
  confirmPassword,
}) => (
  <>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>Crie uma nova senha</h1>
    </header>
    <form onSubmit={onSubmit} className="frm-login">
      <label htmlFor="pass">Digite sua NOVA SENHA</label>
      <PasswordMask
        name="password"
        id="password"
        placeholder="Digite uma nova senha"
        value={password}
        onChange={onChange}
        showButtonContent="Exibir"
        hideButtonContent="Ocultar"
      />
      <label htmlFor="pass2">Digite novamente sua NOVA SENHA</label>
      <PasswordMask
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Digite a senha novamente"
        value={confirmPassword}
        onChange={onChange}
        showButtonContent="Exibir"
        hideButtonContent="Ocultar"
      />
      <span className="msg-error hidden">
        <p>Esse número está associadoà conta: de*****froi@fs.com.br</p>
        <p>
          Se este for o seu e-mail, <a href="/#">faça login</a> utilizando ele.
          Se você não tiver acesso a este e-mail{' '}
          <a href="/#">entre em contato com o suporte técnico</a>
        </p>
      </span>
      <input type="submit" value="Redefinir senha" />
    </form>
  </>
);

FormSendPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSendPassword;
